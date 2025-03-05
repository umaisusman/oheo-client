import { Container, Row, Col, Card, Button, Navbar, Nav, Form } from "react-bootstrap"
import { FaTwitter, FaInstagram } from "react-icons/fa"
import './secondpage.css'
const Secondlanding = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light shadow-sm">
        <Container>
          <Navbar.Brand href="#">OheoHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">Testimonials</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="text-center py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} xl={6} className="px-3">
            <h1 className="fw-bold mb-3">
              <span className="d-block fs-2 fs-md-1">Pricing built to suit all</span>
              <span className="d-block" style={{ color: "#7d4bc4", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                types of business
              </span>
            </h1>
            <p className="mt-3 mb-4">
              Start for free, then enjoy <br className="d-none d-md-block" /> $1/month for 3 months
            </p>
            <Form className="d-flex justify-content-center mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2 text-center py-2"
                style={{ maxWidth: "450px" }}
              />
            </Form>
            <p className="mt-2 mb-4 text-muted px-3">
              Choose the best plan for your business. Change plans as you grow.
            </p>
            <Button
              variant="primary"
              className="px-4 py-2 mb-4"
              style={{ backgroundColor: "#7d4bc4", border: "none", maxWidth: "450px", width: "100%" }}
            >
              Start free trial
            </Button>
          </Col>
        </Row>

        {/* Pricing Plans Section */}
        <Row className="justify-content-center bg-light p-3 p-md-5 mx-0 mt-4">
          <Row className="text-center mb-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <h2 className="fw-bold">
                See which is the best <br className="d-none d-md-block" /> Price Plan for you
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <p className="text-muted px-3">
                With its intuitive interface and powerful features, Oheo empowers businesses to leverage technology for
                maximum growth and efficiency.
              </p>
            </Col>
          </Row>

          {plans.map((plan, index) => (
  <Col xs={12} sm={6} lg={3} key={index} className="mb-4">
    <Card 
      className={`text-center h-100 ${plan.highlight ? "text-white" : ""}`}
      style={plan.highlight ? { backgroundColor: "#9A66F0" } : {}}
    >
      <Card.Body className="d-flex flex-column">
        <Card.Title>{plan.name}</Card.Title>
        <Card.Text className="small">{plan.p}</Card.Text>
        <Card.Text className="fs-3 fw-bold">{plan.price}</Card.Text>
        <Card.Text className="text-muted small">{plan.description}</Card.Text>
        <Button variant={plan.highlight ? "light" : "primary"} className="mt-2 mb-3">
          {plan.buttonText}
        </Button>
        <ul className="list-unstyled mt-auto text-start">
          {plan.features.map((feature, i) => (
            <li key={i} className="text-muted small mb-2">
              ✔ {feature}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  </Col>
))}
        </Row>

        {/* Enterprise Cards */}
        <Row className="mt-5 mx-0">
          <Col xs={12} md={6} className="mb-4">
            <Card className="p-4 bg-light h-100">
              <h5>Threads Enterprise</h5>
              <p>Experience the Oheo difference and unlock the true potential of your online business.</p>
              <Button
                className="rounded-pill mt-auto align-self-start"
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  color: "black",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                Contact Sales
              </Button>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card className="p-4 bg-light h-100">
              <h5>Threads Community</h5>
              <p>Oheo is more than just a technology template—it's a complete digital transformation solution.</p>
              <Button
                className="rounded-pill mt-auto align-self-start"
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  color: "black",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                Contact Sales
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <section className="py-5 bg-light text-center mt-5 mx-0">
          <h2 className="text-dark fw-bold mb-4">See what our customers are saying</h2>
          <Container>
            <Row className="g-4">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                  <Card className="p-3 shadow-sm rounded-3 h-100">
                    <Card.Body className="d-flex flex-column">
                      <h3 className="h5 fw-semibold">Incredibly useful product</h3>
                      <p className="text-muted mt-2 small">{testimonial.text}</p>
                      <div className="d-flex align-items-center gap-2 mt-auto">
                        {testimonial.icon}
                        <span className="fw-medium">{testimonial.name}</span>
                        <span className="text-muted d-none d-sm-inline">@{testimonial.username}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <Button className="mt-4 btn btn-primary px-4 py-2 rounded-pill shadow-sm">Follow us on Social Media</Button>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4">
        <Container>
          <p className="mb-2">Info@yourmail.com</p>
          <p className="mb-2">Privacy Policy | Terms & Conditions</p>
          <h3 className="mb-0">OheoHub</h3>
        </Container>
      </footer>
    </>
  )
}

const testimonials = [
  {
    name: "Fig Nelson",
    username: "fignel_json",
    text: "Oheo user-friendly dashboards have simplified our digital strategy management.",
    icon: <FaTwitter className="text-primary" />,
  },
  {
    name: "Sadie Berlin",
    username: "sadieberlin00",
    text: "Oheo has truly transformed our online presence. With its powerful analytics and seamless integration, we've gained invaluable insights.",
    icon: <FaInstagram style={{ color: "#E1306C" }} />,
  },
  {
    name: "Amaya Locosta",
    username: "amayalocosta",
    text: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
    icon: <FaTwitter className="text-primary" />,
  },
  {
    name: "Amaya Locosta",
    username: "amayalocosta",
    text: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
    icon: <FaTwitter className="text-primary" />,
  },
  {
    name: "Amaya Locosta",
    username: "amayalocosta",
    text: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
    icon: <FaTwitter className="text-primary" />,
  },
  {
    name: "Amaya Locosta",
    username: "amayalocosta",
    text: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
    icon: <FaTwitter className="text-primary" />,
  },
]

const plans = [
  {
    name: "Basic",
    p: "Unlock the power of data analytics and gain actionable insights.",
    price: "$24.00 / Month",
    description: "$1/month for first 3 months",
    buttonText: "Try for free",
    highlight: false,
    features: [
      "5GB Bandwidth",
      "48 Limit Support",
      "Developer docs",
      "API status notifications",
      "Submit cases stellar web",
    ],
  },
  {
    name: "Essential",
    p: "Unlock the power of data analytics and gain actionable insights.",
    price: "$83.00 / Month",
    description: "$5/month for first 3 months",
    buttonText: "Try for free",
    highlight: true,
    features: [
      "10GB Bandwidth",
      "56 Limit Support",
      "Developer docs",
      "API status notifications",
      "Submit cases stellar web",
    ],
  },
  {
    name: "Business",
    p: "Unlock the power of data analytics and gain actionable insights.",
    price: "$350.00 / Month",
    description: "$10/month for first 3 months",
    buttonText: "Try for free",
    highlight: false,
    features: [
      "15GB Bandwidth",
      "64 Limit Support",
      "Developer docs",
      "API status notifications",
      "Submit cases stellar web",
    ],
  },
  {
    name: "Premium",
    p: "Unlock the power of data analytics and gain actionable insights.",
    price: "$2,200 / Month",
    description: "Available on a 1 - 3 year term",
    buttonText: "Contact Sales",
    highlight: false,
    features: [
      "20GB Bandwidth",
      "72 Limit Support",
      "Developer docs",
      "API status notifications",
      "Submit cases stellar web",
    ],
  },
]

export default Secondlanding

