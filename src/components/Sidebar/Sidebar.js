import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";
import edit from "../../assets/images/edit.png";
import inbox from "../../assets/images/envelope.png";
import settings from "../../assets/images/settings.png";
import help from "../../assets/images/question.png";
import logout from "../../assets/images/log-out.png";
import "./index.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function DropdownItem(props) {
    return (
      <li className="dropdownItem">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
        {/* User Account Section */}
        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={user}></img>
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              Bhargav Admin
              <br />
              <span>Constructor</span>
            </h3>
            <ul>
              <DropdownItem img={user} text={"My Profile"} />
              <DropdownItem img={edit} text={"Edit Profile"} />
              <DropdownItem img={inbox} text={"Inbox"} />
              <DropdownItem img={settings} text={"Settings"} />
              <DropdownItem img={help} text={"Helps"} />
              <DropdownItem img={logout} text={"Logout"} />
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
