import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "animate.css";

function Home() {
  useEffect(() => {
    // Add entrance animations on mount
    const elements = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate__animated animate__fadeInDown">
              <span className="badge-icon">✨</span>
              <span>AI-Powered Learning Platform</span>
            </div>
            
            <h1 className="hero-title animate__animated animate__fadeInUp">
              Welcome to Your
              <span className="gradient-text"> AI-Powered</span>
              <br />
              Learning Companion!
            </h1>
            
            <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
              Smarter, faster, and better learning with real-time AI assistance.
              <br />
              Master any topic with personalized quizzes and instant AI-powered feedback.
            </p>
            
            <div className="hero-cta animate__animated animate__fadeInUp animate__delay-2s">
              <Link to="/Chatbot" className="btn-primary-gradient">
                <span>Try Chatbot Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/Quiz" className="btn-secondary-outline">
                <span>Take a Quiz</span>
              </Link>
            </div>

            <div className="hero-stats animate__animated animate__fadeInUp animate__delay-3s">
              <div className="stat-item">
                <div className="stat-number">Any</div>
                <div className="stat-label">Topic</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">AI</div>
                <div className="stat-label">Powered</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>What is <span className="gradient-text">PLC</span>?</h2>
            <p className="section-subtitle">
              PLC (Personalized Learning Companion) is your AI-powered learning assistant that helps you master any topic. 
              Get instant answers, take personalized quizzes, and receive intelligent feedback to accelerate your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What's New in <span className="gradient-text">PLC</span>?</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card card-1">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI Chatbot</h3>
              <p className="feature-description">
                Interactive and real-time assistant that answers your learning queries instantly with intelligent responses.
              </p>
              <Link to="/Chatbot" className="feature-link">
                Try Now <span>→</span>
              </Link>
            </div>

            <div className="feature-card card-2">
              <div className="feature-icon">🧠</div>
              <h3 className="feature-title">ML-Based Quiz & Feedback</h3>
              <p className="feature-description">
                Generate topic-based quizzes and get smart insights on where to improve with AI-powered analysis.
              </p>
              <Link to="/Quiz" className="feature-link">
                Start Quiz <span>→</span>
              </Link>
            </div>

            <div className="feature-card card-3">
              <div className="feature-icon">🔐</div>
              <h3 className="feature-title">Zero Data Storage</h3>
              <p className="feature-description">
                No logins. No tracking. Just pure learning and complete privacy. Your data stays with you.
              </p>
              <div className="feature-badge">Privacy First</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It <span className="gradient-text">Works</span>?</h2>
          </div>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Ask or Select Topic</h4>
                <p>Type your question in the chatbot or choose a quiz topic from our curated legal zones.</p>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>AI Responds or Quiz Appears</h4>
                <p>Get real-time answers from our AI or take an AI-generated quiz tailored to your selected topics.</p>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Get Feedback</h4>
                <p>Receive performance-based tips and personalized recommendations directly from the chatbot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Users <span className="gradient-text">Say</span></h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                This AI chatbot is amazing! It answers all my questions instantly and helps me understand complex topics easily.
              </p>
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-author">
                <div className="author-avatar">AL</div>
                <div className="author-info">
                  <div className="author-name">A Happy Learner</div>
                  <div className="author-role">Student</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Quiz + feedback? Game changer. Perfect for quick revisions and mastering new subjects!
              </p>
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-author">
                <div className="author-avatar">FS</div>
                <div className="author-info">
                  <div className="author-name">Focused Student</div>
                  <div className="author-role">Lifelong Learner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Learning?</h2>
            <p className="cta-subtitle">
              Join thousands of learners using AI to master any subject
            </p>
            <Link to="/Chatbot" className="btn-primary-gradient btn-large">
              <span>Try the Chatbot Now</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;