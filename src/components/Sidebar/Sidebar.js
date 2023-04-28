import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import Profile from "../src/pages/Profile";
// import Voucher from "../../pages/Voucher";

const Sidebar = () => {
  const [show, setShow,menuToggle] = useState(false);
  // function menuToggle() {
  //   const toggleMenu = document.querySelector(".menu");
  //   toggleMenu.classList.toggle("active");}
  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
        {/* User Account Section */}
        <div class="action">
          <div class="profile" onclick={() => menuToggle()}>
            <img src="./assets/avatar.jpg" />
          </div>
          <div class="menu">
            <h3>
              Someone Famous
              <br />
              <span>Website Designer</span>
            </h3>
            <ul>
              <li>
                <img src="./assets/icons/user.png" />
                <a href="#">My profile</a>
              </li>
              <li>
                <img src="./assets/icons/edit.png" />
                <a href="#">Edit profile</a>
              </li>
              <li>
                <img src="./assets/icons/envelope.png" />
                <a href="#">Inbox</a>
              </li>
              <li>
                <img src="./assets/icons/settings.png" />
                <a href="#">Setting</a>
              </li>
              <li>
                <img src="./assets/icons/question.png" />
                <a href="#">Help</a>
              </li>
              <li>
                <img src="./assets/icons/log-out.png" />
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
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
