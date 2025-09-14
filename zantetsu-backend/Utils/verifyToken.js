import jwt from "jsonwebtoken";
import User from "../Models/User.js";

export const decodeAndGetUser = async (token) => {
    if (!token) throw new Error("Not authorized, no token found");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) throw new Error("User not found");

    return user;
}