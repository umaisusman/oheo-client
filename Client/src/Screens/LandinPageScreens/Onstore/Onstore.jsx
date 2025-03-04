import { Container, Row, Col } from "react-bootstrap"
import { CreditCard, BarChart, Gear, ListCheck, Bullseye , Bell, Magic, Lightning, Box } from "react-bootstrap-icons"

export default function OheoStoreSetup() {
  return (
    <Container className="py-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 fw-bold">
            Oheo Effortless
            <br />
            Store Setup.
          </h1>
        </Col>
      </Row>

      <Row className="gy-5">
        {/* First row of features */}
        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <CreditCard className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Seamless Payment Processing</h5>
          </div>
          <p className="text-muted">Process secure Oheo payments instantly</p>
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <BarChart className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Robust Analytics & Reporting</h5>
          </div>
          <p className="text-muted">Actionable insights with real-time analytics for informed decisions.</p>
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <Gear className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Effortless Store Setup</h5>
          </div>
          <p className="text-muted">Launch your Oheo store swiftly with streamlined and intuitive setup.</p>
        </Col>

        {/* Second row of features */}
        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <ListCheck className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Content evaluation</h5>
          </div>
          <p className="text-muted">Simple corrections for immediate improvements.</p>
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <Bullseye  className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">SEO goal setting</h5>
          </div>
          <p className="text-muted">Helps you set and achieve SEO goals with guided assistance.</p>
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <Bell className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Automated alerts</h5>
          </div>
          <p className="text-muted">Automatic notifications about your customer orders, including quick sales.</p>
        </Col>

        {/* Third row of features */}
        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <Magic className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Powerful Marketing Wizard</h5>
          </div>
          <p className="text-muted">Boost your sales with integrated marketing wizard and automation.</p>
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <Lightning className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">One-click optimization</h5>
          </div>
          <p className="text-muted">Perform complex SEO audits and optimizations with a single click.</p>
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center mb-2">
            <Box className="me-2" size={24} />
            <h5 className="mb-0 fw-bold">Efficient Inventory Management</h5>
          </div>
          <p className="text-muted">Manage your stock effortlessly while streamlining orders and supply chains.</p>
        </Col>
      </Row>

      <hr className="my-5" />
    </Container>
  )
}

