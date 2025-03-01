import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search, Sun, Bell, Menu, X, ChevronDown } from "lucide-react";
import logo from '../../images/logo.png';

export default function paymentNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg border-bottom px-4 py-2" 
      style={{ backgroundColor: "#FFFFFF" , zIndex: 1050, position: "relative"  }}>
      
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo Section */}
        <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
          <a href="#" className="text-decoration-none">
            <img src={logo} alt="Logo" className="logo" style={{ height: "40px" }} />
          </a>
          <span className="fw-bold d-none d-sm-inline">oheo</span>
        </span>

        {/* Floor Shop Button */}
        <button className="btn btn-dark d-flex align-items-center gap-2 d-none d-md-flex">
          Floor Shop <ChevronDown size={16} />
        </button>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          <div className="position-relative">
            <Search className="position-absolute top-50 translate-middle-y ms-3" size={16} />
            <input 
              type="search" 
              placeholder="Search" 
              className="form-control form-control-sm ps-5" 
              aria-label="Search"
            />
          </div>
          <button className="btn btn-link p-2" aria-label="Toggle theme">
            <Sun size={20} />
          </button>
          <button className="btn btn-link p-2" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <img 
            src="https://github.com/shadcn.png" 
            alt="User" 
            className="rounded-circle" 
            width={32} 
            height={32} 
            aria-label="User profile"
          />
        </div>

        {/* Hamburger Button for Mobile */}
      {/* Hamburger Button for Mobile */}
{!isOpen && (
  <button 
    className="btn btn-link d-lg-none p-2" 
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Toggle menu"
  >
    <Menu size={24} />
  </button>
)}

      </div>

      {/* Mobile Menu (Sliding Sidebar) */}
      <div 
        className={`mobile-menu d-lg-none position-fixed top-0 start-0 h-100 bg-white shadow-sm p-4 ${isOpen ? "open" : ""}`}
        style={{
          width: "250px",
          transition: "transform 0.3s ease-in-out",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          zIndex: 1000
        }}>
        
        <button 
          className="btn btn-link text-dark mb-3" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className="nav flex-column">
          <a className="nav-link text-dark gap-2" href="#" onClick={() => setIsOpen(false)}>   <img 
            src="https://github.com/shadcn.png" 
            alt="User" 
            className="rounded-circle" 
            width={32} 
            height={32} 
            aria-label="User profile"
          />
           Profile
          </a>
          <a className="nav-link text-dark" href="#" onClick={() => setIsOpen(false)}> <Bell size={20} />Notification</a>
          <a className="nav-link text-dark" href="#" onClick={() => setIsOpen(false)}><Sun size={20} />Light mode</a>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="overlay position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50" 
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 999 }}
        ></div>
      )}

    </header>
  );
}