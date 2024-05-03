import Post from "../models/post.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAllPosts = async (_, res) => {
  const result = await Post.find({}, "-createdAt -updatedAt");
  res.json(result);
};

export default ctrlWrapper(getAllPosts);
