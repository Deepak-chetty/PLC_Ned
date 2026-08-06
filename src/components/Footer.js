import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">
                  <span className="logo-text">PLC</span>
                </div>
                <h3>Personalized Learning Companion</h3>
              </div>
              <p className="footer-description">
                Your AI-powered learning assistant for mastering any topic with personalized quizzes and instant feedback.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Chatbot">ChatBot</Link></li>
                <li><Link to="/Quiz">Quiz</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>

            {/* Features */}
            <div className="footer-section">
              <h4 className="footer-heading">Features</h4>
              <ul className="footer-links">
                <li>AI-Powered Chatbot</li>
                <li>ML-Based Quizzes</li>
                <li>Personalized Feedback</li>
                <li>Zero Data Storage</li>
              </ul>
            </div>

            {/* Topics */}
            <div className="footer-section">
              <h4 className="footer-heading">Popular Topics</h4>
              <ul className="footer-links">
                <li>Science & Technology</li>
                <li>Mathematics</li>
                <li>History & Geography</li>
                <li>Languages & Literature</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} PLC. All rights reserved. Built with ❤️ for learners by Deepak Chetty.
              </p>
              <div className="footer-badges">
                <span className="badge">🔐 Privacy First</span>
                <span className="badge">🤖 AI Powered</span>
                <span className="badge">✨ Free Forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;