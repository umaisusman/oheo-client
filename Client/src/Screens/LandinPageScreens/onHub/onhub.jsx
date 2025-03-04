import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export default function OheoHubLanding() {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <header className="py-3">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <h5 className="mb-0" style={{ color: "#333" }}>
                Info@yourmail.com
              </h5>
              <small className="text-muted d-block">No matter what happens • Every time it's a</small>
            </Col>
            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <Button variant="outline-primary" className="rounded-pill px-4">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Navigation */}
      <Navbar expand="lg" className="py-3" style={{ backgroundColor: "transparent" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#products" className="fw-bold">
                Products
              </Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold">
                Pricing
              </Nav.Link>
              <Nav.Link href="#contact" className="fw-bold">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main className="flex-grow-1 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <h1 className="display-1 fw-bold" style={{ fontSize: "5rem" }}>
                OheoHub
              </h1>
            </Col>
            <Col xs={12} md={4}>
              <div className="p-4">
                <h5 className="fw-bold">Office</h5>
                <p className="text-muted">
                  123 Example Street
                  <br />
                  City, State 12345
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer */}
      <footer className="py-3 border-top">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <small className="text-muted">Copyright © 2023 OheoHub</small>
            </Col>
            <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
              <small>
                <a href="#" className="text-decoration-none text-muted me-3">
                  Privacy Policy
                </a>
                <a href="#" className="text-decoration-none text-muted">
                  Terms of Use
                </a>
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

