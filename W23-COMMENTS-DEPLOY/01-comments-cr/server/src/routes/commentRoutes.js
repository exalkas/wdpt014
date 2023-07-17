import express from "express";
import auth from "../middleware/auth.js";

import { handleAddComment } from "../controllers/commentController.js";

const router = express.Router();

router.post("/add", auth, handleAddComment);

export default router;
