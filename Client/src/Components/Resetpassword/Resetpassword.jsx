// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card, ProgressBar } from "react-bootstrap";
// import './Resetpassword.css';
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Resetpassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState("weak");

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     if (value.length > 8) {
//       setPasswordStrength("strong");
//     } else if (value.length > 4) {
//       setPasswordStrength("medium");
//     } else {
//       setPasswordStrength("weak");
//     }
//   };

//   return (
//     <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
//       <Row className="w-100 shadow-lg rounded bg-white p-4">
//         {/* Left Section */}
//         <Col md={6} className="d-flex flex-column justify-content-center px-1">
//           <img src="/Pasted image.png" style={{ height: '30px', width: '80px', marginBottom: '10px' }} alt="" />
//           <h3 className="mt-3">Reset Account Password</h3>
//           <p className="text-muted">For the account alivia@oheo.com.</p>
//           <Form>
//             <Form.Group controlId="formPassword">
//               <Form.Label>New Password</Form.Label>
//               <div className="position-relative">
//                 <Form.Control
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter new password"
//                   style={{ height: '50px' }}
//                   value={password}
//                   onChange={handlePasswordChange}
//                 />
//                 <span 
//                   className="position-absolute end-0 top-50 translate-middle-y me-3 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               <ProgressBar 
//                 now={passwordStrength === "strong" ? 100 : passwordStrength === "medium" ? 50 : 25} 
//                 variant={passwordStrength === "strong" ? "success" : passwordStrength === "medium" ? "warning" : "danger"} 
//                 className="mt-2"
//                 style={{height:'8px'}}
//               />
//               <div className={`mt-2 password-strength ${passwordStrength}`}>
//                 Password strength: {passwordStrength}
//               </div>
//             </Form.Group>
//             <Form.Group controlId="formConfirmPassword" className="mt-3">
//               <Form.Label>Confirm New Password</Form.Label>
//               <div className="position-relative">
//                 <Form.Control
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Confirm new password"
//                   style={{ height: '50px' }}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <span 
//                   className="position-absolute end-0 top-50 translate-middle-y me-3 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//             </Form.Group>
//             <Button 
//               variant="primary" 
//               className="w-100 mt-3" 
//               style={{ backgroundColor: "#9370DB", border: "none", height: '56px', width: '548px' }}
//             >
//               Reset password
//             </Button>
//           </Form>
//           <p className="mt-3"><a href="#">Return to login</a></p>
//           <p className="covermargin" style={{ fontSize: "0.9rem", marginTop: '50px' }}>
//             By proceeding, you're agreeing to our <a href="#">Terms of Service</a>.
//           </p>
//         </Col>

//         {/* Right Section */}
//         <Col md={6} xs={12} className="d-flex rounded">
//           <Card className="bg-transparent border-0 p-0">
//             <Card.Body>
//               <img 
//                 src="/Pasted image (4).png" 
//                 alt="Illustration" 
//                 style={{ width: '100%', height: 'auto', padding: "0px", borderRadius: '10px' }} 
//                 className="ali img-fluid p-0" 
//               />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Resetpassword;




import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Resetpassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 8) {
      setPasswordStrength("strong");
    } else if (value.length > 4) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/auth/reset-password/${token}`,
        { newPassword: password },
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container className="adjustwidth vh-100 d-flex align-items-center bg-white">
      <Row className="w-100 shadow-lg rounded bg-white p-4">
        {/* Left Section */}
        <Col md={6} className="d-flex flex-column justify-content-center px-1">
          <img src="/Pasted image.png" style={{ height: '30px', width: '80px', marginBottom: '10px' }} alt="Logo" />
          <h3 className="mt-3">Reset Account Password</h3>
          <p className="text-muted">For the account associated with your email.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPassword">
              <Form.Label>New Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  style={{ height: '50px' }}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span 
                  className="position-absolute end-0 top-50 translate-middle-y me-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <ProgressBar 
                now={passwordStrength === "strong" ? 100 : passwordStrength === "medium" ? 50 : 25} 
                variant={passwordStrength === "strong" ? "success" : passwordStrength === "medium" ? "warning" : "danger"} 
                className="mt-2"
                style={{height:'8px'}}
              />
              <div className={`mt-2 password-strength ${passwordStrength}`}>
                Password strength: {passwordStrength}
              </div>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm New Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  style={{ height: '50px' }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span 
                  className="position-absolute end-0 top-50 translate-middle-y me-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
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
          <p className="mt-3"><a href="#">Return to login</a></p>
          <p className="covermargin" style={{ fontSize: "0.9rem", marginTop: '50px' }}>
            By proceeding, you're agreeing to our <a href="#">Terms of Service</a>.
          </p>
        </Col>
        {/* Right Section */}
        <Col md={6} xs={12} className="d-flex rounded">
          <Card className="bg-transparent border-0 p-0">
            <Card.Body>
              <img 
                src="/Pasted image (4).png" 
                alt="Illustration" 
                style={{ width: '100%', height: 'auto', padding: "0px", borderRadius: '10px' }} 
                className="ali img-fluid p-0" 
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resetpassword;
