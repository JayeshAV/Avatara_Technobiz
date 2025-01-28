import React from 'react'
import "./style.css"

const About = () => {
  return (
   <>
   <div>
   <div class="container-fluid bg-primary py-5 bg-header"style={{marginBottom:"30px"}}>
    <div class="row py-5">
        <div class="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 class="display-4 text-white animated zoomIn">About Us</h1>
            <a href="/" class="h5 text-white">Home</a>
            <i class="far fa-circle text-white px-2"></i>
            <a href="/about" class="h5 text-white">About</a>
        </div>
    </div>
</div>


   <div className="py-5 container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="pb-3 mb-3 section-title position-relative">
                <h5 className="fw-bold text-uppercase" style={{color:"#06A3DA"}}>About Us</h5>
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
                    <i className="fa fa-check me-3" style={{color:"#06A3DA"}}></i>Programming Experts
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{color:"#06A3DA"}}></i>Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{color:"#06A3DA"}}></i>24/7 Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check me-3" style={{color:"#06A3DA"}}></i>Timely Delivery
                  </h5>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                <a href="tel:9558476369">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px',backgroundColor:'#06A3DA' }}
                  >
                    <i className="text-white fa fa-phone-alt"></i>
                  </div>
                </a>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <a href="tel:9558476369">
                    <h4 className="mb-0" style={{color:"#06A3DA",textDecoration:'none'}}>+91 9558476369</h4>
                  </a>
                </div>
              </div>
              <a
                href="service.html"
                className="px-5 py-3 mt-3 btn wow zoomIn"
                data-wow-delay="0.9s"
                style={{backgroundColor:'#06A3DA'}}
              >
                Request A Quote
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img
                  className="rounded position-absolute w-100 h-100 wow zoomIn"
                  data-wow-delay="0.9s"
                  src="src/assets/about.jpg"
                  style={{ objectFit: 'cover' }}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   {/* faqs */}
    <div class="container">
      <div class="row">
         <h1 class="text-center wow zoomIn mb-5" data-wow-delay="0.2s">FAQS</h1>
      </div>
      <div class="row">
        <div class="accordion accordion-flush col-lg-12 m-auto wow fadeInUp" id="accordionFlushExample" data-wow-delay="0.1s">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is AI Development, and how can it benefit my business?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">AI Development involves creating advanced solutions using machine learning, natural language processing, and predictive analytics. These technologies enhance business efficiency, automate tasks, and provide data-driven insights.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What kind of Cloud Services do you offer?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                We provide secure, scalable, and cost-effective cloud solutions, including infrastructure migration, cloud management, and end-to-end cloud services tailored to your business needs.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Do you create custom websites?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body"> Yes, we specialize in Web Development, offering responsive, secure, and visually appealing websites designed to meet your specific business goals.</div>
            </div>
          </div>
    
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Can you develop mobile apps for both iOS and Android?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Absolutely! Our Apps Development services include creating feature-rich, user-centric mobile applications for both iOS and Android platforms.</div>
            </div>
          </div>
        
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                How do your SEO Optimization services work?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Our SEO Optimization services help improve your search engine rankings, drive organic traffic, and enhance your brand visibility using expert techniques and best practices.</div>
            </div>
          </div>
    
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                How do I get a quote for my project?
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">You can contact us directly at +91 9558476369 or use our "Request A Quote" feature to receive a personalized proposal.</div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSeven">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                Do you provide ongoing support for your services?
              </button>
            </h2>
            <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Yes, we offer comprehensive support to ensure the solutions we deliver continue to meet your business needs effectively.</div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingEight">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                How do I get started with your services?  
              </button>
            </h2>
            <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Simply reach out to us through the contact details provided or schedule a consultation to discuss your project requirements.</div>
            </div>
          </div>
          
    
          
        </div>
      </div>
    </div>

    <div class="container py-5 wow fadeInLeft">
      <div class="row g-4">
        <div class="col-12 col-lg-6">
          <div class="content-box"> 
            <h2>Why Choose Us?</h2>
            <p>What sets us apart from other IT service providers?</p>
            <a href="#" class="learn-more">Learn More</a>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="content-box2">
                    <h2>What we do?</h2>
                    <p>Solutions drives business success by delivering innovative IT management and cutting-edge.</p>
                    <a href="#" class="learn-more">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    {/* Footer */}
    <div>

        
{/* Footer Start */}
<div className="mt-5 container-fluid bg-dark text-light wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-4 col-md-6 footer-about">
        <div className="p-4 text-center d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:'#06A3DA'}}>
          <a href="index.html" className="navbar-brand">
            <img src="img/favicon.ico" alt="" />
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
                <i className="bi bi-geo-alt me-2" style={{color:'#06A3DA'}}></i>
                <p className="mb-0">
                  Office No. 14, 5th floor, Madhuram Arcade-2, Near Madhuram Circle Dindoli, Surat, 394210
                </p>
              </div>
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target="_self">
              <div className="mb-2 d-flex">
                <i className="bi bi-envelope-open me-2" style={{color:'#06A3DA'}}></i>
                <p className="mb-0">avataratechnobiz@gmail.com</p>
              </div>
            </a>

            <a href="tel:9558476369">
              <div className="mb-2 d-flex">
                <i className="bi bi-telephone me-2" style={{color:'#06A3DA'}}></i>
                <p className="mb-0">+91 9558476369</p>
              </div>
            </a>

            <div className="mt-4 d-flex">
              <a className="btn btn-square me-2" style={{backgroundColor:"#06A3DA"}} href="#"><i className="fa fa-envelope-open "></i></a>
              <a className="btn btn-square me-2" style={{backgroundColor:"#06A3DA"}} href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all">
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a className="btn btn-square" style={{backgroundColor:"#06A3DA"}} href="https://www.instagram.com/avataratechnobiz/">
                <i className="fab fa-instagram fw-normal"></i>
              </a>
            </div>
          </div>
          <div className="pt-0 mb-5 col-lg-3 col-md-12 pt-lg-5">
            <div className="pb-3 mb-4 section-title section-title-sm position-relative">
              <h3 className="mb-0 text-light">Quick Links</h3>
            </div>
            <div className="link-animated d-flex flex-column justify-content-start">
              <a className="mb-2 text-light" href="/"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Home</a>
              <a className="mb-2 text-light" href="/about"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> About Us</a>
              <a className="mb-2 text-light" href="./service"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Our Services</a>
              <a className="mb-2 text-light" href="./career"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Career</a>
              <a className="text-light" href="./contact"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Contact Us</a>
            </div>
          </div>
          <div className="pt-0 mb-5 col-lg-4 col-md-12 pt-lg-5">
            <div className="pb-3 mb-4 section-title section-title-sm position-relative">
              <h3 className="mb-0 text-light">Popular Links</h3>
            </div>
            <div className="link-animated d-flex flex-column justify-content-start">
              <a className="mb-2 text-light" href="./gallery.html"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Gallery</a>
              <a className="mb-2 text-light" href="#"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Features</a>
              <a className="mb-2 text-light" href="#"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Privacy Policy</a>
              <a className="mb-2 text-light" href="service.html"><i className="bi bi-arrow-right me-2" style={{color:"#06A3DA"}}></i> Services</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Footer End */}

{/* Footer Bottom Start */}
<div className="text-white container-fluid" style={{ background: '#061429' }}>
  <div className="container m-auto text-center">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-md-6">
        <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
          <p className="mb-0">
            &copy; <a className="text-white border-bottom" href="#">avataratechnobiz.com</a>. All Rights Reserved. Designed by
            <a className="text-white border-bottom" href="#">Avatara TechnoBiz</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Footer Bottom End */}
</div>
    </>
  )
}

export default About