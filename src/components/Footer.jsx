import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-[#091E3E]">
      <main className="container-fluid w-[85%] mx-auto mt-10 py-10">
        <div className="flex flex-wrap justify-between text-white">
          {/* Column 1: About Section */}
          <div className="w-full md:w-1/4 text-center bg-[#06A3DA] py-5">
            <div className="py-5 m-auto icon">
              <img src="src/assets/favicon.ico" className="mx-auto" alt="Logo" />
            </div>
            <div className="p-5 para">
              We specialize in providing innovative, results-driven services that are tailored to meet the unique needs of our global clientele. With a strong focus on delivering projects on time, we help businesses achieve their digital goals by combining cutting-edge technology with creative excellence.
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="w-full py-5 text-left md:w-1/4 lg:ps-5">
            <ul>
              <li className="p-2 py-8 text-3xl font-medium">Get In Touch</li>
              <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP">
                <li className="flex items-center py-1">
                  <i className="p-2 text-xl text-sky-200 fa-solid fa-location-dot"></i>
                  Office No. 14, 5th floor, Madhuram Arcade-2, Near Madhuram Circle Dindoli, Surat, 394210
                </li>
              </a>
              <a href="mailto:avataratechnobiz@gmail.com">
                <li className="flex items-center py-1">
                  <i className="p-2 text-xl text-sky-200 fa-solid fa-envelope"></i>
                  avataratechnobiz@gmail.com
                </li>
              </a>
              <a href="tel:+919558476369">
                <li className="flex items-center">
                  <i className="p-2 text-xl text-sky-200 fa-solid fa-phone"></i>
                  +91 9558476369
                </li>
              </a>
            </ul>
            <div className="m-2 contact-icons">
              <ul className="flex justify-between w-1/3">
                <a href="mailto:avataratechnobiz@gmail.com">
                  <li><i className="p-2 bg-blue-500 rounded-lg fa-solid fa-envelope"></i></li>
                </a>
                <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all">
                  <li><i className="p-2 bg-blue-500 rounded-lg fa-brands fa-linkedin"></i></li>
                </a>
                <a href="https://www.instagram.com/avataratechnobiz/">
                  <li><i className="p-2 bg-blue-500 rounded-lg fa-brands fa-instagram"></i></li>
                </a>
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="w-full py-5 text-left md:w-1/4 lg:ps-5">
            <ul>
              <li className="py-2 py-8 text-3xl font-medium">Quick Links</li>
              <Link to="/"><li className="py-1"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Home</li></Link>
              <Link to="/about"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>About</li></Link>
              <Link to="/service"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Service</li></Link>
              <Link to="/career"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Career</li></Link>
              <Link to="/contact"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Contact Us</li></Link>
            </ul>
          </div>

          {/* Column 4: Popular Links */}
          <div className="w-full py-5 text-left md:w-1/4 lg:pe-5">
            <ul>
              <li className="py-2 py-8 text-3xl font-medium">Popular Links</li>
              <Link to="/about"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Gallery</li></Link>
              <Link to="/service"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Features</li></Link>
              <Link to="/contact"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Privacy Policy</li></Link>
              <Link to="/service"><li className="py-2"><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right"></i>Services</li></Link>
            </ul>
          </div>
        </div>
      </main>

      {/* Last Contact Bar */}
      <div className="w-full bg-slate-900">
        <div className="h-20 py-7">
          <h2 className="text-center text-white">
            <a href="/">© avataratechnobiz.com.</a> All Rights Reserved. Designed by <a href="/">Avatara TechnoBiz</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
