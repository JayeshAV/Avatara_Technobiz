import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import 'animate.css';
import "./style.css";
import logo from '../assets/favicon.ico'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full bg-blue-900">
        {/* Info bar */}
        <div className=" w-[98%] mx-auto text-white py-2 px-4 wow fadeInDown">
          <div className="container-fluid mx-auto flex justify-between items-center">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919558476369" className="text-sm">+91 9558476369</a>
              </div>
              
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/avataratechnobiz/" className="hover:text-blue-200">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" className="hover:text-blue-200">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <a href="mailto:avataratechnobiz@gmail.com" className="hover:text-blue-200">
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white main-nav shadow-md py-4 px-4 sticky top-0 z-50 animate__animated animate__fadeIn">
          <div className='w-[98%] mx-auto'>
          <div className="container-fluid mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Avatara TechnoBiz" className="h-10" />
              <span className="ml-2 text-3xl font-bold">Avatara TechnoBiz</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-11 text-lg">
              <Link to="/" className="text-blue-500 animate__animated animate__pulse animate__infinite">Home</Link>
              <Link to="/about" className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">About</Link>
              <Link to="/service" className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">Services</Link>
              <Link to="/career" className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">Career</Link>
              <Link to="/contact" className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">Contact</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-blue-500 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <span className="material-icons"><i className="fa-solid fa-bars"></i></span>
            </button>
          </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-4">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-500 animate__animated animate__pulse animate__infinite">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">About</Link>
              <Link to="/service" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">Services</Link>
              <Link to="/career" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">Career</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 animate__animated animate__pulse animate__infinite">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
