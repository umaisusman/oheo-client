import { useEffect } from "react";
import { handleOAuthCallback } from "../Auth/api";

const OAuthHandler = () => {
  useEffect(() => {
    handleOAuthCallback(); 
  }, []);

  return <p>Logging you in...</p>;
};

export default OAuthHandler;
