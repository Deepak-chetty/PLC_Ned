import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="topbar-content">
          <Link to="/" className="brand">
            <div className="brand-icon">
              <span className="icon-text">PLC</span>
            </div>
            <span className="brand-name">
              Personalized Learning Companion
            </span>
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="nav-menu">
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/ChatBot"
                  className={`nav-link ${isActive("/ChatBot") ? "active" : ""}`}
                >
                  ChatBot
                </Link>
              </li>
              <li>
                <Link
                  to="/Quiz"
                  className={`nav-link ${isActive("/Quiz") ? "active" : ""}`}
                >
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
