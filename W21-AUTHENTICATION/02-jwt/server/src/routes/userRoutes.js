import express from "express";
import {
  handleRegister,
  handleUpdateProfile,
  handleLogin,
  handleLogout,
} from "../controllers/userController.js";

import upload from "../config/multer-cloudinary.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);
router.put("/updateprofile", upload.single("image"), handleUpdateProfile);

export default router;
