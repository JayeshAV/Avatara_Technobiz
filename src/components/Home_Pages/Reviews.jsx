import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const testimonials = [
    {
      "id": 1,
      "text": "Working with this team has been an absolute pleasure. The professionalism and attention to detail exceeded my expectations. Highly recommended!",
      "name": "John Doe",
      "title": "Manager",
      "image": "https://themost.com.tr/wp-content/uploads/2023/04/tm-men1_0000_Evansite95-2.jpg"
    },
    {
      "id": 2,
      "text": "This service transformed our business. The innovation and dedication the team demonstrated were truly remarkable. I couldn’t ask for better support.",
      "name": "Jane Doe",
      "title": "CEO",
      "image": "https://themost.com.tr/wp-content/uploads/2023/04/tm-men1_0001_TM-MEN3.jpg"
    },
    {
      "id": 3,
      "text": "The collaboration process was seamless, and the results were outstanding. I’m thoroughly impressed with the expertise and effort put into every detail.",
      "name": "Alice Smith",
      "title": "Co-Founder",
      "image": "https://usercontent.one/wp/manforhimself.com/wp-content/uploads/2022/09/MFH-Featured-Square-1200-x-1200-1.jpeg?media=1728223447"
    }
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main className="container-fluid w-[85%] p-2 mx-auto">
      <section className="flex items-center justify-center min-h-screen">
        <div className="container px-4 py-8">
          <div className="pb-5 text-center">
            <h2 className="mt-5 text-3xl font-semibold text-blue-500">Testimonial</h2>
            <h1 className="mt-3 mb-5 text-4xl font-bold text-gray-800">
              What Our Clients Say About Our Digital Services
            </h1>
          </div>
          <Slider {...settings} className="mt-5 testimonial-slider">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-slide animate__animated animate__pulse animate__slower animate__delay-0.4s animate__infinite"
              >
                <div className="p-4 border-1 border-[#3B82F6]-200 rounded-xl text-center w-full h-[400px] flex flex-col justify-between">
                  <div className="py-2">
                    <i className="fas fa-quote-right text-[#14213d] text-2xl"></i>
                  </div>
                  <div className="w-24 h-24 mx-auto mb-4 animate__animated animate__fadeIn">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full border-2 border-[#e5e5e5]"
                    />
                  </div>
                  <div className="py-5">
                    <p className="text-[#293241] text-sm leading-6">{testimonial.text}</p>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[#293241] text-lg">{testimonial.name}</h4>
                  </div>
                  <div>
                    <p className="text-[#293241] text-sm uppercase tracking-wider font-light">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
