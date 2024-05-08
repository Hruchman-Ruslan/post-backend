import Post from "../models/post.js";

import { ctrlWrapper } from "../decorators/index.js";

const getPostById = async ({ params }, res) => {
  const { id } = params;
  const result = await Post.findById(id);
  res.json(result);
};

export default ctrlWrapper(getPostById);
