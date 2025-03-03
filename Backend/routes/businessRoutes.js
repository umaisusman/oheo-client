// const express = require("express");
// const BusinessAddress = require("../models/BusinessAddress");
// const router = express.Router();

// // Add Business Address
// router.post("/add-business-address", async (req, res) => {
//   try {
//     const {
//       userId,
//       business,
//       firstName,
//       lastName,
//       country,
//       city,
//       state,
//       zipCode,
//       phone,
//       address,
//     } = req.body;

//     if (!userId) return res.status(400).json({ message: "User ID is required" });

//     const newBusinessAddress = new BusinessAddress({
//       userId,
//       business,
//       firstName,
//       lastName,
//       country,
//       city,
//       state,
//       zipCode,
//       phone,
//       address,
//     });

//     await newBusinessAddress.save();
//     res.status(201).json({ message: "Business address added successfully", businessAddress: newBusinessAddress });
//   } catch (error) {
//     console.error("Error adding business address:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // Get Business Address by User ID
// router.get("/business-address/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const businessAddresses = await BusinessAddress.find({ userId });
//     res.json(businessAddresses);
//   } catch (error) {
//     console.error("Error fetching business addresses:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Business = require("../models/BusinessAddress");
const User = require("../models/User");

router.post("/add-business", async (req, res) => {
  try {
    const { userId, business, firstName, lastName, country, city, state, zipCode, phone, address } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newBusiness = new Business({
      userId,
      business,
      firstName,
      lastName,
      country,
      city,
      state,
      zipCode,
      phone,
      address,
    });

    await newBusiness.save();
    console.log(userId)
    res.status(201).json({ message: "Business address added successfully", data: newBusiness });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});




router.get("/user-businesses/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Fetch business addresses and populate user data
      const businesses = await Business.find({ userId }).populate("userId", "username email");
      
      if (!businesses.length) {
        return res.status(404).json({ message: "No businesses found for this user" });
      }
  
      res.status(200).json({ businesses });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  

module.exports = router;

