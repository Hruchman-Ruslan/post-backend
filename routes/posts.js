import express from "express";

import { addPost, getAllPosts } from "../controllers";

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", addPost);
