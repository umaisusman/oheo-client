import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Card, ProgressBar, Tabs, Tab } from "react-bootstrap"
import {
  Grid3x3,
  Database,
  EaselFill,
  ThreeDots,
  Calendar3,
  Envelope,
  Terminal,
  XLg,
  FilterCircleFill,
  FunnelFill,
} from "react-bootstrap-icons"

const ProductFeatures = () => {
  return (
    <Container className="py-5">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(#f9f9f9 1px, transparent 1px), linear-gradient(90deg, #f9f9f9 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
          zIndex: -1,
        }}
      ></div>

      {/* Header */}
      <div className="text-center mb-5">
        <p className="text-primary mb-2">Powerful Features</p>
        <h1 className="display-4 fw-bold">
          Our product has <br />
          these big{" "}
          <span className="position-relative">
            <span
              className="position-relative px-4 py-2 rounded-pill"
              style={{
                background: "#7c5cfc",
                color: "white",
                zIndex: 1,
              }}
            >
              features
            </span>
          </span>
        </h1>
      </div>

      {/* Feature Cards */}
      <Row className="g-4 mb-5">
        {/* Dashboard Card */}
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 p-4">
            <Card.Body>
              <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">Dashboard</h5>
                <ThreeDots />
              </div>

              <div className="mb-4">
                <Tabs defaultActiveKey="date" className="mb-3 small">
                  <Tab
                    eventKey="date"
                    title={
                      <span>
                        <Calendar3 className="me-1" size={14} />
                        Date
                      </span>
                    }
                  />
                  <Tab
                    eventKey="mail"
                    title={
                      <span>
                        <Envelope className="me-1" size={14} />
                        Mail
                      </span>
                    }
                  />
                  <Tab
                    eventKey="console"
                    title={
                      <span>
                        <Terminal className="me-1" size={14} />
                        Console
                      </span>
                    }
                  />
                </Tabs>
              </div>

              <div className="bg-light p-3 rounded">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <strong>Import CSV</strong>
                  </div>
                  <XLg size={12} />
                </div>
                <p className="text-muted small mb-0">Lorem ipsum dolor sit amet, conse.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Oheo Filters Card */}
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 p-4">
            <Card.Body>
              <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">Oheo Filters;</h5>
                <ThreeDots />
              </div>

              <div className="d-flex justify-content-center align-items-center h-75">
                <div className="position-relative">
                  <hr className="position-absolute top-50 start-0 end-0" style={{ zIndex: 0 }} />
                  <div className="d-flex justify-content-between" style={{ width: "250px" }}>
                    <div
                      className="rounded-circle bg-white p-3 border"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderColor: "#7c5cfc !important",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FilterCircleFill size={32} color="#7c5cfc" />
                    </div>
                    <div
                      className="rounded-circle bg-white p-3 border"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderColor: "#7c5cfc !important",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FunnelFill size={32} color="#7c5cfc" />
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Sales Data Card */}
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 p-4">
            <Card.Body>
              <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">Sales Data & Analytics</h5>
                <ThreeDots />
              </div>

              <div className="mt-5">
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Sector</span>
                    <span>96%</span>
                  </div>
                  <ProgressBar now={96} variant="primary" style={{ height: "8px", backgroundColor: "#e9ecef" }} />
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Industry</span>
                    <span>32%</span>
                  </div>
                  <ProgressBar now={32} variant="primary" style={{ height: "8px", backgroundColor: "#e9ecef" }} />
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>AAPL</span>
                    <span>72%</span>
                  </div>
                  <ProgressBar now={72} variant="primary" style={{ height: "8px", backgroundColor: "#e9ecef" }} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Feature Highlights */}
      <Row className="g-4 mt-5">
        <Col md={4}>
          <div className="text-center text-md-start">
            <div className="d-inline-block p-3 rounded-circle mb-3" style={{ backgroundColor: "#f0ecfe" }}>
              <Grid3x3 size={24} color="#7c5cfc" />
            </div>
            <h4 className="fw-bold mb-3">Beautiful Design</h4>
            <p className="text-muted">
              Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher in search
              results.
            </p>
          </div>
        </Col>

        <Col md={4}>
          <div className="text-center text-md-start">
            <div className="d-inline-block p-3 rounded-circle mb-3" style={{ backgroundColor: "#f0ecfe" }}>
              <Database size={24} color="#7c5cfc" />
            </div>
            <h4 className="fw-bold mb-3">Clean Development</h4>
            <p className="text-muted">
              Unlock the power of data analytics and gain actionable insights to make informed decisions.
            </p>
          </div>
        </Col>

        <Col md={4}>
          <div className="text-center text-md-start">
            <div className="d-inline-block p-3 rounded-circle mb-3" style={{ backgroundColor: "#f0ecfe" }}>
              <EaselFill size={24} color="#7c5cfc" />
            </div>
            <h4 className="fw-bold mb-3">Easily Customised</h4>
            <p className="text-muted">
              From content creation and deployment to performance monitoring and optimization.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductFeatures

