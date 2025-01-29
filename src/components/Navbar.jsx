// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Phone } from 'lucide-react';
// import 'animate.css';
// import './style.css';
// import logo from '../assets/favicon.ico';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [infoBarVisible, setInfoBarVisible] = useState(true);

//   // Handle scroll to fix navbar and hide the info bar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//         setInfoBarVisible(false);
//       } else {
//         setScrolled(false);
//         setInfoBarVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="w-100">
//         {/* Info bar */}
//         {infoBarVisible && (
//           <div className="px-4 py-2 mx-auto text-white container-fluid wow fadeInDown" style={{ backgroundColor: '#091E3E' }}>
//             <div className="d-flex justify-content-between align-items-center" style={{ width: '95%', margin: "auto" }}>
//               <div className="d-flex">
//                 <div className="d-flex align-items-center justify-content-around me-4">
//                   <div>
//                     <Phone size={17} />
//                     <a href="tel:+919558476369" className="text-sm text-white ms-2" style={{ textDecoration: 'none' }}>
//                       +91 9558476369
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex">
//                 <a href="https://www.instagram.com/avataratechnobiz/" className="text-white me-4">
//                   <i className="fab fa-instagram fa-lg"></i>
//                 </a>
//                 <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" className="text-white me-4">
//                   <i className="fab fa-linkedin fa-lg"></i>
//                 </a>
//                 <a href="mailto:avataratechnobiz@gmail.com" className="text-white">
//                   <i className="fas fa-envelope fa-lg"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Navbar */}
//         <nav className={`navbar navbar-expand-lg animate__animated animate__fadeIn ${scrolled ? 'fixed-top bg-white' : ''}`} style={{
//           backgroundColor: scrolled ? 'white' : '', zIndex: 999
//         }}>
//           <div className="container-fluid" style={{ width: '95%', margin: "auto" }}>
            
//             {/* Logo */}
//             <Link to="/" className="navbar-brand d-flex align-items-center">
//               <img src={logo} alt="Avatara TechnoBiz" className="h-25" />
//               <span className="ms-2 fs-3 font-weight-bold" style={{color:'#06A3DA', fontWeight:'800'}}>Avatara TechnoBiz</span>
//             </Link>

//             {/* ✅ Bootstrap Mobile Menu Toggle Button */}
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//               <i className="fa-solid fa-bars"></i>
//             </button>

//             {/* ✅ Single Navbar for Both Desktop & Mobile */}
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <Link to="/" className="nav-link active text-primary">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/about" className="nav-link text-dark">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/service" className="nav-link text-dark">Services</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/career" className="nav-link text-dark">Career</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/contact" className="nav-link text-dark">Contact</Link>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;
