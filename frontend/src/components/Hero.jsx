import React from 'react';
import '../home.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="hero">
      {/* Floating Logos */}
      <div className="logo-wrapper">
      <img src="/google.png" alt="Google" className="floating-logo google" />
      <img src="/linkedin.png" alt="LinkedIn" className="floating-logo linkedin" />
      <img src="/amazon.png" alt="Amazon" className="floating-logo amazon" />
      <img src="/twitter.png" alt="Twitter" className="floating-logo twitter" />
      <img src="/microsoft.png" alt="Microsoft" className="floating-logo microsoft" />
      <img src="/github.png" alt="Github" className="floating-logo github" />
    </div>

      <h1 className="hero-title">
        Search, Apply & <br /> Get Your <span className="highlight">Dream Job</span>
      </h1>

      <p className="hero-description">
        Start your hunt for the best, life-changing career opportunities from here in your <br />
        selected areas conveniently and get hired quickly.
      </p>

      <div className="hero-buttons">
  <button
          className="browse-btn"
          onClick={() => navigate("/jobs")} // ✅ Navigate to /jobs
        >
          Browse Jobs
        </button>
  <button
    className="how-btn"
    onClick={() => {
      const element = document.getElementById("how-it-works");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    How it Works?
  </button>
</div>

    </section>
  )
}

export default Hero;
