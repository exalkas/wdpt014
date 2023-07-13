import express from "express";
import auth from "../middleware/auth.js";

import {
  handleListPosts,
  handleAddPost,
  handleLike,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/list", auth, handleListPosts);
router.post("/add", auth, handleAddPost);
router.post("/like", auth, handleLike);

export default router;
