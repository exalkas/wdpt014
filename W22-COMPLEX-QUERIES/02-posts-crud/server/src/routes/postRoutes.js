import express from "express";
import auth from "../middleware/auth.js";

import {
  handleListPosts,
  handleAddPost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/list", auth, handleListPosts);
router.post("/add", auth, handleAddPost);

export default router;
