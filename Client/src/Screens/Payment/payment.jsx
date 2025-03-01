"use client"

import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../Components/Navbar/Navbar"
import { Home, ShoppingBag, Package, Users, Store, ChevronDown, X, Settings, Menu } from "lucide-react"
import PricingCards from "../../Components/pricingCard/PricingCard"
import { useNavigate } from "react-router-dom"

const PricingPlans = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992)
      if (window.innerWidth >= 992) {
        setIsSidebarOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = (e) => {
    if (isMobile && isSidebarOpen && !e.target.closest(".sidebar")) {
      setIsSidebarOpen(false);
    }
  };
 
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

          <div className="position-relative mt-auto">
            <div
              className="trial-card text-center text-white rounded p-3"
              style={{
                backgroundColor: "#9A66F0",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <h6 className="fw-bold">Your Trial is Started</h6>
              <p className="small m-0">
                Your trial ends on March 22.
                <br />
                Select a plan to extend your trial.
              </p>
              <button className="btn btn-dark btn-sm mt-2 w-100">Select a Plan</button>
            </div>
          </div>
          <ul className="list-unstyled text-center mt-4">
            <li className="d-flex align-items-center justify-content-center text-dark p-2 rounded ">
              <Settings size={18} className="me-2" />
              <span>Settings</span>
            </li>
          </ul>
        </div>

        <main
          className="p-3 d-flex flex-grow-1 align-items-center justify-content-center border-none"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="card p-4"
            style={{
              maxWidth: "1100px",
              minHeight: "100vh",
              width: "100%",
              borderRadius: "12px",
              border: "none",
              padding: "40px",
              fontFamily: "Inter, sans-serif",
              boxShadow: "4px 4px 40px 0px #0000000F",
            }}
          >
            <div className="mb-3">
              <h5 className="mb-2 h5 fw-bold">Select Plan</h5>
              <p className="text-muted small">
                If you decide to cancel before March 29, you won't incur any charges. You have the flexibility to modify
                or cancel your plan at any time.
              </p>
            </div>

            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <div className="d-flex gap-4 flex-wrap">
                <PricingCards />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PricingPlans

