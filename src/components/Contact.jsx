import React from 'react'
import Home_Form from './Home_Pages/Home_Form'

const Contact = () => {
  return (
   <>
  
   <div className="container-fluid py-5 bg-header" style={{marginBottom:'30px',backgroundColor:'#06A3DA'}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
                    <a href="/" className="h5 text-white">Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a href="/contact" className="h5 text-white">Contact</a>
                </div>
            </div>
        </div>
        
    
    <div className="container-fluid py-5 wow fadeInDown" id="for-contact" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-uppercase" style={{color:'#06A3DA'}}>Contact Us</h5>
          <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4 pt-4">
            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
              <a href="tel:9558476369">
                <div className=" d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px',backgroundColor:"#06A3DA" }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
              </a>
              <div className="ps-3">
                <h5 className="mb-2">Call to ask any question</h5>
                <a href="tel:9558476369" className="mb-0" style={{color:'#06A3DA'}}>+91 9558476369</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm">
                <div className=" d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px',backgroundColor:"#06A3DA" }}>
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
              </a>
              <div className="ps-3">
                <h5 className="mb-2">Email to get free quote</h5>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" className="mb-0" style={{color:'#06A3DA'}}>avataratechnobiz@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
              <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                <div className=" d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px',backgroundColor:'#06A3DA' }}>
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
              </a>
              <div className="ps-3">
                <h5 className="mb-2">Visit our office</h5>
                <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">
                  <p className="mb-0" style={{color:'#06A3DA'}}> Office No. 14, 5th floor <br /> Madhuram Arcade-2, Near Madhuram <br /> Circle Dindoli, Surat, 394210</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
          <Home_Form />
          </div>

          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29767.126423614416!2d72.83719992895156!3d21.156743503566222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0515a0f81fa81%3A0x4847daa352709464!2sAvatara%20Technobiz%20LLP!5e0!3m2!1sen!2sin!4v1735646993318!5m2!1sen!2sin" frameBorder="0" style={{ minHeight: '380px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>

      </div>
    </div>


{/* Footer */}

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

export default Contact