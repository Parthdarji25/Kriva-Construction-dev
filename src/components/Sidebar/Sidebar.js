import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import Profile from "../src/pages/Profile";
// import Voucher from "../../pages/Voucher";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="#" className="nav-logo">
              <i className={`fa-solid fa-truck-fast nav-logo-icon`}></i>
              <span className="nav-logo-name">Bhargav Cement</span>
            </Link>
            <div className="nav-list">
              <Link to="/" className="nav-link ">
                <i className="fa-solid fa-list nav-logo-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/user" className="nav-link">
                <i className="fa-solid fa-user nav-logo-icon"></i>
                <span className="nav-link-name">User</span>
              </Link>
              <Link to="/voucher" className="nav-link">
                <i className="fas fa-barcode nav-link-icon"></i>
                <span className="nav-link-name">Vouchers</span>
              </Link>
              <Link to="/vendor" className="nav-link">
                <i className="fas fa-book nav-link-icon"></i>
                <span className="nav-link-name">Vendors</span>
              </Link>
              <Link to="/unit" className="nav-link">
                <i className="fas fa-money-bill nav-link-icon"></i>
                <span className="nav-coins-name">Units</span>
              </Link>
              <Link to="/item" className="nav-link">
                <i className="fas fa-city nav-link-icon"></i>
                <span className="nav-coins-name">Items</span>
              </Link>
              <Link to="/subitem" className="nav-link">
                <i className="fas fa-toolbox nav-link-icon"></i>
                <span className="nav-sitemap-name">Sub-Items</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>
      {/* <Dashboard /> */}
      {/* <Voucher /> */}

      {/* <Profile /> */}
    </main>
  );
};

export default Sidebar;
