import express from "express";

import { addPost, getAllPosts } from "../controllers/index.js";

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", addPost);

export default router;
