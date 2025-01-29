
import React from 'react';
import './style.css';
import Home_Form from './Home_Pages/Home_Form';
import Slider from './Home_Pages/Swiper';
import Testimonial from './Home_Pages/Testimonial';
import logo from '../assets/favicon.ico';

const Home = () => {
  return (
    <>
     <div class="container-fluid px-5 d-none d-lg-block" style={{backgroundColor:'#091E3E'}}>
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style={{height:'45px'}}>
               <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">  <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>5th Floor Madhuram Arcade 2 , Dindoli , Surat</small></a>
               <a href="tel:9558476369"> 
                 <small class="me-3 text-light"><i class="fa fa-phone me-2"></i>+91 9558476369</small></a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target='_self'> <small class="text-light"><i class="fa fa-envelope-open me-2"></i>avataratechnobiz@gmail.com</small></a>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style={{height:'45px'}}>
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
            style={{color:'#06A3DA'}}
          >
            <i className="fa fa-search"></i>
          </button>
          <a
            href="/"
            className="btn py-2 px-4 ms-3"
            style={{backgroundColor:'#06A3DA'}}
          >
           
          </a>
        </div>
      </nav>

      {/* Carousel */}
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="src/assets/carousel-1.jpg" alt="Slide 1" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                <a href="quote.html" className="btn  py-md-3 px-md-5 me-3 animated slideInLeft" style={{backgroundColor:'#06A3DA'}}>Free Quote</a>
                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="src/assets/carousel-2.jpg" alt="Slide 2" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                <a href="quote.html" className="btn py-md-3 px-md-5 me-3 animated slideInLeft" style={{backgroundColor:'#06A3DA'}}>Free Quote</a>
                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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
                <input type="text" className="form-control bg-transparent p-3" style={{border:'1px solid #06A3DA'}} placeholder="Type search keyword" />
                <button className="btn px-4" style={{backgroundColor:'#06A3DA'}}>
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
      {/* Facts Start */}
      <div className="py-5 container-fluid facts pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div
                className="p-4 shadow d-flex align-items-center justify-content-center"
                style={{ height: '150px', backgroundColor: '#06A3DA' }}
              >
                <div
                  className="mb-2 bg-white rounded d-flex align-items-center justify-content-center"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fa fa-users" style={{ color: "#06A3DA" }}></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-0 text-white">Happy Clients</h5>
                  <h1 className="mb-0 text-white" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn " data-wow-delay="0.3s">
              <div
                className="p-4 shadow bg-light d-flex align-items-center justify-content-center"
                style={{ height: '150px' }}
              >
                <div
                  className="mb-2 rounded d-flex align-items-center justify-content-center"
                  style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}
                >
                  <i className="text-white fa fa-check"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-0" style={{ color: "#06A3DA" }}>Projects Done</h5>
                  <h1 className="mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="p-4 shadow d-flex align-items-center justify-content-center"
                style={{ height: '150px', backgroundColor: '#06A3DA' }}
              >
                <div
                  className="mb-2 bg-white rounded d-flex align-items-center justify-content-center"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fa fa-award" style={{ color: "#06A3DA" }}></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-0 text-white">Win Awards</h5>
                  <h1 className="mb-0 text-white" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* About Start */}
      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="pb-3 mb-3 section-title position-relative">
                <h5 className="fw-bold text-uppercase" style={{ color: "#06A3DA" }}>About Us</h5>
                <h1 className="mb-0">
                  Your Trusted Partner for Cutting-Edge IT Solutions
                </h1>
              </div>
              <p className="mb-4">
                We started in 2024 with a vision to positively impact businesses. We take pride in delivering innovative solutions and services with a team of 80+ professionals to help our clients achieve their goals. We work with a range of industries, including Education, Healthcare, Finance, Legal, E-commerce, Social Networking, Automobile, and Fitness. Our solutions are tailored to our clients' specific needs, and we are committed to quality, reliability, and innovation.
              </p>
              <div className="mb-3 row g-0">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{ color: "#06A3DA" }}></i>Programming Experts
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{ color: "#06A3DA" }}></i>Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{ color: "#06A3DA" }}></i>24/7 Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{ color: "#06A3DA" }}></i>Timely Delivery
                  </h5>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                <a href="tel:9558476369">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}
                  >
                    <i className="text-white fa fa-phone"></i>
                  </div>
                </a>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <a href="tel:9558476369">
                    <h4 className="mb-0" style={{ color: "#06A3DA", textDecoration: 'none' }}>+91 9558476369</h4>
                  </a>
                </div>
              </div>
              <a
                href="/service"
                className="px-5 py-3 mt-3 btn wow zoomIn text-white"
                data-wow-delay="0.9s"
                style={{ backgroundColor: '#06A3DA' }}
              >
                Request A Quote
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img
                  className="rounded position-absolute w-100 h-100 wow zoomIn"
                  data-wow-delay="0.9s"
                  src="https://adso.com/static/in/img/about.jpg"
                  style={{ objectFit: 'cover' }}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Features Start */}
      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="pb-3 mx-auto mb-5 text-center section-title position-relative"
            style={{ maxWidth: '600px' }}
          >
            <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Why Choose Us</h5>
            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div
                    className="mb-3 rounded d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}
                  >
                    <i className="text-white fa fa-cubes"></i>
                  </div>
                  <h4>Quality Design</h4>
                  <p className="mb-0">
                    Our designs blend creativity with functionality, ensuring a seamless user experience while enhancing your brand’s visual appeal and market presence.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    className="mb-3 rounded d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}
                  >
                    <i className="text-white fa fa-award"></i>
                  </div>
                  <h4>Timely Delivery</h4>
                  <p className="mb-0">
                    We understand the importance of deadlines and pride ourselves on delivering your projects on time, every time, without compromising quality and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
              <div className="position-relative h-100">
                <img
                  className="rounded position-absolute w-100 h-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
                  style={{ objectFit: 'cover' }}
                  alt="Features"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div
                    className="mb-3 rounded d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}
                  >
                    <i className="text-white fa fa-users-cog"></i>
                  </div>
                  <h4>Programming Experts</h4>
                  <p className="mb-0">
                    Our skilled developers deliver tailored solutions using the latest technologies and best practices, ensuring your business goals are met effectively.
                  </p>
                </div>
                <div className="m-2 col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    className="mb-3 rounded d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', backgroundColor: '#06A3DA' }}
                  >
                    <i className="text-white fa fa-phone-alt"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    Our dedicated support team is available round-the-clock to assist you with any technical issues or queries, ensuring continuous assistance whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      
      {/* <!-- Service Start --> */}
      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="pb-3 mx-auto mb-5 text-center section-title position-relative" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Our Services</h5>
            <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="text-center rounded service-item bg-light d-flex flex-column align-items-center justify-content-center">
                <div className="service-icon">
                  <i className="text-white fa fa-shield-alt"></i>
                </div>
                <h4 className="mb-3">AI Development</h4>
                <p className="m-0">
                  We provide advanced AI solutions, including machine learning, natural language processing, and predictive analytics. Our AI services are designed to enhance your business efficiency and drive innovation.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{color:'black'}}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item bg-light d-flex flex-column align-items-center justify-content-center">
                <div className="service-icon">
                  <i className="text-white fa fa-chart-pie"></i>
                </div>
                <h4 className="mb-3">Cloud Services</h4>
                <p className="m-0">
                  Our cloud solutions enable businesses to scale seamlessly with secure, reliable, and cost-effective cloud infrastructure. From migration to management, we deliver end-to-end cloud services.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="text-center rounded service-item bg-light d-flex flex-column align-items-center justify-content-center">
                <div className="service-icon">
                  <i className="text-white fa fa-code"></i>
                </div>
                <h4 className="mb-3">Web Development</h4>
                <p className="m-0">
                  We design and develop responsive, secure, and visually appealing websites tailored to your business needs. Our web solutions ensure optimal performance and an exceptional user experience.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="text-center rounded service-item bg-light d-flex flex-column align-items-center justify-content-center">
                <div className="service-icon">
                  <i className="text-white fab fa-android"></i>
                </div>
                <h4 className="mb-3">Apps Development</h4>
                <p className="m-0">
                  We create custom mobile applications for iOS and Android platforms. Our apps are user-centric, feature-rich, and designed to elevate your business operations.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item bg-light d-flex flex-column align-items-center justify-content-center">
                <div className="service-icon">
                  <i className="text-white fa fa-search"></i>
                </div>
                <h4 className="mb-3">SEO Optimization</h4>
                <p className="m-0">
                  Boost your online presence with our expert SEO services. We help improve search engine rankings, drive organic traffic, and enhance your brand visibility.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="p-5 text-center rounded position-relative h-100 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#06A3DA' }}>
                <h3 className="mb-3 text-white">Call Us For Quote</h3>
                <p className="mb-3 text-white">
                  Get in touch with us today for a personalized quote tailored to your project needs. Let’s bring your ideas to life!
                </p>
                <a href="tel:9558476369">
                  <h2 className="mb-0 text-white">+91 9558476369</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {/* <!-- Service End --> */}
{/* 
      Pricing plans */}

       <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-uppercase" style={{color:'#06A3DA'}}> Pricing Plans</h5>
                    <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
                </div>
                <div className="row g-0">
                    {/** Basic Plan */}
                    <div className="col-lg-4 wow slideInUp" style={{backgroundColor:'#EEF9FF'}}  data-wow-delay="0.6s">
                        <div className="bg-light rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="mb-1" style={{color:'#06A3DA'}}>Basic Plan</h4>
                                <small className="text-uppercase" style={{color:'#6B6A75'}}>For Small Size Business</small>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px',color:'#091E3E' }}>$</small>49.00
                                    <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
                                </h1>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>HTML5 & CSS3</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>Bootstrap v5</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>Responsive Layout</span><i className="fa fa-times text-danger pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span style={{color:'#6B6C87'}}>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                                <a href="#" className="btn py-2 px-4 mt-4 text-white" style={{backgroundColor:'#06A3DA'}}>Order Now</a>
                            </div>
                        </div>
                    </div>
                    {/** Standard Plan */}
                    <div className="col-lg-4 wow slideInUp"   data-wow-delay="0.3s">
                        <div className="bg-white rounded shadow position-relative" style={{ zIndex: 1 }}>
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="mb-1" style={{color:'#06A3DA'}}>Standard Plan</h4>
                                <small className="text-uppercase" style={{color:'#6B6A75'}}>For Medium Size Business</small>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px',color:'#091E3E' }}>$</small>99.00
                                    <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
                                </h1>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>HTML5 & CSS3</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>Bootstrap v5</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>Responsive Layout</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span style={{color:'#6B6C87'}}>Cross-browser Support</span><i style={{color:'#06A3DA'}}i className="fa fa-time pt-1"></i></div>
                                <a href="#" className="btn py-2 px-4 mt-4 text-white" style={{backgroundColor:'#06A3DA'}}>Order Now</a>
                            </div>
                        </div>
                    </div>
                    {/** Advanced Plan */}
                    <div className="col-lg-4 wow slideInUp" style={{backgroundColor:'#EEF9FF'}} data-wow-delay="0.9s">
                        <div className="rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="mb-1" style={{color:'#06A3DA'}}>Advanced Plan</h4>
                                <small className="text-uppercase" style={{color:'#6B6A75'}}>For Large Size Business</small>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px',color:'#091E3E' }}>$</small>149.00
                                    <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
                                </h1>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>HTML5 & CSS3</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>Bootstrap v5</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span style={{color:'#6B6C87'}}>Responsive Layout</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span style={{color:'#6B6C87'}}>Cross-browser Support</span><i style={{color:'#06A3DA'}} className="fa fa-check pt-1"></i></div>
                                <a href="#" className="btn py-2 px-4 mt-4 text-white" style={{backgroundColor:'#06A3DA'}}>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     
  


        <Testimonial  jsx="true"/>
     
      

  {/* team member */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth:'600px'}}>
                <h5 className="fw-bold text-uppercase" style={{color:'#06A3DA'}}>Team Members</h5>
                <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden" style={{backgroundColor:'#EEF9FF'}}>
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="http://127.0.0.1:5500/startup-website-template/img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg  btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg  btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg  btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg  btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 style={{color:'#06A3DA'}}>Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item rounded overflow-hidden" style={{backgroundColor:'#EEF9FF'}}>
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="http://127.0.0.1:5500/startup-website-template/img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 style={{color:'#06A3DA'}}>Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s" >
                    <div className="team-item rounded overflow-hidden" style={{backgroundColor:'#EEF9FF'}}>
                        <div className="team-img position-relative overflow-hidden" style={{backgroundColor:'#EEF9FF'}}>
                            <img className="img-fluid w-100" src="http://127.0.0.1:5500/startup-website-template/img/team-3.jpg" alt=""/>
                            <div className="team-social" >
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-lg-square rounded" href="" style={{backgroundColor:'#06A3DA'}}><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 style={{color:'#06A3DA'}}>Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Blog Section */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth:'600px'}}>
                <h5 class="fw-bold text-uppercase" style={{color:'#06A3DA'}}>Latest Blog</h5>
                <h1 class="mb-0">Read The Latest Articles from Our Blog Post</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" alt=""/>
                            <a class="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}}  href="">Web Design</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user  me-2" style={{color:'#06A3DA'}}></i>John Doe</small>
                                <small><i class="far fa-calendar-alt  me-2" style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" alt=""/>
                            <a class="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}}  href="">Web Design</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user  me-2" style={{color:'#06A3DA'}}></i>John Doe</small>
                                <small><i class="far fa-calendar-alt  me-2" style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" alt=""/>
                            <a class="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}}  href="">Web Design</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user  me-2" style={{color:'#06A3DA'}}></i>John Doe</small>
                                <small><i class="far fa-calendar-alt  me-2" style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* slider section */}

      <Slider  />

      <div>
      {/* Footer Start */}
        <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4 col-md-6 footer-about">
                    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4" style={{backgroundColor:'#06A3DA'}}>
                        <a href="/" class="navbar-brand">
                            <h1 class="m-0 text-white"><img src={logo} className='img-fluid' alt="" /></h1>
                        </a>
                        <p class="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
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
                            <a  className='text-white' href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                            <div class="d-flex mb-2">
                                <i class="bi bi-geo-alt me-2" style={{color:'#06A3DA'}}></i>
                                <p class="mb-0">5th Floor Madhuram Arcade 2 , Dindoli , Surat</p>
                            </div>
                            </a>
                            <a  className='text-white' href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target='_self'>  <div class="d-flex mb-2">
                               <i class="bi bi-envelope-open me-2" style={{color:'#06A3DA'}}></i>
                                <p class="mb-0">avataratechnobiz@gmail.com</p>
                            </div></a>
                            <a className='text-white'  href="tel:9558476369">
                            <div class="d-flex mb-2">

                                <i class="bi bi-telephone me-2" style={{color:'#06A3DA'}}></i>
                                <p class="mb-0">+91 9558476369</p>
                             
                            </div>   </a>
                            <div class="d-flex mt-4">
                                <a class="btn btn-square me-2" href="#" style={{backgroundColor:'#06A3DA'}}><i class="fab fa-twitter fw-normal"></i></a>
                                <a class="btn btn-square me-2" href="#" style={{backgroundColor:'#06A3DA'}}><i class="fab fa-facebook-f fw-normal"></i></a>
                                <a class="btn btn-square me-2" href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" style={{backgroundColor:'#06A3DA'}}><i class="fab fa-linkedin-in fw-normal"></i></a>
                                <a class="btn btn-square" href="https://www.instagram.com/avataratechnobiz/" style={{backgroundColor:'#06A3DA'}}><i class="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Quick Links</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="/"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Home</a>
                                <a class="text-light mb-2" href="/about"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>About Us</a>
                                <a class="text-light mb-2" href="/service"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Our Services</a>
                                <a class="text-light mb-2" href="/team"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Meet The Team</a>
                                <a class="text-light mb-2" href="/blog"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Latest Blog</a>
                                <a class="text-light" href="/contact"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Popular Links</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="/"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Home</a>
                                <a class="text-light mb-2" href="/about"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>About Us</a>
                                <a class="text-light mb-2" href="/service"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Our Services</a>
                                <a class="text-light mb-2" href="/team"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Meet The Team</a>
                                <a class="text-light mb-2" href="/blog"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Latest Blog</a>
                                <a class="text-light" href="/contact"><i class="bi bi-arrow-right me-2" style={{color:'#06A3DA'}}></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid text-white" style={{backgroundColor:'#061429'}}>
        <div class="container text-center">
            <div class="row justify-content-end">
                <div class="col-lg-8 col-md-6">
                    <div class="d-flex align-items-center justify-content-center" style={{height:'75px'}}>
                        <p class="mb-0">&copy; <a class="text-white border-bottom" href="/">avataratechnobizllp.com</a>. All Rights Reserved.

                         
                            Designed by <a class="text-white border-bottom" href="/">Avatara Technobiz Llp</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
      </div>
     
    </>
  );
};

export default Home;




