import User from "../models/userModel.js"; // Import the User model

/**
 * Controller to fetch all users
 * Method: GET
 * Route: /api/v1/admin/users
 * Access: Admin Only
 */
export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({}).select("-password"); // Exclude passwords
    res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      users, // Return the list of users
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).send({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

/**
 * Controller to fetch a single user by ID
 * Method: GET
 * Route: /api/v1/admin/user/:id
 * Access: Admin Only
 */
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Get the user ID from request parameters
    const user = await User.findById(id).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).send({
      success: false,
      message: "Error fetching user",
      error: error.message,
    });
  }
};

/**
 * Controller to delete a user
 * Method: DELETE
 * Route: /api/v1/admin/user/:id
 * Access: Admin Only
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Get the user ID from request parameters
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).send({
      success: false,
      message: "Error deleting user",
      error: error.message,
    });
  }
};
