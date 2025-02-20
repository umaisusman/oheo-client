import axios from "axios";

// Base API URL (change this for production)
const API_URL = "https://oheo-server.vercel.app/auth";  
const FRONTEND_URL = "http://localhost:5173"; // Change if frontend URL is different

// User Signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      headers: { "Content-Type": "application/json" }
    });
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// User Login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Get User Profile
export const getProfile = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) throw new Error("No authentication token found");

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Profile Fetch Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// OAuth Login (Google/Facebook)
export const handleOAuthLogin = (provider) => {
  window.location.href = `${API_URL}/${provider}/callback`;
};



// OAuth Callback Handling
export const handleOAuthCallback = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("authToken", token);
    window.location.href = `${FRONTEND_URL}/dashboard`; // Redirect to dashboard
  } else {
    window.location.href = `${FRONTEND_URL}/login`; // Redirect to login if no token
  }
};
