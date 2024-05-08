import express from "express";

import { addPost, getAllPosts, getById } from "../controllers/index.js";

import { validateBody } from "../decorators/index.js";

import { isValidId, isEmptyBody } from "../middlewares/index.js";

import postSchemas from "../schemas/posts.js";

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", isEmptyBody, validateBody(postSchemas.postAddSchema), addPost);

router.get("/:id", isValidId, getById);

export default router;
