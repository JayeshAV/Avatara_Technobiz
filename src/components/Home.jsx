
import React from 'react';
import './style.css';
import Home_Form from './Home_Pages/Home_Form';
import Slider from './Home_Pages/Swiper';
import Testimonial from './Home_Pages/Testimonial';
import logo from '../assets/favicon.ico';

const Home = () => {
  return (
    <>
      <div class="container-fluid px-5 d-none d-lg-block" style={{ backgroundColor: '#091E3E' }}>
        <div class="row gx-0">
          <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">  <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>5th Floor Madhuram Arcade 2 , Dindoli , Surat</small></a>
              <a href="tel:9898442256">
                <small class="me-3 text-light"><i class="fa fa-phone me-2"></i>+91 9898442256</small></a>
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
        <a href="/" className="navbar-brand p-0 d-flex align-items-center">
  <img src={logo} className="img-fluid me-2" alt="img not found" style={{ height: "40px" }} />
  <h1 className="mb-0" style={{fontSize:'30px'}}>Avatara Technolobiz</h1>
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

        {/* Carousel */}
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="https://www.michaelpage.co.in/sites/michaelpage.com.sg/files/inline-images/How%20to%20write%20employee%20testimonials%202_0.jpg" alt="Slide 1" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <a href="quote.html" className="btn  py-md-3 px-md-5 me-3 animated slideInLeft text-white" style={{ backgroundColor: '#06A3DA' }}>Free Quote</a>
                  <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="https://cdn.prod.website-files.com/5be9cc9f121027672f31b467/60f87a0380c1dc95e38be165_43.2.%20Investor%20Evaluating%20Startup%20Ideas.jpg" alt="Slide 2" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <a href="quote.html" className="btn py-md-3 px-md-5 me-3 animated slideInLeft text-white" style={{ backgroundColor: '#06A3DA' }}>Free Quote</a>
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

      {/* Features Start */}
      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="pb-3 mx-auto mb-5 text-center section-title position-relative"
            style={{ maxWidth: '600px' }}
          >
            <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Why Choose Us</h5>
            <h1 className="mb-0" style={{ fontFamily: "Nunito" }}>We Are Here to Grow Your Business Exponentially</h1>
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


      {/*  Service Start */}
      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="pb-3 mx-auto mb-5 text-center section-title position-relative" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Our Services</h5>
            <h1 className="mb-0" style={{ fontFamily: "Nunito" }}>Our IT Services for Digital Transformation</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i class="fa-brands fa-airbnb" style={{ color: 'white', fontSize: '18px' }}></i>

                </div>
                <h4 className="mb-3">AI & ML Development</h4>
                <p className="m-0">
                  Transform your business with intelligent AI & ML solutions that automate, predict, and innovate. From smart automation to deep data insights, we empower you to stay ahead in a rapidly evolving digital world.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i className="text-white fab fa-android"></i>
                </div>
                <h4 className="mb-3">Mobile App Development</h4>
                <p className="m-0">
                  Build powerful, seamless, and user-centric mobile apps that redefine experiences. From intuitive design to robust performance, we craft cutting-edge solutions that drive engagement and innovation.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" style={{ backgroundColor: '#EEF9FF' }} data-wow-delay="0.9s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i className="text-white fa fa-code"></i>
                </div>
                <h4 className="mb-3">Web Development</h4>
                <p className="m-0">
                  Craft stunning, high-performance websites that captivate, convert, and elevate your brand. With cutting-edge technology and seamless user experiences, we turn ideas into digital excellence
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i class="fa-solid fa-cloud" style={{ color: 'white' }}></i>
                </div>
                <h4 className="mb-3">Cloud Services</h4>
                <p className="m-0">
                  We Unlock limitless possibilities with scalable, secure, and high-performance cloud solutions. From seamless migration to intelligent automation, we empower your business with agility, efficiency, and innovation in the digital era
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i class="fa-solid fa-desktop" style={{ color: "white" }}></i>
                </div>
                <h4 className="mb-3">Desktop Application</h4>
                <p className="m-0">
                  Power up your business with high-performance, secure, and scalable desktop applications. Whether for Windows, macOS, or cross-platform solutions, we craft intelligent software tailored to your needs—delivering speed, efficiency, and seamless user experiences.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }} ></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i class="fa-solid fa-cart-shopping" style={{ color: 'white' }}></i>
                </div>
                <h4 className="mb-3">Ecommerce Development</h4>
                <p className="m-0">
                  Transform your business with a dynamic, high-converting ecommerce platform. From stunning UI/UX to seamless checkout experiences, we build scalable, secure, and revenue-driven online stores that captivate and convert
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }} ></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i class="fa-solid fa-bullhorn" style={{ color: 'white' }}></i>
                </div>
                <h4 className="mb-3">Digital Marketing</h4>
                <p className="m-0">
                  Amplify your brand with data-driven digital marketing strategies that attract, engage, and convert. From SEO and social media to paid campaigns, we create impactful, results-oriented solutions that drive growth and visibility.
                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }} ></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="text-center rounded service-item d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#EEF9FF' }}>
                <div className="service-icon">
                  <i class="fa-solid fa-paintbrush" style={{ color: 'white' }}></i>

                </div>
                <h4 className="mb-3">UI/UX Design</h4>
                <p className="m-0">
                  Craft immersive digital experiences with stunning, user-centric UI/UX design. We blend creativity with functionality to deliver intuitive, visually captivating, and seamless interfaces that engage and delight users.

                </p>
                <a className="rounded btn btn-lg" style={{ backgroundColor: '#06A3DA' }} href="/service">
                  <i className="bi bi-arrow-right" style={{ color: 'white' }} ></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" style={{ backgroundColor: '#EEF9FF' }} data-wow-delay="0.9s">
              <div className="p-5 text-center rounded position-relative h-100 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#06A3DA' }}>
                <h3 className="mb-3 text-white">Call Us For Quote</h3>
                <p className="mb-3 text-white">
                  Get in touch with us today for a personalized quote tailored to your project needs. Let’s bring your ideas to life!
                </p>
                <a href="tel:9898442256">
                  <h2 className="mb-0 text-white">+91 9898442256</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Structure */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}> Work Structure</h5>
            <h1 className="mb-0" style={{ fontFamily: "Nunito" }}>Our Development Process</h1>
          </div>
          <div class="container py-5">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="service-card d-flex justify-content-around align-items-yop ">
                  <div class="service-icon me-3"><i class="fa-solid fa-shield-halved"></i></div>
                  <div>
                    <h4>Requirements Gathering</h4>
                    <p className="para">We follow the first and foremost priority of gathering requirements, resources information to begin our project.</p>
                    <a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-card d-flex align-items-top">
                  <div class="service-icon me-3"><i class="fa-solid fa-chart-line"></i></div>
                  <div>
                    <h4>UI/UX Design</h4>
                    <p className='para'>We create catchy and charming designs with the latest tools of designing and make it to a best user-friendly experience</p>
                    <a href="#" >READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-card d-flex align-items-top">
                  <div class="service-icon me-3"><i class="fa-solid fa-code"></i></div>
                  <div>
                    <h4>Prototype</h4>
                    <p className='para'>After designing, you will get your prototype, which will be sent ahead for the development process for the product.</p>
                    <a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-card d-flex align-items-top">
                  <div class="service-icon me-3"><i className="fab fa-android"></i></div>
                  <div>
                    <h4>Development</h4>
                    <p className='para'>Development of Mobile app/web/blockchain started using latest tools and technologies with transparency.</p>
                    <a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-card d-flex align-items-top">
                  <div class="service-icon me-3"><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div className=''>
                    <h4>Quality Assurance</h4>
                    <p className='para'>Avatara Technobiz values quality and provides 100% bug free application with no compromisation in it.</p>
                    <a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-card d-flex align-items-top">
                  <div class="service-icon me-3"><i class="fa-solid fa-pen"></i></div>
                  <div>
                    <h4>Deployment</h4>
                    <p className='para'>After trial and following all processes, your app is ready to launch on the App store or Play Store.</p>
                    <a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="service-card d-flex align-items-top">
                  <div class="service-icon me-3"><i class="fa-solid fa-pen"></i></div>
                  <div>
                    <h4>Support & Maintenance</h4>
                    <p className='para'>Our company offers you all support and the team is always ready to answer every query after deployment.</p>
                    <a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* industries we serve */}

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Industries We Serve</h5>
              <h1 className="mb-0" style={{ fontFamily: "Nunito" }}>Read The Latest Articles from Our Blog Post</h1>
            </div>
          </div>

          <div className="row justify-content-evenly m-0 p-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-12 col-md-4" style={{ height: '100px', width: '33%' }}>
              <h1 className="h3">Industries We Serve</h1>
              <p>Delivering Specialized IT Solutions across diverse industry verticals to meet unique business needs.</p>
            </div>

            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-user-doctor p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Healthcare</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fas fa-shield-alt p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Insurance</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-building-columns p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Banking & Finance</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i className="fa-solid fa-user-graduate p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Education</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-truck-plane p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Logistic & Supply</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-car p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Automotive</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-cart-shopping p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Retails & Lifestyle </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-wheat-awn p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Agriculture</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-hospital p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Travels & Hospital</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-headphones p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Entertainment</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-pizza-slice p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Food & Restaurant</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-users p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Socail Networking</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-bolt p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Energy</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-business-time p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Business</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-hexagon-nodes-bolt p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">AI & AR</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-2 mb-3">
              <div className="d-flex justify-content-center align-items-center flex-column bg-light" style={{ border: '1px solid gray', borderRadius: '20px' }}>
                <div className="icon mb-3">
                  <i class="fa-solid fa-medal p-2 mt-4" style={{ fontSize: '35px', color: '#06A3DA' }}></i>
                </div>
                <div className="text">
                  <h4 className="h5">Sports</h4>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

      {/* details technology */}
      <div className="container-fluid py-3 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-3">
          {/* Section Title */}
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Latest Blog</h5>
            <h1 className="mb-0" style={{ fontFamily: "Nunito" }}>Technologies & Platforms We Work With</h1>
          </div>

          {/* Tabs Navigation - Centered */}
          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-frontend" type="button" role="tab" aria-controls="pills-frontend" aria-selected="true"><h5 style={{ fontFamily: "Nunito",margin:'0px'  }}>Front End</h5></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-backend-tab" data-bs-toggle="pill" data-bs-target="#pills-backend" type="button" role="tab" aria-controls="pills-backend" aria-selected="false"> <h5 style={{ fontFamily: "Nunito",margin:'0px'  }}>Back End</h5></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-database-tab" data-bs-toggle="pill" data-bs-target="#pills-database" type="button" role="tab" aria-controls="pills-database" aria-selected="false" ><h5 style={{ fontFamily: "Nunito" ,margin:'0px' }}>Database</h5></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-testing-tab" data-bs-toggle="pill" data-bs-target="#pills-testing" type="button" role="tab" aria-controls="pills-testing" aria-selected="false"><h5 style={{ fontFamily: "Nunito",margin:'0px'  }}>Unit Testing</h5></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-deployment-tab" data-bs-toggle="pill" data-bs-target="#pills-deployment" type="button" role="tab" aria-controls="pills-deployment" aria-selected="false"> <h5 style={{ fontFamily: "Nunito",margin:'0px'  }}>DeploymentUnit</h5></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-management-tab" data-bs-toggle="pill" data-bs-target="#pills-management" type="button" role="tab" aria-controls="pills-management" aria-selected="false"><h5 style={{ fontFamily: "Nunito" ,margin:'0px' }}>Project Management</h5></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-cms-tab" data-bs-toggle="pill" data-bs-target="#pills-cms" type="button" role="tab" aria-controls="pills-cms" aria-selected="false"><h5 style={{ fontFamily: "Nunito",margin:'0px' }}>CMS</h5></button>
            </li>
          </ul>

          {/* Tabs Content - Centered */}
          <div className="tab-content text-center" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-frontend" role="tabpanel" aria-labelledby="pills-frontend-tab">
              <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" height={70} width={70} alt="" />
                    <p>React</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" height={80} width={80} alt="" />
                    <p>Angular</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://durapid.com/wp-content/uploads/2024/09/3640297.webp" height={70} width={70} alt="" />
                    <p>Vue</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://files.svgcdn.io/skill-icons/nextjs-light.png" height={70} width={70} alt="" />
                    <p>Next.js</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" height={70} width={70} alt="" />
                    <p>Nuxt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-backend" role="tabpanel" aria-labelledby="pills-backend-tab">

              <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp" height={75} width={90} alt="" />
                    <p>Node</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" height={75} width={80} alt="" />
                    <p>Java</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://ennovationstechserv.com/wp-content/uploads/2021/02/dotnet-logo.png" className='mt-1' height={70} width={70} alt="" />
                    <p>Dotnet</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXbDN6MjKqhEQLKobn2Ffg4goxiTe6xptfw&s" className='mt-1' height={70} width={70} alt="" />
                    <p>PHP</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" className='mt-3' height={60} width={70} alt="" />
                    <p>Larvel</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://avatars.githubusercontent.com/u/44521256?v=4" className='mt-1' height={70} width={70} alt="" />
                    <p>Ruby On Rails</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://ih1.redbubble.net/image.1320015776.6889/raf,360x360,075,t,fafafa:ca443f4786.jpg" className='mt-1' height={80} width={80} alt="" />
                    <p>Nest</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade" id="pills-database" role="tabpanel" aria-labelledby="pills-database-tab">
            <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://pngimg.com/uploads/mysql/small/mysql_PNG23.png" height={70} width={70} alt="" />
                    <p>MySQL</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png" height={75} width={80} alt="" />
                    <p>MsSql</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" className='mt-1' height={70} width={70} alt="" />
                    <p>MongoDB</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_iKKB79evbAIrE0mT1PT6U-fk2MjeU3fJQ&s" className='mt-1' height={70} width={70} alt="" />
                    <p>SQLite</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png" className='mt-2' height={70} width={70} alt="" />
                    <p>PostgreSql</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://brandeps.com/logo-download/F/Firebase-logo-02.png" className='mt-1' height={70} width={70} alt="" />
                    <p>Firebase</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://static-00.iconduck.com/assets.00/realm-icon-2048x2048-1fcbuxa4.png" className='mt-1' height={55} width={60} alt="" />
                    <p>Realm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-testing" role="tabpanel" aria-labelledby="pills-testing-tab">
            <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/0*yI5S677kFHjyXpe5.png" height={70} width={70} alt="" />
                    <p>MySQL</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1200px-Logo_jasmine.svg.png" height={75} width={70} alt="" />
                    <p>Jasemine</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/square_480/jestlogo.png" className='mt-1' height={70} width={70} alt="" />
                    <p>Jest</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mocha_logo.svg/512px-Mocha_logo.svg.png?20221003142609" className='mt-1' height={70} width={70} alt="" />
                    <p>Mocha</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://cms-assets.tutsplus.com/uploads/users/41/posts/23861/preview_image/preview_image@2x.jpg" className='mt-2' height={70} width={100} alt="" />
                    <p>Appium</p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-deployment" role="tabpanel" aria-labelledby="pills-deployment-tab">
            <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj" height={70} width={70} alt="" />
                    <p>AWS</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://cdn.worldvectorlogo.com/logos/azure-1.svg" height={70} width={70} alt="" />
                    <p>Azure</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaC6TeU0POcZd10ex4KHg21Q8jKP2FIDJpsNuAlp8Nx1qOY3L-1qF5xFtKwIRM_TehtSw&usqp=CAU" className='mt-1' height={70} width={70} alt="" />
                    <p>GCP</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://www.cdnlogo.com/logos/d/81/digitalocean-icon.svg" className='mt-2' height={65} width={70} alt="" />
                    <p>Digital Ocean</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png" className='mt-2' height={65} width={100} alt="" />
                    <p>Docker</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://www.svgrepo.com/show/327408/logo-vercel.svg" className='mt-1' height={70} width={70} alt="" />
                    <p>Vercel</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://www.veryicon.com/download/png/business/vscode-program-item-icon/netlify-1?s=256" className='mt-1' height={55} width={60} alt="" />
                    <p>Netlify</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-management" role="tabpanel" aria-labelledby="pills-management-tab">
               <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" className='mt-1' height={60} width={60} alt="" />
                    <p>Microsoft Teams</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://www.cdnlogo.com/logos/j/41/jira.svg" height={70} width={70} alt="" />
                    <p>Zira</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://companieslogo.com/img/orig/ASAN-1325de11.png?t=1720244490" className='mt-1' height={70} width={70} alt="" />
                    <p>Asana</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png" className='mt-2' height={65} width={70} alt="" />
                    <p>Slack</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Xe5b7aH9zof_6-PHMwFU7_ucsuVAJaoE3A&s" className='mt-2' height={65} width={70} alt="" />
                    <p>ClickUp</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ejgJSExilDdqpunKwefxuAA8vV5JGkYGaqQO-cdcU7g4JxPJ1u03P4zfqb_pn_qQ1rU&usqp=CAU" className='mt-1' height={70} width={70} alt="" />
                    <p>Trello</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://timebuzzer.com/wp-content/uploads/512px_monday_logo.png" className='mt-1' height={55} width={60} alt="" />
                    <p>MondayDotcom</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://download.logo.wine/logo/Pivotal_Software/Pivotal_Software-Logo.wine.png" className='mt-1' height={70} width={90} alt="" />
                    <p>Pivotal</p>
                  </div>
                </div>
              </div></div>
            <div className="tab-pane fade" id="pills-cms" role="tabpanel" aria-labelledby="pills-cms-tab">
            <div className="container" style={{ width: '60%' }}>
                <div className="row g-4 justify-content-center">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s" height={70} width={70} alt="" />
                    <p>Wordpress</p>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
                    <img src="https://images.seeklogo.com/logo-png/51/2/codeigniter-logo-png_seeklogo-516101.png" height={70} width={70} alt="" />
                    <p>Codeigniter</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Testimonial jsx="true" />

      {/* team member */}
      {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth:'600px'}}>
                <h5 className="fw-bold text-uppercase" style={{color:'#06A3DA'}}>Team Members</h5>
                <h1 className="mb-0" style={{fontFamily:"Nunito"}}>Professional Stuffs Ready to Help Your Business</h1>
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
    </div> */}

      {/* Blog Section */}
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 class="fw-bold text-uppercase" style={{ color: '#06A3DA' }}>Latest Blog</h5>
            <h1 class="mb-0" style={{ fontFamily: "Nunito" }}>Read The Latest Articles from Our Blog Post</h1>
          </div>
          <div class="row g-5">
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="blog-item bg-light rounded overflow-hidden">
                <div class="blog-img position-relative overflow-hidden">
                  <img class="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" alt="" />
                  <a class="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" style={{ backgroundColor: '#06A3DA' }} href="">Web Design</a>
                </div>
                <div class="p-4">
                  <div class="d-flex mb-3">
                    <small class="me-3"><i class="far fa-user  me-2" style={{ color: '#06A3DA' }}></i>John Doe</small>
                    <small><i class="far fa-calendar-alt  me-2" style={{ color: '#06A3DA' }}></i>01 Jan, 2045</small>
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
                  <img class="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" alt="" />
                  <a class="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" style={{ backgroundColor: '#06A3DA' }} href="">Web Design</a>
                </div>
                <div class="p-4">
                  <div class="d-flex mb-3">
                    <small class="me-3"><i class="far fa-user  me-2" style={{ color: '#06A3DA' }}></i>John Doe</small>
                    <small><i class="far fa-calendar-alt  me-2" style={{ color: '#06A3DA' }}></i>01 Jan, 2045</small>
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
                  <img class="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" alt="" />
                  <a class="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" style={{ backgroundColor: '#06A3DA' }} href="">Web Design</a>
                </div>
                <div class="p-4">
                  <div class="d-flex mb-3">
                    <small class="me-3"><i class="far fa-user  me-2" style={{ color: '#06A3DA' }}></i>John Doe</small>
                    <small><i class="far fa-calendar-alt  me-2" style={{ color: '#06A3DA' }}></i>01 Jan, 2045</small>
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

      <Slider />

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
                    <a className='text-white' href="tel:9898442256">
                      <div class="d-flex mb-2">

                        <i class="bi bi-telephone me-2" style={{ color: '#06A3DA' }}></i>
                        <p class="mb-0">+91 9898442256</p>

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
  );
};

export default Home;




