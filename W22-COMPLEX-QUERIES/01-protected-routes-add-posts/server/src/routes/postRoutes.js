import express from "express";
import auth from "../middleware/auth.js";

import { handleListPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/list", auth, handleListPosts);

export default router;
