// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import axios from "axios";


// const Logincode = () => {
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleCodeVerification = async (e) => {
//     e.preventDefault();
//     setError("");
  
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/verify-login-code", 
//         { email: "aneeqgulzarofficial@gmail.com", code }, // Include the email
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
  
//       if (response.status === 200) {
//         navigate("/dashboard"); // Redirect after successful verification
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid code. Please try again.");
//     }
//   };
  

//   return (
//     <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
//       <Row className="w-100 shadow-lg rounded bg-white p-4">
//         {/* Left Section */}
//         <Col md={6} className="d-flex flex-column justify-content-center px-1">
//           <img src="/Pasted image.png" style={{ height: "30px", width: "80px", marginBottom: "10px" }} alt="logo" />
//           <h3 className="mt-3">Enter Your Code</h3>
//           <p>We've sent a code to your email. Please enter it below.</p>
//           <Form onSubmit={handleCodeVerification}>
//             <Form.Group controlId="formCode">
//               <Form.Label>Verification Code</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Enter code" 
//                 style={{ height: "50px" }} 
//                 value={code} 
//                 onChange={(e) => setCode(e.target.value)} 
//                 required 
//               />
//             </Form.Group>
//             <Button type="submit" variant="primary" className="w-100 mt-3" style={{ backgroundColor: "#9370DB", border: "none", height: "56px", width: "548px" }}>
//               Verify Code
//             </Button>
//           </Form>
//           {error && <p className="text-danger mt-3">{error}</p>}
          
//           <p className="mt-3">
//             Didn't receive the code? <a href="#">Resend</a>
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

// export default Logincode;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {login } from '../../ReduxToolkit/authSlice'
import axios from "axios";
import { useDispatch } from "react-redux";

const Logincode = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCodeVerification = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/verify-login-code", { email, code }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("OhdevToken", token);
        dispatch(login()); 
        fetchUserProfile(token);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid code. Please try again.");
    }
  };

  const fetchUserProfile = async (token) => {
    try {
      const profileResponse = await axios.get("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (profileResponse.status === 200) {
        localStorage.setItem("userProfile", profileResponse.data.userId); 
        navigate("/OnBoard");
      }
    } catch (err) {
      setError("Failed to load profile. Please try again.");
    }
  };

  return (
    <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
      <Row className="w-100 shadow-lg rounded bg-white p-4">
        {/* Left Section */}
        <Col md={6} className="d-flex flex-column justify-content-center px-1">
          <img src="/Pasted image.png" style={{ height: "30px", width: "80px", marginBottom: "10px" }} alt="logo" />
          <h3 className="mt-3">Enter Your Code</h3>
          <p>We've sent a code to your email. Please enter it below.</p>
          <Form onSubmit={handleCodeVerification}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formCode">
              <Form.Label>Verification Code</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter code" 
                style={{ height: "50px" }} 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100 mt-3" style={{ backgroundColor: "#9370DB", border: "none", height: "56px", width: "548px" }}>
              Verify Code
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">{error}</p>}

          <p className="mt-3">
            Didn't receive the code? <a href="#">Resend</a>
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

export default Logincode;
