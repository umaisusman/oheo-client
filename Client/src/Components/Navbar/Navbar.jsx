"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Sun, Bell, ChevronDown, Menu, X } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../images/logo.png"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false)
  const notificationsRef = useRef(null)
  const navigate = useNavigate() 

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  const handleLogout = () => { 
    navigate("/login") 
  }

  return (
    <header
      className="navbar navbar-expand-lg border-bottom px-4 py-2 w-100"
      style={{ backgroundColor: "#FFFFFF", zIndex: 1050 }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
          <a href="#" className="text-decoration-none">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="logo" style={{ height: "40px" }} />
          </a>
          <span className="fw-bold">oheo</span>
        </span>

        {/* Floor Shop Button */}
        <button className="btn btn-dark d-flex align-items-center gap-2">
          Floor Shop <ChevronDown size={16} />
        </button>

        {/* Navigation Items */}
        <div className="d-flex align-items-center gap-3">
          {/* Search Bar */}
          <div className="position-relative">
            <Search className="position-absolute top-50 translate-middle-y ms-3" size={16} />
            <input
              type="search"
              placeholder="Search"
              className="form-control form-control-sm ps-5"
              aria-label="Search"
            />
          </div>

          {/* Theme Toggle */}
          <button className="btn btn-link p-2" aria-label="Toggle theme">
            <Sun size={20} />
          </button>

          {/* Notifications */}
          <div className="position-relative" ref={notificationsRef}>
            <button className="btn btn-link p-2" aria-label="Notifications" onClick={toggleNotifications}>
              <Bell size={20} />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div
                className="position-absolute end-0 mt-2"
                style={{
                  width: "350px",
                  zIndex: 1060,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px dashed purple",
                }}
              >
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                  <h6 className="m-0 fw-bold">Alerts</h6>
                  <div>
                    <button className="btn btn-sm btn-link p-1 me-1">
                      <Menu size={18} />
                    </button>
                    <button className="btn btn-sm btn-link p-1">
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <div className="notifications-list p-3">
                  <div className="notification-item mb-3">
                    <div className="text-muted small">Apps - 2 minutes ago</div>
                    <div className="fw-medium">There's an issue with Shop</div>
                    <div className="text-muted small">
                      Review an issue that may impact sales or how you promote products. Go to the channel for more
                      details.
                    </div>
                  </div>

                  <div className="notification-item mb-3">
                    <div className="text-muted small">Apps - 2 minutes ago</div>
                    <div className="fw-medium">There's an issue with Shop</div>
                    <div className="text-muted small">
                      Review an issue that may impact sales or how you promote products. Go to the channel for more
                      details.
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <a href="#" className="text-decoration-none">
                      See all
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile & Logout Section */}
          <div className="d-flex align-items-center gap-2">
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="rounded-circle"
              width={32}
              height={32}
              aria-label="User profile"
            />
            {/* Logout Button */}
            <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
