"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import cart from "../../images/cart.png"
import logo from "../../images/Logo.png"

const paymentscuccess = () => {
  const [formData, setFormData] = useState({
    business: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    address: "",
  })

  const [countries, setCountries] = useState([])

  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data.map((country) => country.name.common).sort()
        setCountries(countryList)
      })
      .catch((error) => console.error("Error fetching countries:", error))
  }, [])

  return (
    <div>
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img src={logo || "/placeholder.svg"} alt="..." />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "-0.025em",
                textDecoration: "none",
                marginLeft: "10px",
              }}
            >
              oheo
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Do you need help?
                </a>
              </li>
              <a className="nav-link" href="#">
                <X size={24} />
              </a>
            </ul>
          </div>
        </div>
      </header>
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 mx-auto">
            <div className="row g-4">
              {/* Form Section */}
              <div className="col-md-6 fade-in">
                <div className="mb-4">
                  <h1 className="h3 fw-semibold text-dark">You've Successfully Subscribed!</h1>
                  <p className="text-secondary">
                    Please provide your billing information below to complete your subscription.
                  </p>
                </div>

                {/* Business Section */}
                <div className="mb-4">
                  <h2 className="h5 fw-medium mb-3">Business Address</h2>
                  <div className="mb-3">
                    <label htmlFor="business" className="form-label">
                      Business
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="business"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      placeholder="Enter your business name"
                    />
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mb-4">
                  <h2 className="h5 fw-medium mb-3">Contact</h2>
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone and Country in One Line */}
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select
                        className="form-control"
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        <option value="">Select your country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-6">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Address Textarea */}
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows="3"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                {/* Location Section */}
                <div className="mb-4">
                  <h2 className="h5 fw-medium mb-3">Location</h2>
                  <div className="row g-3 mb-3">
                    <div className="col-4">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="zipCode" className="form-label">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      />
                    </div>
                    <div className="col-12 d-flex align-items-center text-nowrap">
                      <p>This store is a registered business</p>
                    </div>
                  </div>
                </div>

                {/* Back and Add Later Buttons at the Bottom */}
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <button className="btn btn-outline-secondary">Back</button>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#6f42c1",
                      color: "#fff",
                    }}
                    onClick={async () => {
                      const userId = localStorage.getItem("userProfile")
                      if (!userId) {
                        alert("User userId not found. Please log in again.");
                        return;
                      }                      

                      try {
                        const response = await fetch("http://localhost:5000/api/business/add-business", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                             Authorization: `Bearer ${localStorage.getItem("OhdevToken")}`,
                          },
                          body: JSON.stringify({ userId, ...formData }),                        });

                        const data = await response.json();
                        if (response.ok) {
                          alert("Business address added successfully!");
                        } else {
                          alert(data.message || "Something went wrong.");
                        }
                      } catch (error) {
                        console.error("Error adding business:", error);
                        alert("Failed to add business. Please try again later.");
                      }
                    }}
                  >
                    Add Later
                  </button>

                </div>
              </div>

              {/* Illustration Section */}
              <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                <div className="illustration-container w-100 aspect-ratio-1x1 d-flex align-items-center justify-content-center p-4">
                  <div className="illustration-glow"></div>
                  <div className="position-relative">
                    <img src={cart || "/placeholder.svg"} className="text-primary" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default paymentscuccess

