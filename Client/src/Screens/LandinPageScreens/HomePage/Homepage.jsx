import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../HomePageNav/HomePageNav";
import App from "../../../images/App.png";
import count from "../../../images/12.png";
import overlay from "../../../images/Overlay+Shadow.png";
import Hero1 from "../../../images/hero1.png";
import Hero2 from "../../../images/hero2.png";
import TrustComponent from "../trustComponent/trustComponent";
import LandingPage from "../trustComponent/trustComponent";
import CheoLandingPage from "../trustComponent/trustComponent";
import OheoStoreSetup from "../Onstore/Onstore";
import ProductFeatures from "../ProductFeactres/ProductFeactures";
import IntegrationsPage from "../integrations/integrations";
import PaymentPlansSection from "../PaymentPlans/paymentPlans";
import OheoHubLanding from "../onHub/onhub";

export default function HeroSection() {
  return (
    <div>
      <Navbar />
      <div className="hero-section position-relative overflow-hidden">
        <div className="container py-3 py-md-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <h1 className="display-5 display-md-4 fw-bold mb-2 mb-md-3">
                Build a business with <span className="text-purple">Vision</span>
              </h1>
              <p className="lead mb-3 mb-md-4 px-2">
                Vision, Innovation, Passion, and Strategy Combine for{" "}
                <span className="d-none d-md-block"></span> Purposeful Impact on Cheo.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary px-3 px-md-4 py-2">Get Started</button>
                <button className="btn btn-outline-primary px-3 px-md-4 py-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mt-3 mt-md-4">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
            <div className="dashboard-preview d-flex flex-column align-items-center">
  <div className="d-flex justify-content-between align-items-center w-100">
    <div className="count-wrapper">
      <img src={count || "/placeholder.svg"} alt="Count" className="count-image" />
    </div>
    <div className="overlay-wrapper d-none d-sm-block">
      <img src={overlay || "/placeholder.svg"} alt="Overlay" className="overlay-image" />
    </div>
  </div>

  <img src={App || "/placeholder.svg"} alt="Dashboard Preview" className="img-fluid rounded shadow-sm main-app-image" />

  <div className="hero-images d-flex justify-content-between w-100 mt-3">
    {/* <div className="hero1-wrapper d-none d-md-block">
      <img src={Hero1 || "/placeholder.svg"} alt="Hero1" className="hero1-image" />
    </div> */}
    <div className="hero2-wrapper d-none d-md-block">
      <img src={Hero2 || "/placeholder.svg"} alt="Hero2" className="hero2-image" />
    </div>
  </div>
</div>




            </div>
          </div>

          <div className="row">
            <div className="col-12 position-relative">
              <div className="hero1-wrapper d-none d-md-block">
                <img src={Hero1 || "/placeholder.svg"} alt="Hero1" className="hero1-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="sales-meeting-badge position-absolute d-none d-md-block">Sales Meeting</div>
      </div>
      
      <CheoLandingPage />
      <OheoStoreSetup />
      <ProductFeatures />
      <IntegrationsPage />
      <PaymentPlansSection />
      <OheoHubLanding/>

      <style jsx>{`
     .hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, white, #e6d5f5);
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 60px;
  overflow-x: hidden; 
  width: 100%;
}
   .container {
  max-width: 100%;
  overflow-x: hidden;
}


        .text-purple {
          color: #6b3fa0;
        }

        .sales-meeting-badge {
          background-color: white;
          padding: 8px 16px;
          border-radius: 4px;
          bottom: 20px;
          right: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 20;
        }

        .dashboard-preview {
          margin-bottom: 2rem;
          width: 100%;
          position: relative;
        }

        .main-app-image {
          width: 100%;
          height: auto;
          position: relative;
          z-index: 5;
        }

        /* Count image */
       .count-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  max-width: 120px;
}

        .count-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        /* Overlay image */
        .overlay-wrapper {
          position: absolute;
          top: 5%;
          right: 5%;
          width: 25%;
          max-width: 200px;
          z-index: 10;
        }

        .overlay-image {
          width: 100%;
          height: auto;
        }

        /* Hero1 image */
        .hero1-wrapper {
          position: absolute;
          bottom: 0%;
          left: 10%;
          width: 35%;
          max-width: 280px;
          z-index: 11;
        }

        .hero1-image {
          width: 100%;
          height: auto;
        }

        /* Hero2 image */
        .hero2-wrapper {
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translateY(-50%);
          width: 30%;
          max-width: 220px;
          z-index: 11;
        }

        .hero2-image {
          width: 100%;
          height: auto;
        }

        /* Responsive Fixes */
        @media (max-width: 1200px) {
          .hero2-wrapper {
            right: -5%;
            width: 25%;
          }
          .hero1-wrapper {
            left: 5%;
            width: 30%;
          }
        }

        @media (max-width: 992px) {
          .hero2-wrapper {
            right: 0;
            width: 20%;
          }
          .hero1-wrapper {
            left: 0;
            width: 25%;
          }
          .overlay-wrapper {
            width: 30%;
            right: 0;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .count-wrapper {
            top: -3%;
            left: 2%;
            width: 15%;
          }
          .overlay-wrapper {
            width: 25%;
            right: 0;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .count-wrapper {
            top: -2%;
            left: 2%;
            width: 12%;
          }
        }
      `}</style>
    </div>
  );
}
