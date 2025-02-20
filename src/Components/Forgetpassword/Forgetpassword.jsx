// import React from "react";
// import { Container, Row, Col, Form, Button ,Card} from "react-bootstrap";
// import { FaFacebook, FaApple } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import './Forgetpassword.css'


// const Forgetpassword = () => {
//   return (
//     <Container className=" adjustwidth vh-100 d-flex align-items-center bg-white">
//       <Row className="w-100 shadow-lg rounded bg-white p-4">
//         {/* Left Section */}
//         <Col md={6} className="d-flex flex-column justify-content-center px-1">
//         <img src="/Pasted image.png" style={{height:'30px',width:'80px',marginBottom:'10px'}} alt=""/>
//           <h3 className="mt-3">Forget your Password</h3>
//           <p className="text-muted">Just enter the email address associated with your account and we'll send you instruction on how to reset your password.</p>
//           <Form>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="darwis@oheo.com"  style={{height:'50px'}}/>
//             </Form.Group>
//             <Button variant="primary" className="w-100 mt-3" style={{ backgroundColor: "#9370DB", border: "none",height:'56px',width:'548px' }}>
//               Reset password
//             </Button>
//           </Form>
//           <p className="mt-3"><a href="#">Return to login</a></p>
//           <p className="covermargin" style={{ fontSize: "0.9rem",marginTop:'50px' }}>
//             By proceeding, you're agreeing to our <a href="#">Terms of Service</a>.
//           </p>
//         </Col>

//         {/* Right Section */}
//          <Col md={6} xs={12} className="d-flex rounded">
//           <Card className="bg-transparent border-0 p-0">
//             <Card.Body>
//               <img 
//                  src="/Pasted image (4).png" 
//                 alt="Illustration" 
//                 style={{ width: '1012', height: '690px',padding:"0px",borderRadius:'10px'}} 
//                 className="ali img-fluid p-0" 
//               />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Forgetpassword;


import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    setError("");
  
    const trimmedEmail = email.trim().toLowerCase();
    console.log("Sending email:", trimmedEmail);
  
    try {
      const response = await axios.post(
        "https://oheo-server.vercel.app/auth/forgot-password",
        { email: trimmedEmail }, 
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("Response:", response.data);
      setMessage(response.data.message);
    } catch (err) {
      console.error("Error:", err.response?.data);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  

  return (
    <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
      <Row className="w-100 shadow-lg rounded bg-white p-4">
        {/* Left Section */}
        <Col md={6} className="d-flex flex-column justify-content-center px-1">
          <img src="/Pasted image.png" style={{ height: '30px', width: '80px', marginBottom: '10px' }} alt="" />
          <h3 className="mt-3">Forget your Password</h3>
          <p className="text-muted">Enter your email, and we'll send you reset instructions.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ height: '50px' }}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-3"
              style={{ backgroundColor: "#9370DB", border: "none", height: '56px' }}
            >
              Reset password
            </Button>
          </Form>
          {message && <p className="text-success mt-3">{message}</p>}
          {error && <p className="text-danger mt-3">{error}</p>}
          <p className="mt-3"><a href="/Login">Return to login</a></p>
        </Col>

        {/* Right Section */}
        <Col md={6} xs={12} className="d-flex rounded">
          <Card className="bg-transparent border-0 p-0">
            <Card.Body>
              <img 
                src="/Pasted image (4).png" 
                alt="Illustration" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
                className="img-fluid" 
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgetpassword;
