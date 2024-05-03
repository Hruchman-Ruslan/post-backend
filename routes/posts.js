import express from "express";

import { addPost, getAllPosts } from "../controllers/index.js";

import { validateBody } from "../decorators/index.js";

import { isEmptyBody } from "../middlewares/index.js";

import postSchemas from "../schemas/posts.js";

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", isEmptyBody, validateBody(postSchemas.postAddSchema), addPost);

export default router;
