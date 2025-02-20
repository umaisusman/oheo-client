// import React from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { FaFacebook, FaApple } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import "./SignUp.css";
// import { handleOAuthLogin  } from "../../Auth/api";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   // const handleOAuthLogin = (provider) => {
//   //   window.location.href = `http://localhost:5000/auth/${provider}`; 
//   // };

//   return (
//     <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
//       <Row className="w-100 shadow-lg rounded bg-white p-4">
//         {/* Left Section */}
//         <Col md={6} className="d-flex flex-column justify-content-center px-1">
//           <img src="/Pasted image.png" style={{ height: "30px", width: "80px", marginBottom: "10px" }} alt="logo" />
//           <h3 className="mt-3">Log In and Explore</h3>
//           <p>Welcome back to Oheo! We're thrilled to have you return.</p>
//           <Form>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="darwis@oheo.com" style={{ height: "50px" }} />
//             </Form.Group>
//             <Button variant="primary" className="w-100 mt-3" style={{ backgroundColor: "#9370DB", border: "none", height: "56px", width: "548px" }}>
//               Continue with Email
//             </Button>
//           </Form>
//           <div className="text-center my-3">
//             <b>Or</b>
//           </div>
//           <div className="d-flex justify-content-center gap-1">
//             <Button variant="light" className="border px-4" style={{ width: "174px", height: "56px", fontSize: "24px" }} onClick={() => handleOAuthLogin("google")}>
//               <FcGoogle />
//             </Button>
//             <Button variant="light" className="border px-4" style={{ width: "174px", height: "56px", color: "blue", fontSize: "24px" }} onClick={() => handleOAuthLogin("facebook")}>
//               <FaFacebook />
//             </Button>
//             <Button variant="light" className="border px-4" style={{width:'174px',height:"56px",fontSize:'24px'}}>
//               <FaApple />
//             </Button>
//           </div>
//           <p className="mt-3">
//   New to our platform?{" "}
//   <Link to="/signup">Sign Up Here</Link>
// </p>
// <p className="mt-3">
//   <Link to="/Forgetpassword">Forget Password?</Link>
// </p>
//           <p className="covermargin" style={{ fontSize: "0.9rem", marginTop: "50px" }}>
//             By proceeding, you're agreeing to our <a href="#">Terms of Service</a>.
//           </p>
//         </Col>

//         {/* Right Section */}
//         <Col md={6} xs={12} className="d-flex rounded">
//           <Card className="bg-transparent border-0 p-0">
//             <Card.Body>
//               <img src="/Pasted image (3).png" alt="Illustration" style={{ width: "1012px", height: "690px", padding: "0px" }} className="ali img-fluid p-0" />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import "./SignUp.css";
import { handleOAuthLogin } from "../../Auth/api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("https://oheo-server.vercel.app/login-with-email", { email }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        // Redirect user after successful login
        navigate("/Logincode");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
      <Row className="w-100 shadow-lg rounded bg-white p-4">
        {/* Left Section */}
        <Col md={6} className="d-flex flex-column justify-content-center px-1">
          <img src="/Pasted image.png" style={{ height: "30px", width: "80px", marginBottom: "10px" }} alt="logo" />
          <h3 className="mt-3">Log In and Explore</h3>
          <p>Welcome back to Oheo! We're thrilled to have you return.</p>
          <Form onSubmit={handleEmailLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="darwis@oheo.com" 
                style={{ height: "50px" }} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100 mt-3" style={{ backgroundColor: "#9370DB", border: "none", height: "56px", width: "548px" }}>
              Continue with Email
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">{error}</p>}
          
          <div className="text-center my-3">
            <b>Or</b>
          </div>
          <div className="d-flex justify-content-center gap-1">
            <Button variant="light" className="border px-4" style={{ width: "174px", height: "56px", fontSize: "24px" }} onClick={() => handleOAuthLogin("google")}>
              <FcGoogle />
            </Button>
            <Button variant="light" className="border px-4" style={{ width: "174px", height: "56px", color: "blue", fontSize: "24px" }} onClick={() => handleOAuthLogin("facebook")}>
              <FaFacebook />
            </Button>
            <Button variant="light" className="border px-4" style={{ width: '174px', height: "56px", fontSize: '24px' }} onClick={() => handleOAuthLogin("apple")} >
              <FaApple />
            </Button>
          </div>
          <p className="mt-3">
            New to our platform? <a href="/signup">Sign Up Here</a>
          </p>
          <p className="mt-3">
            <a href="/Forgetpassword">Forget Password?</a>
          </p>
          <p className="covermargin" style={{ fontSize: "0.9rem", marginTop: "50px" }}>
            By proceeding, you're agreeing to our <a href="#">Terms of Service</a>.
          </p>
        </Col>

        {/* Right Section */}
        <Col md={6} xs={12} className="d-flex rounded">
          <Card className="bg-transparent border-0 p-0">
            <Card.Body>
              <img src="/Pasted image (3).png" alt="Illustration" style={{ width: "1012px", height: "690px", padding: "0px" }} className="ali img-fluid p-0" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

