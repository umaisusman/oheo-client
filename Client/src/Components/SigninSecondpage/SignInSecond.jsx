import React, { useState } from "react";
import { Button, Container, Row, Col, Card, Form, ProgressBar } from "react-bootstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "./SignInSecond.css";
import { signup } from "../../Auth/api";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState("Weak");
  const [user, setUser] = useState({ email: "", password: "", role: "user" });
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setUser({ ...user, password: value });

    let strength = 0;
    if (value.length > 0) strength = 10;
    if (value.length > 5) strength = 25;
    if (value.length > 8) strength = 50;
    if (/[A-Z]/.test(value)) strength += 20;
    if (/[0-9]/.test(value) || /[!@#$%^&*]/.test(value)) strength += 30;

    setPasswordStrength(strength > 100 ? 100 : strength);

    if (strength === 0) {
      setStrengthLabel("");
    } else if (strength <= 25) {
      setStrengthLabel("Weak");
    } else if (strength <= 50) {
      setStrengthLabel("Medium");
    } else if (strength <= 75) {
      setStrengthLabel("Good");
    } else {
      setStrengthLabel("Strong");
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(user);
      setMessage(response.message);
    } catch (error) {
      setMessage(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="Rowclass w-65 shadow-lg rounded bg-white p-4 pt-0 pb-0">
        {/* Left Section */}
        <Col md={6} xs={12} className="d-flex flex-column justify-content-center">
          <img src="/Pasted image.png" style={{ height: "30px", width: "80px", marginBottom: "10px" }} alt="" />
          <h2 className="fw-bold">Create an Oheo.dev Account</h2>
          <p className="text-muted">Try Oheo for free. No credit card required.</p>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3 position-relative">
              <Form.Label>Password</Form.Label>
              <div className="d-flex align-items-center position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Button variant="link" className="position-absolute end-0 me-2" onClick={togglePasswordVisibility}>
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </Button>
              </div>
              <ProgressBar
                now={passwordStrength}
                variant={passwordStrength >= 75 ? "success" : passwordStrength >= 50 ? "warning" : "danger"}
                className="mt-2"
                style={{ height: "8px", width: "100%" }}
              />
              <div
                className="mt-2"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  color: passwordStrength >= 75 ? "green" : passwordStrength >= 50 ? "orange" : "red",
                }}
              >
                Password strength: {strengthLabel}
              </div>
            </Form.Group>
            <Button variant="primary" className="w-100 mt-3" type="submit">
              Create Oheo Account
            </Button>
          </Form>
          {message && <p className="mt-3 text-center text-danger">{message}</p>}
          <p className="text-center fw-bold mt-3">Or</p>
          <p>
            Already have an Oheo account? <Link to="/login" className="text-primary">Log In</Link>
          </p>
          <p className="small mt-4">
            By proceeding, you agree to our <a href="#" className="text-primary">Terms of Service</a>.
          </p>
        </Col>

        {/* Right Section */}
        <Col md={6} xs={12} className="d-flex rounded">
          <Card className="bg-transparent border-0 p-0">
            <Card.Body>
              <img
                src="/Pasted image (2).png"
                alt="Illustration"
                style={{ width: "600px", height: "700px" }}
                className="ali img-fluid p-0"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
