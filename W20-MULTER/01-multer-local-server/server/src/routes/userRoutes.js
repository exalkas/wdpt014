import express from "express";
import {
  handleListUsers,
  handleAddUser,
  handleUpdateProfile,
} from "../controllers/userController.js";
import multer from "multer";

// SIMPLE CONFIGURATION OF MULTER
// const upload = multer({ dest: "./server/uploads" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    let extension = "";

    // get the rest of string after 5th character
    if (file.mimetype.includes("image"))
      extension = "." + file.mimetype.slice(6);
    console.log("🚀 ~ extension:", extension);

    console.log("INSIDE STORAGE OBJECT: file=", file);

    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/list", handleListUsers);
router.post("/add", handleAddUser);
router.put("/edit", handleListUsers);
router.delete("/delete", handleListUsers);
router.put("/updateprofile", upload.single("image"), handleUpdateProfile);

export default router;
