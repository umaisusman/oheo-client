import { useEffect } from "react";
import { handleOAuthCallback } from "../Auth/api"; // Import function

const OAuthHandler = () => {
  useEffect(() => {
    handleOAuthCallback(); // Process OAuth response and redirect
  }, []);

  return <p>Logging you in...</p>;
};

export default OAuthHandler;
