const express = require("express");
const router = express.Router();
const PostModel = require("../model/Post");

// @desc Get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await PostModel.find();
    if (!posts) {
      res.status(404).json({ msg: "Not found" });
    }

    res.status(200).json({
      msg: "Posts found",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Couldn't get posts",
      error,
    });
  }
});

module.exports = router;
