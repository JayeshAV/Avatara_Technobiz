
import React from 'react';
import './style.css';
import Home_Form from './Home_Pages/Home_Form';
import Slider from './Home_Pages/Swiper';
import Testimonial from './Home_Pages/Testimonial';


const Home = () => {
  return (
    <>
     


      <div id="header-carousel" className="mb-5 carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="https://www.michaelpage.co.in/sites/michaelpage.com.sg/files/inline-images/How%20to%20write%20employee%20testimonials%202_0.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h5 className="mb-3 text-white text-uppercase animated slideInDown">
                  Creative & Innovative
                </h5>
                <h1 className="text-white display-1 mb-md-4 animated zoomIn">
                  Creative & Innovative Digital Solution
                </h1>
                <a href="/service" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                  Free Quote
                </a>
                <a href="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="https://media.licdn.com/dms/image/v2/C5612AQFMCF78-Wfjkw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1572341413864?e=2147483647&v=beta&t=IVNcYZMp7aYmnlqmE0w24YbGl1sVfrNhs8O41rIMl_k" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h5 className="mb-3 text-white text-uppercase animated slideInDown">
                  Enhance Digital Presence
                </h5>
                <h1 className="text-white display-1 mb-md-4 animated zoomIn">
                  Expert Solutions & Digital Transformation
                </h1>
                <a href="service.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                  Free Quote
                </a>
                <a href="contact.html" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">
                  Contact Us
                </a>
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
                href="service.html"
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
      {/* <!-- Service End -->

       <!-- Quote Start --> */}
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
                    <h5 className="mb-0" style={{ color: '#06A3DA' , fontWeight:"normal"}}>+91 9558476369</h5>
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
                    style={{ width: "60px", height: "60px", color: "white" , backgroundColor:"#06A3DA"}}
                  >
                    <i className="fa fa-envelope-open"></i>
                  </div>
                </a>
                <div className="ps-4">
                  <h5 className="mb-2" style={{fontWeight:'lighter'}}>Contact for Career Queries</h5>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm">
                    <h5 className="mb-0" style={{color:'#06A3DA',fontSize:"20px"}}>avataratechnobiz@gmail.com</h5>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center ju wow fadeIn pt-2" data-wow-delay="0.8s">
                <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px",backgroundColor:"#06A3DA" }}
                  >
                    <i className="text-white fa fa-map-marker-alt"></i>
                  </div>
                </a>
                <div className="ps-3 pt-3">
                  <h5 className="mb-2">Visit our office</h5>
                  <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                    <h6 className="mb-0" style={{color:'#06A3DA',fontWeight:"initial",fontSize:'18px'}}>
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

      </div>


      <div className='mt-0 mb-5'>
        <Testimonial  jsx="true"/>
      </div>

      <Slider />


      <div>


        {/* Footer Start */}
        <div className="mt-5 container-fluid bg-dark text-light wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6 footer-about">
                <div className="p-4 text-center d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#06A3DA' }}>
                  <a href="index.html" className="navbar-brand">
                    <img src="src/assets/favicon.ico" alt="" />
                  </a>
                  <p>
                    We specialize in providing innovative, results-driven services that are tailored to meet the unique needs of our global clientele. With a strong focus on delivering projects on time, we help businesses achieve their digital goals by combining cutting-edge technology with creative excellence.
                  </p>
                  <form action="">
                    <div className="input-group">
                      <input type="text" className="p-3 border-white form-control" placeholder="Your Email" />
                      <button className="btn btn-dark">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-white col-lg-8 col-md-6">
                <div className="row gx-5">
                  <div className="pt-5 mb-5 col-lg-5 col-md-12 footer-section">
                    <div className="pb-3 mb-4 section-title section-title-sm position-relative">
                      <h3 className="mb-0 text-light">Get In Touch</h3>
                    </div>
                    <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                      <div className="mb-2 d-flex">
                        <i className="bi bi-geo-alt me-2" style={{ color: '#06A3DA' }}></i>
                        <p className="mb-0">
                          Office No. 14, 5th floor, Madhuram Arcade-2, Near Madhuram Circle Dindoli, Surat, 394210
                        </p>
                      </div>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target="_self">
                      <div className="mb-2 d-flex">
                        <i className="bi bi-envelope-open me-2" style={{ color: '#06A3DA' }}></i>
                        <p className="mb-0">avataratechnobiz@gmail.com</p>
                      </div>
                    </a>

                    <a href="tel:9558476369">
                      <div className="mb-2 d-flex">
                        <i className="bi bi-telephone me-2" style={{ color: '#06A3DA' }}></i>
                        <p className="mb-0">+91 9558476369</p>
                      </div>
                    </a>

                    <div className="mt-4 d-flex">
                      <a className="btn btn-square me-2" style={{ backgroundColor: "#06A3DA" }} href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm"><i className="fa fa-envelope-open "></i></a>
                      <a className="btn btn-square me-2" style={{ backgroundColor: "#06A3DA" }} href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a className="btn btn-square" style={{ backgroundColor: "#06A3DA" }} href="https://www.instagram.com/avataratechnobiz/">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="pt-0 mb-5 col-lg-3 col-md-12 pt-lg-5">
                    <div className="pb-3 mb-4 section-title section-title-sm position-relative">
                      <h3 className="mb-0 text-light">Quick Links</h3>
                    </div>
                    <div className="link-animated d-flex flex-column justify-content-start">
                      <a className="mb-2 text-light" href="/"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Home</a>
                      <a className="mb-2 text-light" href="/about"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> About Us</a>
                      <a className="mb-2 text-light" href="/service"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Our Services</a>
                      <a className="mb-2 text-light" href="/career"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Career</a>
                      <a className="text-light" href="/contact"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Contact Us</a>
                    </div>
                  </div>
                  <div className="pt-0 mb-5 col-lg-4 col-md-12 pt-lg-5">
                    <div className="pb-3 mb-4 section-title section-title-sm position-relative">
                      <h3 className="mb-0 text-light">Popular Links</h3>
                    </div>
                    <div className="link-animated d-flex flex-column justify-content-start">
                      <a className="mb-2 text-light" href="/"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Gallery</a>
                      <a className="mb-2 text-light" href="/"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Features</a>
                      <a className="mb-2 text-light" href="/contact"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Privacy Policy</a>
                      <a className="mb-2 text-light" href="/service"><i className="bi bi-arrow-right me-2" style={{ color: "#06A3DA" }}></i> Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Start */}
        <div className="text-white container-fluid" style={{ background: '#061429' }}>
          <div className="container text-center">
            <div className="row justify-content-end">
              <div className="col-lg-8 col-md-6">
                <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                  <p className="mb-0">
                    &copy; <a className="text-white border-bottom" href="/">avataratechnobiz.com</a>. All Rights Reserved. Designed by
                    <a className="text-white border-bottom" href="/">Avatara TechnoBiz</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}
      </div>
    </>
  );
};

export default Home;




