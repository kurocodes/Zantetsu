import express from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
  logoutUser,
} from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerUser); // POST /api/auth/register
router.post("/login", loginUser); // POST /api/auth/login
router.get("/verify", verifyUser); // GET /api/auth/verify
router.post("/logout", logoutUser); // POST /api/auth/logout

export default router;
