import asyncHandler from "express-async-handler";
import { decodeAndGetUser } from "../Utils/verifyToken.js";

export const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;

  try {
    req.user = await decodeAndGetUser(token);
    next();
  } catch (err) {
    res.status(401);
    throw new Error(err.message || "Not authorized, token failed");
  }
});

export const adminOnly = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as admin");
  }
});
