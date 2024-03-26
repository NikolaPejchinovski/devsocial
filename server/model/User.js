const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please provide a username!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email!"],
    },
    password: {
      type: String,
      unique: true,
      required: [true, "Please provide a password!"],
    },
    profilePic: {
      type: String,
      default: "default-profile-pic.png",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
