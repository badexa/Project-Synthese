const User = require("../Models/userModel");

const deleteUserController = async (req, res) => {
  try {
    const userId = req.body.userId; // Assuming you're passing userId in the request body

    await User.findByIdAndDelete(userId);

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || 'Failed to delete user',
    });
  }
};

module.exports = deleteUserController;