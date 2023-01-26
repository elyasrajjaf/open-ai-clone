import mongoose from "mongoose";

const Post = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    prompt: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
