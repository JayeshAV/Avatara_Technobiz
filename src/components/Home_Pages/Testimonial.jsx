import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
    {
        img: "http://127.0.0.1:5500/startup-website-template/img/testimonial-2.jpg",
        name: "Client Name 1",
        profession: "Profession 1",
        review: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
    },
    {
        img: "http://127.0.0.1:5500/startup-website-template/img/testimonial-3.jpg",
        name: "Client Name 1",
        profession: "Profession 1",
        review: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
    },
    {
        img: "http://127.0.0.1:5500/startup-website-template/img/testimonial-4.jpg",
        name: "Client Name 1",
        profession: "Profession 1",
        review: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
    },
    {
        img: "http://127.0.0.1:5500/startup-website-template/img/testimonial-5.jpg",
        name: "Client Name 1",
        profession: "Profession 1",
        review: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
    }
];

const TestimonialSlider = () => {
    return (
        <div className="container text-center py-5 my-5">
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8">
                    <h5 className="text-uppercase fw-bold mb-4" style={{color: '#03A9F4'}}>
                        Testimonial
                    </h5>
                    <h2 className="fw-bold mb-4" style={{fontFamily:"Nunito"}}>
                        What Our Clients Say About Our Digital Services
                    </h2>
                    <div className="mx-auto" style={{width: '60px', height: '3px', backgroundColor: '#03A9F4'}}></div>
                </div>
            </div>

            <div className="position-relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    className="pb-5"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`card border-0 shadow-sm p-5 h-100`} style={{backgroundColor:'#EEF9FF'}}
                               
                            >
                                <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                    <img 
                                        src={testimonial.img} 
                                        alt={testimonial.name} 
                                        className=" me-3"
                                        style={{width: '64px', height: '64px'}}
                                    />
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{color: '#03A9F4'}}>
                                            {testimonial.name}
                                        </h6>
                                        <small className="text-uppercase text-muted">
                                            {testimonial.profession}
                                        </small>
                                    </div>
                                </div>
                                <p className="text-muted mb-0">{testimonial.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style jsx>{`
                    .swiper-pagination-bullet {
                        width: 18px;
                        height: 15px;
                        background-color: gray;
                        border-radius: 10%;
                        margin: 0 5px;
                        transition: transform 0.3s ease;
                    }

                    .swiper-pagination-bullet-active {
                        background-color: #03A9F4;
                        transform: scale(1.5);
                    }
                `}</style>
            </div>
        </div>
    );
};

export default TestimonialSlider;
