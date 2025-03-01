"use client"

import { useState } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import {
  Home,
  ShoppingBag,
  Package,
  Users,
  Store,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Box,
  Truck,
  CreditCard,
  Palette,
  StoreIcon,
  Settings,
} from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../OnBoard/onBoard.CSS"
import { useNavigate } from "react-router-dom"
import { BrowserEdge } from "react-bootstrap-icons"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
)

const HomeDashoard = () => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const closeSidebar = (e) => {
    if (isSidebarOpen && !e.target.closest(".sidebar")) {
      setIsSidebarOpen(false)
    }
  }

  const handleNext = () => {
    navigate("/payment")
  }

  const handlePrevious = () => {
    navigate("/login")
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column bg-light"
      style={{ fontFamily: "Inter, sans-serif" }}
      onClick={closeSidebar}
    >
      <Navbar />

      {/* Mobile Menu Button */}
      <div className="d-flex justify-content-start p-3 d-lg-none">
        <button className="btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu size={24} />
        </button>
      </div>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div
          className={`sidebar d-flex flex-column border-end p-4 bg-white text-black shadow-sm 
                    ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
        >
          {/* Close Button (Mobile Only) */}
          <button className="btn d-lg-none align-self-end mb-3" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>

          <nav className="nav flex-column flex-grow-1">
            {[
              { icon: Home, label: "Home", hasDropdown: false },
              { icon: ShoppingBag, label: "Orders", hasDropdown: true },
              { icon: Package, label: "Products", hasDropdown: true },
              { icon: Users, label: "Customers", hasDropdown: true },
              { icon: Store, label: "Online Store" },
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
          <div
            className="trial-card p-3 mt-auto text-center text-white rounded"
            style={{
              backgroundColor: "#9A66F0",
              padding: "16px",
              borderRadius: "8px",
              position: "absolute",
              bottom: "20px",
              left: "10px",
              right: "10px",
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
          {/* Settings Section */}
          <ul className="list-unstyled text-center mt-4">
            <li className="d-flex align-items-center justify-content-center text-dark p-2 rounded ">
              <Settings size={18} className="me-2" />
              <span>Settings</span>
            </li>
          </ul>
          
        </div>

        {/* Main Content */}
        <main
          className="p-3 d-flex flex-grow-1 align-items-center justify-content-center border-none"
          style={{ minHeight: "120vh" }}
        >
          {" "}
          {/* Increased height */}
          <div
            className="card p-4"
            style={{
              maxWidth: "936px",
              width: "100%",
              borderRadius: "12px",
              border: "none",
              padding: "40px",
              fontFamily: "Inter, sans-serif",
              boxShadow: "4px 4px 40px 0px #0000000F",
              minHeight: "120vh", 
            }}
          >
            <div className="row">
              <div className="col-12">
              <h1 style={{ 
  fontFamily: "Inter", 
  fontWeight: 600, 
  fontSize: "24px", 
  lineHeight: "28.8px", 
  letterSpacing: "0px", 
}}>
  Get Started with <span style={{ color: "#333" }}>oheo.dev</span>
</h1>

                <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>Utilize this customized guide to establish and launch your store.</p>
              </div>
            </div>

            {/* Setup Cards */}
            <div className="row g-3 mt-3">
              {/* Card 1 */}
              <div className="col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)")}
                >
                  <div className="card-body d-flex align-items-center p-3">
                    <div className="d-flex align-items-center w-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f3ebff",
                          flexShrink: 0,
                        }}
                      >
                        <Box size={20} color="#6f42c1" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">Include your initial product in the setup</h6>
                        <p className="mb-0 text-muted small">
                          Choose to include the initial price of your product, allowing for the calculation of gross
                          profit and margin.
                        </p>
                      </div>
                      <ChevronRight size={20} className="ms-2 text-muted" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)")}
                >
                  <div className="card-body d-flex align-items-center p-3">
                    <div className="d-flex align-items-center w-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f3ebff",
                          flexShrink: 0,
                        }}
                      >
                        <Palette size={20} color="#6f42c1" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">Customize your online store</h6>
                        <p className="mb-0 text-muted small">
                          Select a theme and customize it with your logo, colors, and images to showcase your brand.
                        </p>
                      </div>
                      <ChevronRight size={20} className="ms-2 text-muted" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)")}
                >
                  <div className="card-body d-flex align-items-center p-3">
                    <div className="d-flex align-items-center w-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f3ebff",
                          flexShrink: 0,
                        }}
                      >
                        <CreditCard size={20} color="#6f42c1" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">Configure Oheo payments</h6>
                        <p className="mb-0 text-muted small">
                          Enable accepting payments instantly. You'll have access to a simple and secure payment
                          process.
                        </p>
                      </div>
                      <ChevronRight size={20} className="ms-2 text-muted" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)")}
                >
                  <div className="card-body d-flex align-items-center p-3">
                    <div className="d-flex align-items-center w-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f3ebff",
                          flexShrink: 0,
                        }}
                      >
                        <StoreIcon size={20} color="#6f42c1" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">Name your Store</h6>
                        <p className="mb-0 text-muted small">
                          Your temporary store name is currently 'Flow Shop.' This name will appear in your admin and
                          online store..
                        </p>
                      </div>
                      <ChevronRight size={20} className="ms-2 text-muted" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}

              {/* Card 4 */}
              <div className="col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)")}
                >
                  <div className="card-body d-flex align-items-center p-3">
                    <div className="d-flex align-items-center w-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f3ebff",
                          flexShrink: 0,
                        }}
                      >
                        <Truck size={20} color="#6f42c1" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">Setup shipping and delivery</h6>
                        <p className="mb-0 text-muted small">
                          Set your shipping locations and rates so customers can view shipping costs at checkout.
                        </p>
                      </div>
                      <ChevronRight size={20} className="ms-2 text-muted" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)")}
                >
                  <div className="card-body d-flex align-items-center p-3">
                    <div className="d-flex align-items-center w-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f3ebff",
                          flexShrink: 0,
                        }}
                      >
                        <BrowserEdge size={20} color="#6f42c1" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">Connect a custom domain.</h6>
                        <p className="mb-0 text-muted small">
                          Your current domain is c671a5-0b.oheo.dev. To make it easier for customers to find your online
                          store, you can add a custom domain.{" "}
                        </p>
                      </div>
                      <ChevronRight size={20} className="ms-2 text-muted" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Graphs */}
            <div className="row mt-4">
              {/* Graph 1 - Line Chart */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h5 className="mb-0 fw-bold">$722.84</h5>
                      <span className="badge bg-success-subtle text-success">+15%</span>
                    </div>
                  </div>
                  <div style={{ height: "120px" }}>
                    <Line
                      data={{
                        labels: ["", "", "", "", "", "", ""],
                        datasets: [
                          {
                            data: [30, 60, 40, 50, 40, 55, 85],
                            borderColor: "#9A66F0",
                            backgroundColor: "rgba(154, 102, 240, 0.1)",
                            tension: 0.4,
                            fill: true,
                            pointRadius: 0,
                            borderWidth: 2,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                        scales: {
                          x: { display: false },
                          y: { display: false, min: 0 },
                        },
                        elements: { point: { radius: 0 } },
                      }}
                    />
                  </div>
                  <div className="d-flex mt-2">
                    <div className="d-flex align-items-center me-3">
                      <div
                        className="rounded-circle me-1"
                        style={{ width: "8px", height: "8px", backgroundColor: "#9A66F0" }}
                      ></div>
                      <small className="text-muted">This week</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle me-1"
                        style={{ width: "8px", height: "8px", backgroundColor: "#E0D1FC" }}
                      ></div>
                      <small className="text-muted">Last week</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graph 2 - Bar Chart */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h5 className="mb-0 fw-bold">128</h5>
                      <span className="badge bg-success-subtle text-success">+19%</span>
                    </div>
                  </div>
                  <div style={{ height: "120px" }}>
                    <Bar
                      data={{
                        labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
                        datasets: [
                          {
                            data: [40, 30, 45, 25, 55, 20, 45, 30, 50, 25, 40, 35],
                            backgroundColor: "#9A66F0",
                            barThickness: 6,
                            borderRadius: 4,
                          },
                          {
                            data: [20, 15, 25, 10, 30, 10, 25, 15, 25, 10, 20, 15],
                            backgroundColor: "#E0D1FC",
                            barThickness: 6,
                            borderRadius: 4,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                        scales: {
                          x: { display: false, stacked: false },
                          y: { display: false, stacked: false, min: 0 },
                        },
                      }}
                    />
                  </div>
                  <div className="d-flex mt-2">
                    <div className="d-flex align-items-center me-3">
                      <div
                        className="rounded-circle me-1"
                        style={{ width: "8px", height: "8px", backgroundColor: "#9A66F0" }}
                      ></div>
                      <small className="text-muted">This month</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle me-1"
                        style={{ width: "8px", height: "8px", backgroundColor: "#E0D1FC" }}
                      ></div>
                      <small className="text-muted">Last month</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graph 3 - Area Chart */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h5 className="mb-0 fw-bold">13.3%</h5>
                      <span className="badge bg-success-subtle text-success">+2.8%</span>
                    </div>
                  </div>
                  <div style={{ height: "120px" }}>
                    <Line
                      data={{
                        labels: ["", "", "", "", "", "", ""],
                        datasets: [
                          {
                            data: [10, 40, 80, 60, 20, 10, 5],
                            borderColor: "#9A66F0",
                            backgroundColor: "rgba(154, 102, 240, 0.1)",
                            tension: 0.4,
                            fill: true,
                            pointRadius: 0,
                            borderWidth: 2,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                        scales: {
                          x: { display: false },
                          y: { display: false, min: 0 },
                        },
                        elements: { point: { radius: 0 } },
                      }}
                    />
                  </div>
                  <div className="d-flex mt-2">
                    <div className="d-flex align-items-center me-3">
                      <div
                        className="rounded-circle me-1"
                        style={{ width: "8px", height: "8px", backgroundColor: "#9A66F0" }}
                      ></div>
                      <small className="text-muted">Conversion</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle me-1"
                        style={{ width: "8px", height: "8px", backgroundColor: "#E0D1FC" }}
                      ></div>
                      <small className="text-muted">Average</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons with Icons */}
            <div className="mt-5 d-flex justify-content-between">
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center" onClick={handlePrevious}>
                <ChevronLeft size={16} className="me-1" /> Back
              </button>
              <button
                className="btn text-white btn-sm d-flex align-items-center"
                style={{ backgroundColor: "#6f42c1" }}
                onClick={handleNext}
              >
                Next <ChevronRight size={16} className="ms-1" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomeDashoard

