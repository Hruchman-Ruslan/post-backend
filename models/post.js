import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  body: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
});

const Post = model("post", PostSchema);

export default Post;
