import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Home, ShoppingBag, Package, Users, Store, ShoppingCart, Globe, Link, HelpCircle, ChevronDown, ChevronLeft, ChevronRight, Menu, X, Settings } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnBoard.css';
import { House, Bag, BoxSeam, People, Shop } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
const OnBoard = () => {
    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = (e) => {
        if (isSidebarOpen && !e.target.closest('.sidebar')) {
            setIsSidebarOpen(false);
        }
    };

    const handleNext = () => {
        navigate('/payment')
    }
    
    const handlePrevious = () => {
        navigate('/login')
    }
    return (
        <div className='min-vh-100 d-flex flex-column bg-light' style={{ fontFamily: "Inter, sans-serif" }} onClick={closeSidebar}>
            <Navbar />

        
            <div className="d-flex justify-content-start p-3 d-lg-none">
    <button className="btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Menu size={24} />
    </button>
</div>


            <div className="d-flex flex-grow-1">
                {/* Sidebar */}
                <div className={`sidebar d-flex flex-column border-end p-4 bg-white text-black shadow-sm 
                    ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

                    {/* Close Button (Mobile Only) */}
                    <button className="btn d-lg-none align-self-end mb-3" onClick={() => setIsSidebarOpen(false)}>
                        <X size={24} />
                    </button>

                    <nav className="nav flex-column flex-grow-1">
                        {[
                            { icon: Home,  label: "Home", hasDropdown: false },
                            { icon: ShoppingBag, label: "Orders", hasDropdown: true },
                            { icon: Package, label: "Products", hasDropdown: true },
                            { icon: Users, label: "Customers", hasDropdown: true },
                            { icon: Store, label: "Online Store" }
                        ].map((item, index) => (
                            <a key={index} className="nav-link d-flex align-items-center justify-content-between gap-2 mb-3" href="#">
                                <div className="d-flex align-items-center gap-2">
                                    <item.icon size={18} /> {item.label}
                                </div>
                                {item.hasDropdown && <ChevronDown size={16} />}
                            </a>
                        ))}
                    </nav>

                    {/* Trial Section */}
                    <div className="trial-card p-3 mt-auto text-center text-white rounded"
                        style={{
                            backgroundColor: "#9A66F0",
                            padding: "16px",
                            borderRadius: "8px",
                            position: "absolute",
                            bottom: "20px",
                            left: "10px",
                            right: "10px"
                        }}>
                        <h6 className="fw-bold">Your Trial is Started</h6>
                        <p className="small m-0">Your trial ends on March 22.<br />Select a plan to extend your trial.</p>
                        <button className="btn btn-dark btn-sm mt-2 w-100" onClick={handleNext}>Select a Plan</button>
                    </div>
                    <ul className="list-unstyled text-center mt-4">
            <li className="d-flex align-items-center justify-content-center text-dark p-2 rounded ">
              <Settings size={18} className="me-2" />
              <span>Settings</span>
            </li>
          </ul>
                </div>

                {/* Main Content */}
                <main className="p-3 d-flex flex-grow-1 align-items-center justify-content-center border-none" style={{ minHeight: "100vh" }}>
                    <div className="card p-4"
                        style={{
                            maxWidth: "936px",
                            width: "100%",
                            borderRadius: "12px",
                            border: "none",
                            padding: "40px",
                            fontFamily: "Inter, sans-serif",
                            boxShadow: "4px 4px 40px 0px #0000000F"
                        }}>
                        <div className="mb-3">
                            <h5 className="mb-2 h5 fw-bold">Welcome to Oheo.dev!</h5>
                            <p className="text-muted small">
                                Answer some questions to streamline and simplify the setup process.
                            </p>
                        </div>

                        <div className="mb-3 d-flex gap-2">
                            <button className="btn btn-outline-secondary custom-hover">I'm just starting</button>
                            <button className="btn btn-outline-secondary custom-hover">I'm already selling online or in person</button>
                        </div>

                        <div className="mb-2">
                            <h5 className="mb-1 fw-bold">Where do you plan to sell your products?</h5>
                            <p className="text-muted small">Select as many options as you prefer.</p>
                        </div>

                        <div className="row g-2">
                            {[
                                { id: "onlineStore", label: "An online store", desc: "Run a fully customized website", icon: Store },
                                { id: "inPerson", label: "In Person", desc: "Sell at retail stores, pop-ups, or other physical locations", icon: ShoppingCart },
                                { id: "socialMedia", label: "Social media", desc: "Sell on Facebook, Instagram, etc.", icon: Globe },
                                { id: "existingWebsite", label: "An existing website or blog", desc: "Add a buy button to your website", icon: Link },
                                { id: "marketplaces", label: "Online marketplaces", desc: "Sell on eBay, Amazon, etc.", icon: ShoppingBag },
                                { id: "iamNotSure", label: "I am not sure", icon: HelpCircle }
                            ].map(({ id, label, desc, icon: Icon }) => (
                                <div key={id} className="col-md-6">
                                    <div className="card selectable-card p-2 d-flex flex-column justify-content-center"
                                        style={{
                                            border: "1px solid #9A66F0",
                                            borderRadius: "8px",
                                            cursor: 'pointer',
                                            padding: "16px 20px",
                                            gap: "12px"
                                        }}>
                                        <div className="d-flex align-items-start gap-2">
                                            <input className="form-check-input mt-1" type="checkbox" id={id} />
                                            <Icon size={18} className="text-primary" />
                                            <div>
                                                <label className="form-check-label fw-medium small" htmlFor={id}>
                                                    {label}
                                                </label>
                                                <p className="text-muted small">{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons with Icons */}
                        <div className="mt-5 d-flex justify-content-between">
                            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center" onClick={handlePrevious}> 
                                <ChevronLeft size={16} className="me-1" /> Back
                            </button>
                            <button className="btn text-white btn-sm d-flex align-items-center" style={{ backgroundColor: "#6f42c1" }} 
                             onClick={handleNext}
                            >
                                Next <ChevronRight size={16} className="ms-1" />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OnBoard;
