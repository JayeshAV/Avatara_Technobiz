import React from 'react';
import Slider from 'react-slick'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <main className='mt-5 pt-5' style={{ marginTop: '7%' }}>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say About Our Digital Services</h2>

          {/* Carousel Component */}
          <Slider {...settings}>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img src="" alt="Client 1" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">Client Name</h3>
                  <p className="text-gray-500">Profession</p>
                </div>
              </div>
              <p className="text-gray-700">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/80/80" alt="Client 2" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">Client Name</h3>
                  <p className="text-gray-500">Profession</p>
                </div>
              </div>
              <p className="text-gray-700">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/80/80" alt="Client 3" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">Client Name</h3>
                  <p className="text-gray-500">Profession</p>
                </div>
              </div>
              <p className="text-gray-700">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default TestimonialCarousel;
