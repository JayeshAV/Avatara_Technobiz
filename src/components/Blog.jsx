import React from 'react'
import logo from '../assets/favicon.ico'

const Blog = () => {
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
                          <h1 class="display-4 text-white animated zoomIn">Blog Grid</h1>
                          <a href="/" class="h5 text-white">Home</a>
                          <i class="far fa-circle text-white px-2"></i>
                          <a href="/blog" class="h5 text-white">Blog Grid</a>
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

           {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <!-- Blog list Start -->
                <div class="col-lg-8">
                    <div class="row g-5">
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt="">
                                    <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 wow slideInUp" data-wow-delay="0.1s">
                            <nav aria-label="Page navigation">
                              <ul class="pagination pagination-lg m-0">
                                <li class="page-item disabled">
                                  <a class="page-link rounded-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i class="bi bi-arrow-left"></i></span>
                                  </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                  <a class="page-link rounded-0" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i class="bi bi-arrow-right"></i></span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                        </div>
                    </div>
                </div>
 
                <div class="col-lg-4">
           
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="input-group">
                            <input type="text" class="form-control p-3" placeholder="Keyword"/>
                            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
   
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Categories</h3>
                        </div>
                        <div class="link-animated d-flex flex-column justify-content-start">
                            <a class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Web Design</a>
                            <a class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Web Development</a>
                            <a class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Web Development</a>
                            <a class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Keyword Research</a>
                            <a class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Email Marketing</a>
                        </div>
                    </div>
         
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Recent Post</h3>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-1.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""/>
                            <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-2.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""/>
                            <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-3.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""/>
                            <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-1.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""/>
                            <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-2.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""/>
                            <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-3.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""/>
                            <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </a>
                        </div>
                    </div>
            
     
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <img src="img/blog-1.jpg" alt="" class="img-fluid rounded"/>
                    </div>
   
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Tag Cloud</h3>
                        </div>
                        <div class="d-flex flex-wrap m-n1">
                            <a href="" class="btn btn-light m-1">Design</a>
                            <a href="" class="btn btn-light m-1">Development</a>
                            <a href="" class="btn btn-light m-1">Marketing</a>
                            <a href="" class="btn btn-light m-1">SEO</a>
                            <a href="" class="btn btn-light m-1">Writing</a>
                            <a href="" class="btn btn-light m-1">Consulting</a>
                            <a href="" class="btn btn-light m-1">Design</a>
                            <a href="" class="btn btn-light m-1">Development</a>
                            <a href="" class="btn btn-light m-1">Marketing</a>
                            <a href="" class="btn btn-light m-1">SEO</a>
                            <a href="" class="btn btn-light m-1">Writing</a>
                            <a href="" class="btn btn-light m-1">Consulting</a>
                        </div>
                    </div>
            
                    <div class="wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Plain Text</h3>
                        </div>
                        <div class="bg-light text-center" style="padding: 30px;">
                            <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                            <a href="" class="btn btn-primary py-2 px-4">Read More</a>
                        </div>
                    </div>
               
                </div>
            
            </div>
        </div>
    </div> */}
  </>
  )
}

export default Blog