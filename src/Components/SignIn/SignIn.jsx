import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import './SignIn.css';
import { handleOAuthLogin  } from "../../Auth/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// const SERVER_URL = "http://localhost:5000"; 

// const handleOAuthLogin = (provider) => {
//   window.location.href = `${SERVER_URL}/auth/${provider}`;
// };

const SignupPage = () => {
  const navigate = useNavigate();
  
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="Rowclass1 w-65 shadow-lg rounded bg-white p-4 pt-0 pb-0">
        {/* Left Section */}
        <Col md={6} xm={12} className="d-flex flex-column justify-content-center">
          <img src="/Pasted image.png" style={{ height: '30px', width: '80px', marginBottom: '10px' }} alt="" />
          <h2 className="fw-bold">Create an Oheo.dev Account</h2>
          <p className="text-muted">Try Oheo for free. No credit card required.</p>
          <Button
      variant="outline-dark"
      className="w-100 mb-2"
      onClick={() => navigate("/signup")}
    >
      <MdEmail /> Sign Up with Email
    </Button>
          <Button variant="outline-secondary" className="w-100 mb-2 d-flex align-items-center justify-content-center" onClick={() => handleOAuthLogin("google")}>
            <FcGoogle className="me-2" /> Sign in with Google
          </Button>
          <Button variant="primary" className="w-100 mb-2 d-flex align-items-center justify-content-center" onClick={() => handleOAuthLogin("facebook")}>
            <FaFacebook className="me-2" /> Sign in with Facebook
          </Button>
          <Button variant="dark" className="w-100 mb-3 d-flex align-items-center justify-content-center" onClick={() => handleOAuthLogin("apple")}>
            <FaApple className="me-2" /> Sign in with Apple
          </Button>
          
          <p className="text-center"><strong> Or </strong></p>
          <p>Already have an Oheo account? <Link to="/login" className="text-primary">Log In</Link></p>
          <p className="small" style={{ marginTop: '60px' }}>
            By proceeding, you agree to our <a href="#" className="text-primary">Terms of Service</a>.
          </p>
        </Col>
        {/* Right Section */}
        <Col md={6} xs={12} className="d-flex rounded">
          <Card className="bg-transparent border-0 p-0">
            <Card.Body>
              <img src="/Pasted image (2).png" alt="Illustration" style={{ width: '600px', height: '700px' }} className="ali img-fluid p-0" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
