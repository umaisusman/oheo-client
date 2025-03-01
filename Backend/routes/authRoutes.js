const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
const User = require("../models/User");
const BusinessAddress = require("../models/BusinessAddress");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const { authMiddleware } = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");





// const uploadDir = path.join(__dirname, "../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer Storage Setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save to "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage });

// // Route: Upload Profile Picture
// router.post("/upload-profile", upload.single("profilePic"), async (req, res) => {
//   try {
//     console.log("File received:", req.file);
//     console.log("User ID:", req.body.userId);

//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const userId = req.body.userId;
//     if (!userId) {
//       return res.status(400).json({ message: "User ID is required" });
//     }

//     const profilePicture = `/uploads/${req.file.filename}`;
//     const updatedUser = await User.findByIdAndUpdate(userId, { profilePicture }, { new: true });

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json({ message: "Profile picture updated", profilePicture });
//   } catch (error) {
//     console.error("Error uploading profile picture:", error);
//     res.status(500).json({ message: "Error uploading profile picture", error });
//   }
// });

// Create upload directory if not exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Setup (Temporary, as we save to DB)
const storage = multer.memoryStorage(); // Store file in memory as buffer
const upload = multer({ storage });

// Route: Upload Profile Picture and Save in Database
router.post("/upload-profile", upload.single("profilePic"), async (req, res) => {
  try {
    console.log("File received:", req.file);
    console.log("User ID:", req.body.userId);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const userId = req.body.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Convert file buffer to Base64
    const profilePicture = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    // Save to MongoDB
    const updatedUser = await User.findByIdAndUpdate(userId, { profilePicture }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile picture updated", profilePicture });
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    res.status(500).json({ message: "Error uploading profile picture", error });
  }
});

module.exports = router;



router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username || null, // ✅ Save as null if not provided
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username || "", email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      token,
      username: user.username || null, // ✅ Return null if username is missing
      email: user.email,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 🛠️ Dashboard Route
// router.get("/dashboard", authMiddleware, async (req, res) => {
//   try {
//     if (!req.user) return res.status(401).json({ message: "Unauthorized access" });

//     res.json({
//       message: `Welcome to your dashboard${req.user.username ? ", " + req.user.username : ""}!`,
//       user: req.user, // Send user data
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// ✅ Email & Password Signup Route
// router.post("/signup", async (req, res) => {
//   try {
//     const { email, password, role } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "Email already registered" });

//     // Create new user
//     const newUser = new User({ email, password, role });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Generate JWT Token
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ token, role: user.role, message: "Login successful" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// GET USER PROFILE
// router.get("/profile", async (req, res) => {
//   try {
//     const token = req.header("Authorization").split(" ")[1];
//     if (!token) return res.status(401).json({ message: "Unauthorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



router.get("/api/protected-route", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Access Granted", user: decoded });
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
});




router.get("/profile", async (req, res) => { 
  try {
    const authHeader = req.header("Authorization");
    console.log("Auth Header:", authHeader); // Debugging

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided or incorrect format" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Extracted Token:", token); // Debugging

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded); // Debugging

    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user); // ✅ Send only one response
  } catch (error) {
    console.error("Profile Route Error:", error);
    res.status(500).json({ error: error.message });
  }
});


// router.get("/profile", async (req, res) => { 
//   try {
//     const authHeader = req.header("Authorization");
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Unauthorized: Invalid token format" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Fetch only `username` and `profilePicture`
//     const user = await User.findById(decoded.id).select("username profilePicture");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json(user); // ✅ Return only username & profile picture
//   } catch (error) {
//     console.error("Profile Route Error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });





// // Google authentication route
// router.get("/auth/google", passport.authenticate("google", {
//   scope: ["profile", "email"] // Make sure to include the scope
// }));

// // Google callback route
// router.get("/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",  // Redirect on failure
//     successRedirect: "http://localhost:5173/onBoard",  // Redirect to dashboard on success
//   })
// );


// Google authentication route
router.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

// Google callback route
router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      if (!req.user) {
        return res.redirect("http://localhost:5173/onBoard?error=AuthenticationFailed");
      }

      // Extract user details
      const { id, username, email } = req.user;

      // Generate JWT token
      const token = jwt.sign(
        { id, username, email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      console.log(token);

      // Redirect to frontend with token
      res.redirect(`http://localhost:5173/onBoard?token=${token}`);
    } catch (error) {
      console.error("Google Auth Error:", error);
      res.redirect("http://localhost:5173/onBoard?error=ServerError");
    }
  }
);


// Facebook authentication route
// router.get("/auth/facebook", passport.authenticate("facebook", {
//   scope: ["email", "public_profile"] // Make sure to include the required scope
// }));

// router.get("/auth/facebook/callback", 
//   passport.authenticate("facebook", {
//     failureRedirect: "/login",
//     successRedirect: "http://localhost:5173/onBoard",
//   })
// );


// Facebook authentication route
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email", "public_profile"] })
);

// Facebook callback route
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      if (!req.user) {
        return res.redirect("http://localhost:5173/onBoard?error=AuthenticationFailed");
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          id: req.user._id,
          username: req.user.username || "Guest",
          email: req.user.email || "No Email",
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      console.log("Generated Token:", token); // Log token for debugging

      // Redirect to frontend with token
      res.redirect(`http://localhost:5173/onBoard?token=${token}`);
    } catch (error) {
      console.error("Facebook Auth Error:", error);
      res.redirect("http://localhost:5173/onBoard?error=ServerError");
    }
  }
);


// router.get("/auth/facebook", passport.authenticate("facebook", {
//   scope: ["email", "public_profile"] // Request email and public profile
// }));

// router.get("/auth/facebook/callback", 
//   passport.authenticate("facebook", { failureRedirect: "/login" }),
//   async (req, res) => {
//     if (!req.user) {
//       return res.redirect("http://localhost:5173/onBoard?error=AuthenticationFailed");
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: req.user._id, username: req.user.username, email: req.user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );
// console.log(token);
//     // Redirect to frontend with token
//     res.redirect(`http://localhost:5173/onBoard?token=${token}`);
//   }
// );


// Apple callback route
router.get("/auth/apple/callback", 
  passport.authenticate("apple", { session: false }), // No session management, we handle JWT
  (req, res) => {
    // If the user is authenticated, we generate a JWT token
    const payload = {
      userId: req.user.id,
      username: req.user.username,
      email: req.user.email,
    };

    // Generate JWT token with a secret key and expiration time
    const token = jwt.sign(payload, process.env.JWT_SECRET || "your-jwt-secret", { expiresIn: "1h" });

    // Send the JWT token back to the client
    res.json({
      token,
      message: "Apple Login Successful",
    });
  }
);




router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    // Generate Reset Token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour expiration

    // ✅ Update user document with token
    // Save the resetToken and its expiry
user.resetToken = resetToken;
user.resetTokenExpiry = resetTokenExpiry;
await user.save();

if (user.resetTokenExpiry && user.resetTokenExpiry < new Date()) {
  return res.status(400).json({ error: 'Reset token has expired' });
}

    console.log("User before saving:", user); // Debugging

    await user.save(); // Save the updated user

    // ✅ Check if token is saved
    const checkUser = await User.findOne({ email });
    console.log("User after saving:", checkUser); // Debugging

    // Send Email
    const resetLink = `http://localhost:5000/reset-password/${resetToken}`;
    await sendEmail(email, "Reset Your Password", `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`);

    res.status(200).json({ message: "Reset link sent to your email" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/reset-password/:token", async (req, res) => {
  const { token } = req.params;

  // Ensure token is valid before proceeding
  const user = await User.findOne({ resetToken: token });
  if (!user) {
    return res.status(400).json({ error: "Invalid token" });
  }

  // Check if token has expired
  if (user.resetTokenExpiry && user.resetTokenExpiry < new Date()) {
    return res.status(400).json({ error: "Token has expired" });
  }

  // Redirect to the frontend password reset page with the token
  res.redirect(`http://localhost:5173/Resetpassword/${token}`);
});


// router.get("/reset-password/:token", async (req, res) => {
//   const { token } = req.params;

//   // Ensure token is valid before proceeding
// const user = await User.findOne({ resetToken: token });
// if (!user) {
//   return res.status(400).json({ error: "Invalid token" });
// }

// // Check if token has expired
// const currentTime = new Date();
// if (user.resetTokenExpiry && user.resetTokenExpiry < currentTime) {
//   return res.status(400).json({ error: "Token has expired" });
// }


//   // Return an HTML form for password reset
//   res.send(`
//     <h2>Reset Your Password</h2>
//     <form action="/auth/reset-password/${token}" method="POST">
//       <input type="password" name="newPassword" placeholder="Enter new password" required />
//       <button type="submit">Reset Password</button>
//     </form>
//   `);
// });


router.post("/reset-password/:token", async (req, res) => {
  console.log("Request Body:", req.body); // Debugging

  const { token } = req.params;
  const { newPassword } = req.body;

  if (!newPassword || newPassword.trim() === "") {
    return res.status(400).json({ message: "New password is required" });
  }

  try {
    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});




// router.post("/login-with-email", async (req, res) => {
//   try {
//     const { email } = req.body;
    
//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Generate a random 6-digit code
//     const randomCode = crypto.randomBytes(3).toString("hex"); // Generates a 6-digit code (3 bytes = 6 hex digits)
    
//     // Store the code and set expiration time (e.g., 10 minutes)
//     user.loginCode = randomCode;
//     user.loginCodeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

//     // Save user and log saved user
//     const savedUser = await user.save();
//     console.log("Saved User:", savedUser);

//     // Send the code to the user's email
//     await sendEmail(email, "Login Verification Code", `<p>Your login code is: ${randomCode}</p>`);
    
//     res.status(200).json({ message: "A login code has been sent to your email." });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



// router.post("/verify-login-code", async (req, res) => {
//   try {
//     const { email, code } = req.body;
    
//     console.log("User submitted code:", code);

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     console.log("Code in DB:", user.loginCode);

//     // Check if the code exists and is valid
//     if (!user.loginCode || user.loginCode !== code) {
//       return res.status(400).json({ message: "Invalid code" });
//     }

//     // Check if the code has expired
//     if (new Date() > user.loginCodeExpiry) {
//       return res.status(400).json({ message: "Code has expired" });
//     }

//     // Successfully logged in - clear the login code
//     user.loginCode = null;
//     user.loginCodeExpiry = null;
//     await user.save();

//     // Generate a JWT token for the user
//     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(200).json({ token, message: "Login successful" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// ✅ LOGIN - SEND CODE TO EMAIL
router.post("/login-with-email", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Generate OTP (6-digit numeric)
    const loginCode = generateOTP();

    // Store the code with a 10-minute expiration
    user.loginCode = loginCode;
    user.loginCodeExpiry = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    // Send OTP via email
    await sendEmail(email, "Your Login Code", `<p>Your OTP is: <strong>${loginCode}</strong></p>`);

    res.status(200).json({ success: true, message: "Login code sent successfully." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ VERIFY LOGIN CODE & RETURN TOKEN
router.post("/verify-login-code", async (req, res) => {
  try {
    const { email, code } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Check if OTP is valid
    if (!user.loginCode || user.loginCode !== code) {
      return res.status(400).json({ success: false, message: "Invalid or expired code." });
    }

    // Check if OTP has expired
    if (new Date() > user.loginCodeExpiry) {
      return res.status(400).json({ success: false, message: "Code has expired. Please request a new one." });
    }

    // Clear OTP fields after successful login
    user.loginCode = null;
    user.loginCodeExpiry = null;
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
    res.status(200).json({ success: true, token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



module.exports = router;
