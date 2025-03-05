

import React, { useState }  from 'react';
import CardNavbar from '../../Components/cardNavbar/CardNavbar';
import method from '../../images/Method.png'
import visa from '../../images/Visa.png'
import { getNames } from 'country-list';
import { useNavigate } from 'react-router-dom';

export default function CardDetails() {
  const navigate = useNavigate()
  const countries = getNames().sort(); 
 
  

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  cardNumber: '',
  expDate: '',
  cvv: '',
  country: '',
  zipCode: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
const handleNext = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/business/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        amount: 299, 
        currency: "USD",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Payment Intent Created Successfully");
      navigate("/paymentSuccess");
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};
  return (
    <div>
        <CardNavbar/>
      <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <h4 className="mb-0"></h4>
                <span className="badge bg-primary ms-2">Save with yearly billing</span>
              </div>

              <section className="mb-4">
                <h5>Payment Method</h5>
                <p className="text-muted">Select your preferred payment method for Orbit</p>

                <div className="card mb-3 border">
                  <div className="card-body d-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="payment" id="card" checked readOnly />
                      <label className="form-check-label" htmlFor="card">Credit or debit card</label>
                    </div>
                    <div className="ms-auto">
                      <img src={visa} alt="Visa" className="me-2" style={{height: "24px"}} />
                      <img src={method} alt="Mastercard" style={{height: "24px"}} />
                    </div>
                  </div>
                </div>

                <form>
  <div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">First name</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="First Name" 
        name="firstName" 
        value={formData.firstName} 
        onChange={handleChange} 
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Last name</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Input last name" 
        name="lastName"
        value={formData.lastName} 
        onChange={handleChange} 
      />
    </div>
    <div className="col-12">
      <label className="form-label">Card number</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="xxxx xxxx xxxx xxxx"  
        name="cardNumber"
        value={formData.cardNumber} 
        onChange={handleChange} 
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Expires</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="mm/yyyy"  
        name="expDate"
        value={formData.expDate} 
        onChange={handleChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">CVV</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="xxx" 
        name="cvv"
        value={formData.cvv} 
        onChange={handleChange} 
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Country/Region</label>
      <select 
        name="country" 
        className="form-select" 
        value={formData.country} 
        onChange={handleChange}
        required
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
    <div className="col-md-6">
      <label className="form-label">ZIP Code</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Input ZIP code"  
        name="zipCode"
        value={formData.zipCode} 
        onChange={handleChange} 
      />
    </div>
  </div>
</form>


                <div className="card mt-3 border">
                  <div className="card-body d-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="payment" id="paypal" />
                      <label className="form-check-label" htmlFor="paypal">PayPal</label>
                    </div>
                    <img src={method} alt="PayPal" className="ms-auto" style={{height: "24px"}} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5 className="mb-0">Advanced plan</h5>
                  <small className="text-muted">Monthly</small>
                </div>
                <span className="h5 mb-0">$299.00</span>
              </div>

              <div className="mb-4">
                <div className="card mb-2 border">
                  <div className="card-body d-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="plan" id="trial" />
                      <div className="ms-2">
                        <div>Today</div>
                        <small className="text-muted">Trial</small>
                      </div>
                    </div>
                    <span className="ms-auto">Free</span>
                  </div>
                </div>

                <div className="card mb-2 border">
                  <div className="card-body d-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="plan" id="march" />
                      <div className="ms-2">
                        <div>March 1, 2024</div>
                        <small className="text-muted">$1 x 2 months</small>
                      </div>
                    </div>
                    <span className="ms-auto">$1.00</span>
                  </div>
                </div>

                <div className="card mb-2 border bg-light">
                  <div className="card-body d-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="plan" id="may" checked readOnly />
                      <div className="ms-2">
                        <div>May 1, 2024</div>
                        <small className="text-muted">Advanced plan</small>
                      </div>
                    </div>
                    <span className="ms-auto">$299.00</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Amount due</span>
                <span className="fw-bold">$1.00 USD</span>
              </div>
              <small className="text-muted d-block mb-4">March 1, 2024</small>

              <button className="btn btn-primary w-100 mb-3" onClick={handleNext}>Subscribe</button>
              <small className="text-muted d-block text-center">Change or cancel your plan at any time</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}


//pk_test_51QzForH5CzKy8o4diRBINgOHb6bGSoUExhtHdJzqeBoZzZn9zd7et5GVCvULr3xrJIxe9tWcQ8IoMSuVI1ufxLBv00kkU05hTT
//sk_test_51QzForH5CzKy8o4dolvzWiofXvlIPe303NL4QACq5VYgjs0o4wIUAW3dtAdJNwtzMDBXmt2ZY9AnElLoWTGUSNrO00qZ5DtVti