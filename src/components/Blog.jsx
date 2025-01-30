import React from 'react'
import logo from '../assets/favicon.ico'

const Blog = () => {
  return (
  <>
   <div className="container-fluid px-5 d-none d-lg-block" style={{backgroundColor:'#091E3E'}}>
               <div className="row gx-0">
                   <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                       <div className="d-inline-flex align-items-center" style={{height:'45px'}}>
                      <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407757,72.8794309,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D">  <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>5th Floor Madhuram Arcade 2 , Dindoli , Surat</small></a>
                      <a href="tel:9558476369"> 
                        <small className="me-3 text-light"><i className="fa fa-phone me-2"></i>+91 9558476369</small></a>
                     <a href="https://mail.google.com/mail/u/0/?fs=1&to=avataratechnobiz@gmail.com&tf=cm" target='_self'> <small className="text-light"><i className="fa fa-envelope-open me-2"></i>avataratechnobiz@gmail.com</small></a>
                       </div>
                   </div>
                   <div className="col-lg-4 text-center text-lg-end">
                       <div className="d-inline-flex align-items-center" style={{height:'45px'}}>
                           <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i className="fab fa-twitter fw-normal"></i></a>
                           <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i className="fab fa-facebook-f fw-normal"></i></a>
                           <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all"><i className="fab fa-linkedin-in fw-normal"></i></a>
                           <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/avataratechnobiz/"><i className="fab fa-instagram fw-normal"></i></a>
                           <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="/"><i className="fab fa-youtube fw-normal"></i></a>
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
             <div className="container-fluid py-5 bg-header" style={{marginBottom:'90px',backgroundColor:'#06A3DA'}}>
                  <div className="row py-5">
                      <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                          <h1 className="display-4 text-white animated zoomIn">Blog Grid</h1>
                          <a href="/" className="h5 text-white">Home</a>
                          <i className="far fa-circle text-white px-2"></i>
                          <a href="/blog" className="h5 text-white">Blog Grid</a>
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

           <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
             
                <div className="col-lg-8">
                    <div className="row g-5">
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt  me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2" style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt me-2" style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt  me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt  me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" style={{backgroundColor:'#06A3DA'}} href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user  me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt  me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" alt=""/>
                                    <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4"  href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user me-2"style={{color:'#06A3DA'}}></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt  me-2"style={{color:'#06A3DA'}}></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" style={{color:'#06A3DA'}} href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                            <nav aria-label="Page navigation">
                              <ul className="pagination pagination-lg m-0">
                                <li className="page-item disabled">
                                  <a className="page-link rounded-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                                  </a>
                                </li>
                                <li className="page-item  "   ><a className="page-link text-white" style={{backgroundColor:'#06A3DA'}} href="#">1</a></li>
                                <li className="page-item"><a className="page-link" style={{color:'#06A3DA'}} href="#">2</a></li>
                                <li className="page-item"><a className="page-link"style={{color:'#06A3DA'}} href="#">3</a></li>
                                <li className="page-item">
                                  <a className="page-link rounded-0" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="bi bi-arrow-right" style={{color:'#06A3DA'}}></i></span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                        </div>
                    </div>
                </div>
 
                <div className="col-lg-4">
           
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Keyword"/>
                            <button className="btn px-4" style={{backgroundColor:'#06A3DA'}}><i className="bi bi-search"></i></button>
                        </div>
                    </div>
   
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Categories</h3>
                        </div>
                        <div className="link-animated d-flex flex-column justify-content-start">
                            <a className="h5 fw-semi-bold rounded py-2 px-3 mb-2" style={{backgroundColor:'#EEF9FF',color:'black'}} href="#"><i className="bi bi-arrow-right me-2"></i>Web Design</a>
                            <a className="h5 fw-semi-bold rounded py-2 px-3 mb-2" style={{backgroundColor:'#EEF9FF',color:'black'}} href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                            <a className="h5 fw-semi-bold rounded py-2 px-3 mb-2" style={{backgroundColor:'#EEF9FF',color:'black'}} href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                            <a className="h5 fw-semi-bold rounded py-2 px-3 mb-2" style={{backgroundColor:'#EEF9FF',color:'black'}} href="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</a>
                            <a className="h5 fw-semi-bold rounded py-2 px-3 mb-2" style={{backgroundColor:'#EEF9FF',color:'black'}} href="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</a>
                        </div>
                    </div>
         
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Recent Post</h3>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <a href="" className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0" style={{backgroundColor:'#EEF9FF',color:'black'}}>Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <a href="" className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0" style={{backgroundColor:'#EEF9FF',color:'black'}}>Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <a href="" className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0" style={{backgroundColor:'#EEF9FF',color:'black'}}>Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <a href="" className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0" style={{backgroundColor:'#EEF9FF',color:'black'}}>Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div> 
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <a href="" className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0" style={{backgroundColor:'#EEF9FF',color:'black'}}>Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div className="d-flex rounded overflow-hidden mb-3">
                            <img className="img-fluid" src="http://127.0.0.1:5500/startup-website-template/img/blog-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <a href="" className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0" style={{backgroundColor:'#EEF9FF',color:'black'}}>Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                    </div>
            
     
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <img src="img/blog-1.jpg" alt="" className="img-fluid rounded"/>
                    </div>
   
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Tag Cloud</h3>
                        </div>
                        <div className="d-flex flex-wrap m-n1">
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Design</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Development</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Marketing</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>SEO</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Writing</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Consulting</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Design</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Development</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Marketing</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>SEO</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Writing</a>
                            <a href="" className="btn m-1" style={{backgroundColor:"#F1FAFF"}}>Consulting</a>
                        </div>
                    </div>
            
                    <div className="wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4"  >
                            <h3 className="mb-0">Plain Text</h3>
                        </div>
                        <div className="text-center" style={{padding:'30px',backgroundColor:"#F1FAFF"}} >
                            <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                            <a href="" className="btn py-2 px-4 text-white" style={{backgroundColor:'#06A3DA'}} >Read More</a>
                        </div>
                    </div>
               
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

export default Blog