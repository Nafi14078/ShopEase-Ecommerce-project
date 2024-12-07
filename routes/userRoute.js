import express from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import {
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/userController.js";


const router = express.Router();

/**
 * Route: GET /api/v1/admin/users
 * Description: Fetch all users
 * Access: Admin only
 */
router.get("/users", requireSignIn, isAdmin, getAllUsers);

/**
 * Route: GET /api/v1/admin/user/:id
 * Description: Fetch a single user by ID
 * Access: Admin only
 */
router.get("/user/:id", requireSignIn, isAdmin, getUserById);

/**
 * Route: DELETE /api/v1/admin/user/:id
 * Description: Delete a user by ID
 * Access: Admin only
 */
router.delete("/user/:id", requireSignIn, isAdmin, deleteUser);

export default router;
