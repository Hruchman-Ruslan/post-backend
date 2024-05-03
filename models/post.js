import { Schema, model } from "mongoose";

import { handleSaveError } from "./hooks.js";

const postSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

postSchema.post("save", handleSaveError);

const Post = model("post", postSchema);

export default Post;
