import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import "./Header.css";

const navLinkClass = ({ isActive }) =>
  isActive ? "header__link header__link--active" : "header__link";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/store", label: "Store" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="" className="header__logo" width={48} height={48} />
          <span className="header__title">VENKATESHWARA PVC Wood Works</span>
        </Link>

        <button
          type="button"
          className="header__menu-btn"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header__menu-bar" />
          <span className="header__menu-bar" />
          <span className="header__menu-bar" />
        </button>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
