import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PricingCard.css"; // External CSS file for styles
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/CardDetails')
}

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Basic Plan */}
        <div className="col-md-4">
          <div className="card border-light p-3 pricing-box">
            <h5>Basic</h5>
            <p>Our Basic Plan is perfect for budding entrepreneurs...</p>
            <h4>
              $1<span className="text-muted price-small-text">/month for first 3 months</span>
            </h4>
            <button className="btn btn-primary-custom w-100" onClick={handleNext}>Choose Basic</button>
            <hr />
            <h6>Payments</h6>
            <p>Online Domestic<br />3.5% + 30¢ per transaction</p>
            <h6>Features</h6>
            <ul>
              <li>Basic website builder</li>
              <li>Up to 50 product listings</li>
            </ul>
            <h6>Shipping</h6>
            <p>5% off on shipping rates</p>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-md-4">
          <div className="card standard-box p-3 pricing-box">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Standard Plan</h5>
              <span className="highlighted-tag" onClick={handleNext}>Most Popular</span>
            </div>
            <p>Step up your e-commerce game with our Standard Plan...</p>
            <h4>
              $1<span className="text-muted price-small-text">/month for first 3 months</span>
            </h4>
            <button className="btn btn-primary-custom w-100" onClick={handleNext}>Choose Standard</button>
            <hr />
            <h6>Payments</h6>
            <p>Online Domestic<br />2.9% + 25¢ per transaction</p>
            <h6>Features</h6>
            <ul>
              <li>Advanced website builder</li>
              <li>Up to 500 product listings</li>
            </ul>
            <h6>Shipping</h6>
            <p>10% off on shipping rates</p>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col-md-4">
          <div className="card border-light p-3 pricing-box">
            <h5>Pro Plan</h5>
            <p>For established businesses...</p>
            <h4>
              $1<span className="text-muted price-small-text">/month for first 3 months</span>
            </h4>
            <button className="btn btn-primary-custom w-100" onClick={handleNext}>Choose Pro</button>
            <hr />
            <h6>Payments</h6>
            <p>Online Domestic<br />2.6% + 20¢ per transaction</p>
            <h6>Features</h6>
            <ul>
              <li>Premium website builder</li>
              <li>Unlimited product listings</li>
            </ul>
            <h6>Shipping</h6>
            <p>15% off on shipping rates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
