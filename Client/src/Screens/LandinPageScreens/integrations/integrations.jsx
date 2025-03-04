import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { FaFigma, FaGoogle, FaInstagram, FaMailchimp, FaTwitter, FaFacebook, FaPinterest, FaDropbox, FaSlack, FaSnapchat } from "react-icons/fa";

export default function IntegrationsPage() {
  // Integration icons data
  const integrations = [
    { name: "Figma", position: "top-left", icon: <FaFigma size={30} /> },
    { name: "Google", position: "top", icon: <FaGoogle size={30} /> },
    { name: "Instagram", position: "top-right", icon: <FaInstagram size={30} /> },
    { name: "Mailchimp", position: "top-right-far", icon: <FaMailchimp size={30} /> },
    { name: "Twitter", position: "left", icon: <FaTwitter size={30} /> },
    { name: "Facebook", position: "right", icon: <FaFacebook size={30} /> },
    { name: "Pinterest", position: "bottom-left", icon: <FaPinterest size={30} /> },
    { name: "Dropbox", position: "bottom", icon: <FaDropbox size={30} /> },
    { name: "Slack", position: "bottom-right", icon: <FaSlack size={30} /> },
    { name: "Snapchat", position: "bottom-right-far", icon: <FaSnapchat size={30} /> },
  ];

  return (
    <Container className="py-5 text-center">
      <p className="text-primary mb-2">Our Primary Integrations</p>
      <h1 className="display-4 fw-bold mb-4">
        Make productivity easier
        <br />
        with <span className="text-primary">50+ Integrations</span>
      </h1>

      <div className="position-relative my-5" style={{ height: "400px" }}>
        {/* Central icon */}
        <div
          className="position-absolute bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{
            width: "80px",
            height: "80px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <FaGoogle size={40} />
        </div>

        {/* Integration icons */}
        {integrations.map((integration, index) => {
          let top = "50%";
          let left = "50%";

          switch (integration.position) {
            case "top-left":
              top = "20%";
              left = "20%";
              break;
            case "top":
              top = "10%";
              left = "50%";
              break;
            case "top-right":
              top = "20%";
              left = "80%";
              break;
            case "top-right-far":
              top = "30%";
              left = "90%";
              break;
            case "left":
              top = "50%";
              left = "20%";
              break;
            case "right":
              top = "50%";
              left = "80%";
              break;
            case "bottom-left":
              top = "80%";
              left = "20%";
              break;
            case "bottom":
              top = "80%";
              left = "50%";
              break;
            case "bottom-right":
              top = "80%";
              left = "80%";
              break;
            case "bottom-right-far":
              top = "70%";
              left = "90%";
              break;
          }

          return (
            <div
              key={index}
              className="position-absolute bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                top,
                left,
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              {integration.icon}
            </div>
          );
        })}
      </div>

      <Row className="justify-content-center">
        <Col md={8}>
          <p className="text-muted mb-5">
            Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher, attracts more
            visitors, and generates leads like never before.
          </p>
        </Col>
      </Row>

      <Button
        variant="primary"
        className="rounded-pill px-4 py-2"
        style={{ backgroundColor: "#8A70D6", borderColor: "#8A70D6" }}
      >
        See Integrations <ArrowRight className="ms-2" size={16} />
      </Button>
    </Container>
  );
}
