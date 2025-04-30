import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";

import { googleAuthCallback } from "../controllers/googleAuth.js"; // ✅ NEW
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import passport from "../config/passportConfig.js";

const router = express.Router();

// === Regular Auth Routes ===
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.put("/profile", requireSignIn, updateProfileController);

// === Order Routes ===
router.get("/orders", requireSignIn, getOrdersController);
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

// === Auth Check Routes ===
router.get("/user-auth", requireSignIn, (req, res) => res.status(200).send({ ok: true }));
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => res.status(200).send({ ok: true }));

// === Test Route ===
router.get("/test", requireSignIn, isAdmin, testController);

// === Google Auth Routes ===
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login-failure" }), googleAuthCallback); // ✅ NEW

export default router;
