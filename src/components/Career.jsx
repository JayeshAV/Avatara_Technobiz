import React from 'react'
import JobAppicationForm from "./Home_Pages/JobAppicationForm"
import Slider from './Home_Pages/Swiper'

const Career = () => {
  return (
    <>
    

      <div className="container-fluid py-5 bg-header" style={{ marginBottom: "30px" , backgroundColor:"#06A3DA" }}>
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Career</h1>
            <a href="/" className="h5 text-white">Home</a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="/career" className="h5 text-white">Career</a>
          </div>
        </div>
      </div>

      {/* Job vacancy */}
      <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="pb-3 mx-auto mb-5 text-center section-title position-relative"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-uppercase" style={{ color: "#33B4E1" }}>
              Join our dynamic team and build a future in innovation and
              technology!
            </h5>
            <h1 className="mb-0">Career Opportunities</h1>
          </div>
          <div className="row g-0">
            <div className="mt-5 col-lg-4 wow slideInUp" data-wow-delay="0.6s" style={{ backgroundColor: "#EEF9FF" }}>
              <div className="rounded">
                <div className="px-5 py-4 mb-4 border-bottom">
                  <h4 className="mb-1" style={{ color: "#33B4E1" }}>Python Developer</h4>
                  <small className="text-uppercase" style={{ color: '#7E7D87' }}>Experience - 0 to 3 Year</small>
                </div>
                <div className="p-5 pt-0">
                  <h1 className="mb-3 display-5">
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      Requirements :
                    </small>
                  </h1>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Strong understanding of Python and its libraries</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Experience with Django or Flask</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Knowledge of front-end technologies like JavaScript, HTML5,
                      and CSS3
                    </span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Familiarity with databases (MySQL, PostgreSQL, MongoDB)
                    </span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Excellent problem-solving skills</span>
                  </div>
                  <a href="#apply" className="px-4 py-2 mt-4 text-white btn" style={{ backgroundColor: "#33B4E1" }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5 col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="bg-white rounded shadow position-relative" style={{ zIndex: 1 }}>
                <div className="px-5 py-4 mb-4 border-bottom">
                  <h4 className="mb-1" style={{ color: "#33B4E1" }}>React.js Developer</h4>
                  <small className="text-uppercase" style={{ color: '#7E7D87' }}>Experience - 0 to 3 Year</small>
                </div>
                <div className="p-5 pt-0">
                  <h1 className="mb-3 display-5">
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      Requirements :
                    </small>
                  </h1>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Strong proficiency in JavaScript, including DOM
                      manipulation and the JavaScript object model
                    </span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Thorough understanding of React.js and its core principles</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Experience with popular React.js workflows (such as Flux or
                      Redux)
                    </span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Familiarity with RESTful APIs</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Knowledge of modern authorization mechanisms, such as JSON
                      Web Token
                    </span>
                  </div>
                  <a href="#apply" className="px-4 py-2 mt-4 text-white btn" style={{ backgroundColor: "#33B4E1" }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5 col-lg-4 wow slideInUp" data-wow-delay="0.9s" style={{ backgroundColor: "#EEF9FF" }}>
              <div className="rounded " >
                <div className="px-5 py-4 mb-4 border-bottom">
                  <h4 className="mb-1" style={{ color: "#33B4E1" }}>Node.js Developer</h4>
                  <small className="text-uppercase" style={{ color: '#7E7D87' }}>Experience - 0 to 3 Year</small>
                </div>
                <div className="p-5 pt-0">
                  <h1 className="mb-3 display-5">
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      Requirements :
                    </small>
                  </h1>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Strong proficiency with JavaScript or TypeScript</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Knowledge of Node.js and frameworks such as Express</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Experience with SQL or NoSQL databases</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Understanding of server-side templating languages</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Familiarity with front-end technologies, such as HTML5 and
                      CSS3
                    </span>
                  </div>
                  <a href="#apply" className="px-4 py-2 mt-4 text-white btn" style={{ backgroundColor: "#33B4E1" }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 col-lg-4 wow slideInUp" data-wow-delay="0.9s" style={{ backgroundColor: "#EEF9FF" }}>
              <div className="rounded">
                <div className="px-5 py-4 mb-4 border-bottom">
                  <h4 className="mb-1" style={{ color: "#33B4E1" }}>React Native Developer</h4>
                  <small className="text-uppercase" style={{ color: "#7E7D87" }}>Experience - 0 to 3 Year</small>
                </div>
                <div className="p-5 pt-0">
                  <h1 className="mb-3 display-5">
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      Requirements :
                    </small>
                  </h1>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Strong proficiency in JavaScript or TypeScript</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Experience with React Native framework and its ecosystem</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Understanding of mobile app architecture and design patterns</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Familiarity with integrating third-party libraries and APIs</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>
                      Knowledge of native iOS/Android development is a plus
                    </span>
                  </div>
                  <a href="#apply" className="px-4 py-2 mt-4 text-white btn" style={{ backgroundColor: "#33B4E1" }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 bg-white shadow col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="bg-white rounded">
                <div className="px-5 py-4 mb-4 border-bottom">
                  <h4 className="mb-1" style={{ color: "#33B4E1" }}>Web Designer</h4>
                  <small className="text-uppercase" style={{ color: "#7E7D87" }}>Experience - 0 to 3 Year</small>
                </div>
                <div className="p-5 pt-0">
                  <h1 className="mb-3 display-5">
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      Requirements :
                    </small>
                  </h1>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Proficiency in HTML, CSS, and JavaScript</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Experience with responsive and mobile-first design</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Familiarity with design tools like Figma, Adobe XD, or Sketch</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Basic understanding of UX/UI principles</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Knowledge of cross-browser compatibility and debugging</span>
                  </div>
                  <a href="#apply" className="px-4 py-2 mt-4 text-white btn" style={{ backgroundColor: "#33B4E1" }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          
            <div className="mt-5 col-lg-4 wow slideInUp" data-wow-delay="0.9s" style={{ backgroundColor: "#EEF9FF" }}>
              <div className="rounded">
                <div className="px-5 py-4 mb-4 border-bottom">
                  <h4 className="mb-1" style={{ color: "#33B4E1" }}>Business Development Executive (BDE)</h4>
                  <small className="text-uppercase" style={{ color: "#7E7D87" }}>Experience - 0 to 3 Year</small>
                </div>
                <div className="p-5 pt-0">
                  <h1 className="mb-3 display-5">
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      Requirements :
                    </small>
                  </h1>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Excellent communication and negotiation skills</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Proven ability to develop and maintain client relationships</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Strong understanding of sales and marketing principles</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Experience with lead generation and conversion strategies</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <i className="pt-1 fa fa-check me-2" style={{ color: "#33B4E1" }}></i>
                    <span>Familiarity with CRM tools and software</span>
                  </div>
                  <a href="#apply" className="px-4 py-2 mt-4 text-white btn" style={{ backgroundColor: "#33B4E1" }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

          </div>
          {/* Additional rows for more roles */}
        </div>
      </div>


      <div
        className="py-5 container-fluid wow fadeInUp"
        data-wow-delay="0.1s"
        id="apply"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="pb-3 mb-5 section-title position-relative">
                <h5 className="fw-bold text-uppercase" style={{color:"#06A3DA"}}>
                  Career Opportunities
                </h5>
                <h1 className="mb-0">Ready to Join Our Team? Apply Now</h1>
              </div>
              <p className="mb-4">
                We are always looking for passionate individuals to join our growing
                team. If you are ready to take on exciting challenges and grow your
                career, fill out the form below and we’ll get back to you soon.
              </p>
              <div
                className="mt-2 d-flex align-items-center wow zoomIn"
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
                    <h4 className="mb-0" style={{color:'#06A3DA',fontSize:"20px"}}>avataratechnobiz@gmail.com</h4>
                  </a>
                </div>
              </div>

              <div
                className="py-5 mt-2 d-flex align-items-center wow zoomIn"
                data-wow-delay="0.6s"
              >
                <a href="tel:9558476369">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px",backgroundColor:"#06A3DA" }}
                  >
                    <i className="text-white fa fa-phone-alt"></i>
                  </div>
                </a>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4  style={{color:'#06A3DA',fontSize:"20px"}}>
                    <a href="tel:9558476369" className="mb-0" style={{color:'#06A3DA'}}>
                      +91 9558476369
                    </a>
                  </h4>
                </div>
              </div>

              <div className="d-flex align-items-center ju wow fadeIn" data-wow-delay="0.8s">
                <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px",backgroundColor:"#06A3DA" }}
                  >
                    <i className="text-white fa fa-map-marker-alt"></i>
                  </div>
                </a>
                <div className="ps-3">
                  <h5 className="mb-2">Visit our office</h5>
                  <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                    <h5 className="mb-0" style={{color:'#06A3DA',fontWeight:"initial",fontSize:'18px'}}>
                      Office No. 14, 5th floor <br />
                      Madhuram Arcade-2, Near Madhuram <br />
                      Circle Dindoli, Surat, 394210
                    </h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
            <JobAppicationForm />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper reviews */}
      <Slider />


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
    </>
  )
}

export default Career