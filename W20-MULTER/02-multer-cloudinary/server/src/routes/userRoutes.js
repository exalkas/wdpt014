import express from "express";
import {
  handleListUsers,
  handleAddUser,
  handleUpdateProfile,
} from "../controllers/userController.js";

import upload from "../config/multer-cloudinary.js";

const router = express.Router();

router.get("/list", handleListUsers);
router.post("/add", handleAddUser);
router.put("/edit", handleListUsers);
router.delete("/delete", handleListUsers);
router.put("/updateprofile", upload.single("image"), handleUpdateProfile);

export default router;
