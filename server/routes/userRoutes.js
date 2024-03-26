const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const auth = require("../auth/auth");
const upload = require("../upload/upload");
const UserModel = require("../model/User");
const PostModel = require("../model/Post");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://nikola:${process.env.MONGO_DB_PASSWORD}@dev.me6fm3s.mongodb.net/`
);

// @desc Login
router.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      bcrypt
        .compare(password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            res.status(401).json({ msg: "Email or password incorrect", error });
          }

          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          res.cookie("jwt", token, {
            maxAge: 3600000,
            httpOnly: true,
            secure: true,
          });
          res.status(200).json({
            msg: "Login Successful",
            email: user.email,
          });
        })
        .catch((error) => {
          res.status(401).json({ msg: "Email or password incorrect", error });
        });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Login unsuccesful", error: error });
  }
});

// @desc Register
router.post("/user/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({ msg: "User created", result });
      })
      .catch((error) => {
        res.status(500).json({ msg: "Error creating user", error });
      });
  } catch (error) {
    res.status(500).json({ msg: "Password was not hashed succesfully", error });
  }
});

router.get("/user/profile", auth, (req, res) => {
  const { userId, userEmail } = req.user;

  UserModel.findById(userId).then((user) => {
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      msg: "User profile",
      username: user.username,
      email: userEmail,
      profilePic: user.profilePic,
    });
  });
});

// @desc Logout
router.post("/user/logout", auth, (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ msg: "Logout successful" });
});

// @desc Upload profile pic
router.post("/user/upload", auth, upload.single("file"), async (req, res) => {
  const { userId } = req.user;
  console.log(req.file);

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    if (!req.file) {
      res.status(404);
      throw new Error("No file uploaded");
    }

    const allowedExtensions = [".jpg", ".jpeg", ".png"];
    const fileExtension = path.extname(req.file.originalname).toLowerCase();

    console.log(`file ext: ${fileExtension}`);

    if (!allowedExtensions.includes(fileExtension)) {
      throw new Error("Invalid file type");
    }

    user.profilePic = req.file.path;

    // Save user

    user
      .save()
      .then((saved) => {
        res.json({ msg: "Successfuly saved", saved });
      })
      .catch((error) => {
        res.json({ msg: "Can't save", error });
      });

    // res.status(200).json({msg: 'File uploaded successfully'});
  } catch (error) {
    res.status(500).json({ msg: "Upload unsuccessful" });
  }
});

// @desc Post creation
router.post("/user/post/create", auth, async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await UserModel.findById(userId);
    const post = new PostModel({
      content: req.body.content,
      author: user,
    });

    // Save the post
    post
      .save()
      .then((post) => res.status(200).json({ msg: "Post created", post }))
      .catch((error) =>
        res.status(400).json({
          msg: "Coundn't create post!",
          error,
        })
      );
  } catch (error) {
    res.status(500).json({
      msg: "Couldn't create post",
      error,
    });
  }
});

// @desc Like Post
router.put("/user/post/like", auth, async (req, res) => {
  try {
    const { userId } = req.user;
    const { postId } = req.body;
    const user = await UserModel.findById(userId);
    const post = await PostModel.findById(postId);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check if already liked
    if (post.likes.includes(userId)) {
      res.status(400).json({
        msg: "Already liked!",
        error,
      });
    }

    // Update likes
    post.likes.push(user);

    // Save the post
    post
      .save()
      .then((post) => res.status(200).json({ msg: "Post updated", post }))
      .catch((error) =>
        res.status(400).json({
          msg: "Coundn't update post!",
          error,
        })
      );
  } catch (error) {
    res.status(500).json({
      msg: "Couldn't update post",
      error,
    });
  }
});

module.exports = router;
