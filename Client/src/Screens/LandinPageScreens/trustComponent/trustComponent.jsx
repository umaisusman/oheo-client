import { Container, Row, Col, Button } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../../../images/bg.png";
import count from "../../../images/hero1.png";
import overlay from "../../../images/hero2.png";
import "./trust-component.css"; // Import CSS for additional styling

export default function LandingPage() {
  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold mb-4">The world's best companies trust Chelo.</h2>
          <div className="d-flex justify-content-center align-items-center gap-4 mb-5">
            <div className="company-logo">
              <span className="dot"></span>
              <span>Dropbox</span>
            </div>
            <div className="company-logo">
              <span className="dot"></span>
              <span>Shopify</span>
            </div>
            <div className="company-logo">
              <span className="dot"></span>
              <span>Slack</span>
            </div>
            <div className="company-logo">
              <span className="dot"></span>
              <span>Spotify</span>
            </div>
            <div className="company-logo">
              <span className="dot"></span>
              <span>Intercom</span>
            </div>
          </div>
          <p className="text-muted mb-4">Chelo is used by over 100,000+ companies across the globe</p>
          <div className="d-flex justify-content-center mb-5">
            <hr className="w-25" />
          </div>
        </Col>
      </Row>

      <Row className="gx-5">
        <Col md={6}>
         
          <h1 className="fw-bold mb-4">Provide powerful solutions at all times</h1>
          <p className="text-muted mb-4">
            Chelo is more than just a technology solution—it's a strategic partner in your business growth journey. We
            help you scale with confidence.
          </p>
          <div className="feature-list mb-4">
            <div className="feature-item d-flex align-items-center mb-3">
              <CheckCircleFill className="text-primary me-2" />
              <span>Powerful analytics and reporting</span>
            </div>
            <div className="feature-item d-flex align-items-center mb-3">
              <CheckCircleFill className="text-primary me-2" />
              <span>Get more features for less</span>
            </div>
            <div className="feature-item d-flex align-items-center mb-3">
              <CheckCircleFill className="text-primary me-2" />
              <span>Secure and certified by trusted authorities</span>
            </div>
          </div>
          <Button variant="outline-primary" className="rounded-pill px-4 py-2">
            Get Started Today <span className="ms-2">→</span>
          </Button>
        </Col>

        <Col md={6}>
          <div className="image-container">
            <img src={bg} alt="Background" className="img-fluid d-none d-md-block hide-on-mobile" />
            <img src={overlay} alt="Overlay" className="img-fluid d-none d-md-block hide-on-mobile" />
            <img src={count} alt="Count" className="img-fluid d-none d-md-block hide-on-mobile" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
