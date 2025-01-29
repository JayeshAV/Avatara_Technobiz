import React from 'react'
import "./style.css"
import Slider from './Home_Pages/Swiper'
import logo from '../assets/favicon.ico';

const About = () => {
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
       <div class="container-fluid bg-primary py-5 bg-header" style={{marginBottom:'90px'}}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">About Us</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">About</a>
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
 
 {/* first about section */}

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
                href="/service"
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
                  src="https://adso.com/static/in/img/about.jpg"
                  style={{ objectFit: 'cover' }}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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

   {/* slider */}
   <Slider />

   {/* faqs */}
    <div className="container">
      <div className="row">
         <h1 className="text-center wow zoomIn mb-5" data-wow-delay="0.2s">FAQS</h1>
      </div>
      <div className="row">
        <div className="accordion accordion-flush col-lg-12 m-auto wow fadeInUp" id="accordionFlushExample" data-wow-delay="0.1s">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is AI Development, and how can it benefit my business?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">AI Development involves creating advanced solutions using machine learning, natural language processing, and predictive analytics. These technologies enhance business efficiency, automate tasks, and provide data-driven insights.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What kind of Cloud Services do you offer?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                We provide secure, scalable, and cost-effective cloud solutions, including infrastructure migration, cloud management, and end-to-end cloud services tailored to your business needs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Do you create custom websites?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"> Yes, we specialize in Web Development, offering responsive, secure, and visually appealing websites designed to meet your specific business goals.</div>
            </div>
          </div>
    
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Can you develop mobile apps for both iOS and Android?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Absolutely! Our Apps Development services include creating feature-rich, user-centric mobile applications for both iOS and Android platforms.</div>
            </div>
          </div>
        
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                How do your SEO Optimization services work?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Our SEO Optimization services help improve your search engine rankings, drive organic traffic, and enhance your brand visibility using expert techniques and best practices.</div>
            </div>
          </div>
    
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                How do I get a quote for my project?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">You can contact us directly at +91 9558476369 or use our "Request A Quote" feature to receive a personalized proposal.</div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                Do you provide ongoing support for your services?
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, we offer comprehensive support to ensure the solutions we deliver continue to meet your business needs effectively.</div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEight">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                How do I get started with your services?  
              </button>
            </h2>
            <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Simply reach out to us through the contact details provided or schedule a consultation to discuss your project requirements.</div>
            </div>
          </div>
          
    
          
        </div>
      </div>
    </div>

    <div className="container py-5 wow fadeInLeft">
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="content-box"> 
            <h2>Why Choose Us?</h2>
            <p>What sets us apart from other IT service providers?</p>
            <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="content-box2">
                    <h2>What we do?</h2>
                    <p>Solutions drives business success by delivering innovative IT management and cutting-edge.</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    {/* Footer */}
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
  )
}

export default About