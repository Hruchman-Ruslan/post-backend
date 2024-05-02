import Post from "../models/post.js";

import { ctrlWrapper } from "../decorators/index.js";

const addPost = async ({ body }, res) => {
  const result = await Post.create(body);
  res.status(201).json(result);
};

export default ctrlWrapper(addPost);
