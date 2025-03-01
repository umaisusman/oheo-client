const express = require("express");
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

// Admin-Only Route
router.get("/dashboard", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  res.json({
    message: "Welcome to your dashboard!",
    user: req.user,  
  });
});
module.exports = router;
