import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import 'animate.css';
import './style.css';
import logo from '../assets/favicon.ico';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // State to track if scrolled
  const [infoBarVisible, setInfoBarVisible] = useState(true); // State to track info bar visibility

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll to fix navbar and hide the info bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);  // Fix navbar when scrolled
        setInfoBarVisible(false);  // Hide info bar
      } else {
        setScrolled(false);  // Reset navbar position
        setInfoBarVisible(true);  // Show info bar
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-100">
        {/* Info bar */}
        {infoBarVisible && (
          <div className="px-4 py-2 mx-auto text-white container-fluid wow fadeInDown" style={{backgroundColor:'#091E3E'}}>
            <div className="d-flex justify-content-between align-items-center" style={{width:'95%',margin:"auto"}}>
              <div className="d-flex">
                <div className="d-flex align-items-center me-4">
                  <Phone size={16} />
                  <a href="tel:+919558476369" className="text-sm text-white ms-2 decoration-none" style={{textDecoration:'none'}}>+91 9558476369</a>
                </div>
              </div>
              <div className="d-flex">
                <a href="https://www.instagram.com/avataratechnobiz/" className="text-white me-4">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" className="text-white me-4">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="mailto:avataratechnobiz@gmail.com" className="text-white">
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <nav className={`navbar navbar-expand-lg animate__animated animate__fadeIn ${scrolled ? 'fixed-top bg-transparent' : ''}`} style={{ backgroundColor: scrolled ? 'transparent' : '', zIndex: 999,borderBottom:"1px solid gray" }}>
          <div className="container-fluid" style={{ width: '95%', margin: "auto" }}>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="Avatara TechnoBiz" className="h-25" />
              <span className="ms-2 fs-3 fw-bold">Avatara TechnoBiz</span>
            </Link>

            {/* Desktop Menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active text-primary hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-dark hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link text-dark hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" className="nav-link text-dark hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                    Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-dark hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="px-4 py-4 bg-white shadow-sm d-lg-none">
            <div className="d-flex flex-column align-items-center">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-primary">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-dark">About</Link>
              <Link to="/service" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-dark">Services</Link>
              <Link to="/career" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-dark">Career</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-dark">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
