// controllers/googleAuth.js
import jwt from "jsonwebtoken";
import users from "../models/userModel.js";

export const googleAuthCallback = async (req, res) => {
  try {
    const user = req.user;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.redirect(
      `http://localhost:3000/login-success?token=${token}&name=${user.name}&email=${user.email}`
    );
  } catch (error) {
    console.error("Google OAuth callback error:", error);
    res.redirect("http://localhost:3000/login-failure");
  }
};
