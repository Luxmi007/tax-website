import React, { useState } from "react";
import "../App.css";

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

const NAV_LINKS = [
  { label: "HOME", page: "home" },
  { label: "ABOUT", page: "about" },
  { label: "SERVICES", page: "services" },
  { label: "CONTACT", page: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [active, setActive] = useState("home");

  const handleNav = (page: string) => {
    setActive(page);
    onNavigate?.(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="flex items-center cursor-pointer" onClick={() => handleNav("home")}>
          <img
            src="https://vashishthconsultancy.com/wp-content/uploads/2020/06/logo2new.png"
            alt="Logo"
            className="navbar-logo"
          />
          <span className="text-lg font-bold text-secondary hidden sm:inline ml-2">
            Vashisth Tax Consultancy
          </span>
        </div>
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => handleNav(link.page)}
                className={`navbar-link${active === link.page ? " active" : ""}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;