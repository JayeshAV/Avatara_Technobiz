import React from 'react'
import TestimonialSlider from './Home_Pages/Testimonial'
import Slider from './Home_Pages/Swiper'
import Home_Form from "./Home_Pages/Home_Form"
import logo from '../assets/favicon.ico';

const Service = () => {
  return (
    <>
      <div class="container-fluid px-5 d-none d-lg-block" style={{ backgroundColor: '#091E3E' }}>
        <div class="row gx-0">
          <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">  <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>5th Floor Madhuram Arcade 2 , Dindoli , Surat</small></a>
              <a href="tel:9558476369">
                <small class="me-3 text-light"><i class="fa fa-phone me-2"></i>+91 9558476369</small></a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target='_self'> <small class="text-light"><i class="fa fa-envelope-open me-2"></i>avataratechnobiz@gmail.com</small></a>
            </div>
          </div>
          <div class="col-lg-4 text-center text-lg-end">
            <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i class="fab fa-twitter fw-normal"></i></a>
              <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i class="fab fa-facebook-f fw-normal"></i></a>
              <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all"><i class="fab fa-linkedin-in fw-normal"></i></a>
              <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/avataratechnobiz/"><i class="fab fa-instagram fw-normal"></i></a>
              <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="/"><i class="fab fa-youtube fw-normal"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <img src={logo} className='img-fluid' alt="img not found" /> Avatara Technobiz
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">Home</a>
              <a href="/about" className="nav-item nav-link">About</a>
              <a href="/service" className="nav-item nav-link">Services</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                <div className="dropdown-menu m-0">
                  <a href="/blog" className="dropdown-item">Blog Grid</a>
                  <a href="/blogdetails" className="dropdown-item">Blog Detail</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="/price" className="dropdown-item">Pricing Plan</a>
                  <a href="/feature" className="dropdown-item">Our Features</a>
                  <a href="/team" className="dropdown-item">Team Members</a>
                  <a href="/testimonial" className="dropdown-item">Testimonial</a>
                  <a href="/free" className="dropdown-item">Free Quote</a>
                </div>
              </div>
              <a href="/contact" className="nav-item nav-link">Contact</a>
            </div>
            <button
              type="button"
              className="btn ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
              style={{ color: '#06A3DA' }}
            >
              <i className="fa fa-search"></i>
            </button>
            <a
              href="/"
              className="btn py-2 px-4 ms-3"
              style={{ backgroundColor: '#06A3DA' }}
            >

            </a>
          </div>
        </nav>
        <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
          <div class="row py-5">
            <div class="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 class="display-4 text-white animated zoomIn">Service</h1>
              <a href="/" class="h5 text-white">Home</a>
              <i class="far fa-circle text-white px-2"></i>
              <a href="/service" class="h5 text-white">Service</a>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        <div className="modal fade" id="searchModal" tabIndex="-1">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{ background: "rgba(9, 30, 62, .7)" }}>
              <div className="modal-header border-0">
                <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: "600px" }}>
                  <input type="text" className="form-control bg-transparent p-3" style={{ border: '1px solid #06A3DA' }} placeholder="Type search keyword" />
                  <button className="btn px-4" style={{ backgroundColor: '#06A3DA' }}>
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* service first content */}

      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="pb-3 mb-5 section-title position-relative">
                <h5 className=" text-uppercase" style={{ color: '#06A3DA' }}>
                  Request A Quote
                </h5>
                <h1 className="mb-0">
                  Need A Free Quote? Please Feel Free to Contact Us
                </h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4">
                    <i className="fa fa-reply me-3" style={{ color: '#06A3DA' }}></i>Reply within 24 hours
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4">
                    <i className="fa fa-phone  me-3" style={{ color: '#06A3DA' }}></i>24 hrs telephone support
                  </h5>
                </div>
              </div>
              <p className="mb-4">
                Avatara TechnoBiz is a Surat-based Digital Agency passing high quality, cost-productive, reliable result-oriented web and e-commerce clarifications on time for a global clientele.
              </p>
              <div className="mt-2 d-flex align-items-center wow zoomIn pt-3" data-wow-delay="0.6s">
                <a href="tel:9558476369">
                  <div className="rounded d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}>
                    <i className="text-white fa fa-phone"></i>
                  </div>
                </a>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <a href="tel:9558476369">
                    <h5 className="mb-0" style={{ color: '#06A3DA', fontWeight: "normal" }}>+91 9558476369</h5>
                  </a>
                </div>
              </div>
              <div
                className="mt-2 d-flex align-items-center wow zoomIn pt-3"
                data-wow-delay="0.6s"
              >
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px", color: "white", backgroundColor: "#06A3DA" }}
                  >
                    <i className="fa fa-envelope-open"></i>
                  </div>
                </a>
                <div className="ps-4">
                  <h5 className="mb-2" style={{ fontWeight: 'lighter' }}>Contact for Career Queries</h5>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm">
                    <h5 className="mb-0" style={{ color: '#06A3DA', fontSize: "20px" }}>avataratechnobiz@gmail.com</h5>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center ju wow fadeIn pt-2" data-wow-delay="0.8s">
                <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px", backgroundColor: "#06A3DA" }}
                  >
                    <i className="text-white fa fa-map-marker-alt"></i>
                  </div>
                </a>
                <div className="ps-3 pt-3">
                  <h5 className="mb-2">Visit our office</h5>
                  <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                    <h6 className="mb-0" style={{ color: '#06A3DA', fontWeight: "initial", fontSize: '18px' }}>
                      Office No. 14, 5th floor <br />
                      Madhuram Arcade-2, Near Madhuram <br />
                      Circle Dindoli, Surat, 394210
                    </h6>
                  </a>
                </div>
              </div>

            </div>
            <div className="col-lg-5 m-0">

              <Home_Form />

            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}

      <TestimonialSlider />

      {/* swiper reviews */}

      <Slider />


      {/* Footer */}
      <div>
        {/* Footer Start */}
        <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-4 col-md-6 footer-about">
                <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4" style={{ backgroundColor: '#06A3DA' }}>
                  <a href="/" class="navbar-brand">
                    <h1 class="m-0 text-white"><img src={logo} className='img-fluid' alt="" /></h1>
                  </a>
                  <p class="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                      <button class="btn btn-dark">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-8 col-md-6">
                <div class="row gx-5">
                  <div class="col-lg-4 col-md-12 pt-5 mb-5">
                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 class="text-light mb-0">Get In Touch</h3>
                    </div>
                    <a className='text-white' href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                      <div class="d-flex mb-2">
                        <i class="bi bi-geo-alt me-2" style={{ color: '#06A3DA' }}></i>
                        <p class="mb-0">5th Floor Madhuram Arcade 2 , Dindoli , Surat</p>
                      </div>
                    </a>
                    <a className='text-white' href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target='_self'>  <div class="d-flex mb-2">
                      <i class="bi bi-envelope-open me-2" style={{ color: '#06A3DA' }}></i>
                      <p class="mb-0">avataratechnobiz@gmail.com</p>
                    </div></a>
                    <a className='text-white' href="tel:9558476369">
                      <div class="d-flex mb-2">

                        <i class="bi bi-telephone me-2" style={{ color: '#06A3DA' }}></i>
                        <p class="mb-0">+91 9558476369</p>

                      </div>   </a>
                    <div class="d-flex mt-4">
                      <a class="btn btn-square me-2" href="#" style={{ backgroundColor: '#06A3DA' }}><i class="fab fa-twitter fw-normal"></i></a>
                      <a class="btn btn-square me-2" href="#" style={{ backgroundColor: '#06A3DA' }}><i class="fab fa-facebook-f fw-normal"></i></a>
                      <a class="btn btn-square me-2" href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" style={{ backgroundColor: '#06A3DA' }}><i class="fab fa-linkedin-in fw-normal"></i></a>
                      <a class="btn btn-square" href="https://www.instagram.com/avataratechnobiz/" style={{ backgroundColor: '#06A3DA' }}><i class="fab fa-instagram fw-normal"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 class="text-light mb-0">Quick Links</h3>
                    </div>
                    <div class="link-animated d-flex flex-column justify-content-start">
                      <a class="text-light mb-2" href="/"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Home</a>
                      <a class="text-light mb-2" href="/about"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>About Us</a>
                      <a class="text-light mb-2" href="/service"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Our Services</a>
                      <a class="text-light mb-2" href="/team"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Meet The Team</a>
                      <a class="text-light mb-2" href="/blog"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Latest Blog</a>
                      <a class="text-light" href="/contact"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Contact Us</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 class="text-light mb-0">Popular Links</h3>
                    </div>
                    <div class="link-animated d-flex flex-column justify-content-start">
                      <a class="text-light mb-2" href="/"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Home</a>
                      <a class="text-light mb-2" href="/about"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>About Us</a>
                      <a class="text-light mb-2" href="/service"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Our Services</a>
                      <a class="text-light mb-2" href="/team"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Meet The Team</a>
                      <a class="text-light mb-2" href="/blog"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Latest Blog</a>
                      <a class="text-light" href="/contact"><i class="bi bi-arrow-right me-2" style={{ color: '#06A3DA' }}></i>Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid text-white" style={{ backgroundColor: '#061429' }}>
          <div class="container text-center">
            <div class="row justify-content-end">
              <div class="col-lg-8 col-md-6">
                <div class="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                  <p class="mb-0">&copy; <a class="text-white border-bottom" href="/">avataratechnobizllp.com</a>. All Rights Reserved.


                    Designed by <a class="text-white border-bottom" href="/">Avatara Technobiz Llp</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Service