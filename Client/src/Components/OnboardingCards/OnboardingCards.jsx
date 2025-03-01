import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaBox, FaPalette, FaCreditCard, FaTag, FaTruck, FaGlobe } from "react-icons/fa";

const SetupCards = () => {
  const cards = [
    {
      icon: <FaBox />,
      title: "Include your initial product in the setup.",
      description:
        "Ensure to include the cost price of your product, allowing for the calculation of gross profit and margin.",
    },
    {
      icon: <FaPalette />,
      title: "Customize your online store.",
      description:
        "Select a theme and customize it with your logo, colors, and images to showcase your brand.",
    },
    {
      icon: <FaCreditCard />,
      title: "Configure Ohoo payments.",
      description:
        "Commence accepting payments instantly. You'll have access to a breakdown of your income by payment provider.",
    },
    {
      icon: <FaTag />,
      title: "Name your store",
      description:
        "Your temporary store name is currently Flow Shop. This name will appear in your admin and online store.",
    },
    {
      icon: <FaTruck />,
      title: "Setup shipping and delivery.",
      description:
        "Set your shipping locations and rates so customers can view their shipping costs at checkout.",
    },
    {
      icon: <FaGlobe />,
      title: "Connect a custom domain.",
      description:
        "Your current domain is cd75r3-cho.oho.dev. To make it easier for customers to find your online store, you can add a custom domain.",
    },
  ];

  return (
    <Row className="g-4">
      {cards.map((card, index) => (
        <Col md={6} key={index}>
          <Card className="p-3 shadow-sm border-0">
            <div className="d-flex align-items-start">
              <div className="me-3 text-primary fs-4">{card.icon}</div>
              <div>
                <h6 className="fw-bold">{card.title}</h6>
                <p className="text-muted mb-0">{card.description}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SetupCards;
