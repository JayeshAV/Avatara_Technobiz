import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { main } from "motion/react-client";

SwiperCore.use([Autoplay]);

const VendorCarousel = () => {
  const images = [
    "src/assets/vendor-1.jpg",
    "src/assets/vendor-2.jpg",
   "src/assets/vendor-3.jpg",
   "src/assets/vendor-4.jpg",
   "src/assets/vendor-5.jpg",
   "src/assets/vendor-6.jpg",
    "src/assets/vendor-7.jpg",
   "src/assets/vendor-8.jpg",
    "src/assets/vendor-9.jpg"
  ];

  return (
    <>
    <main className=" flex flex-col md:flex-row w-[85%] mx-auto   md:mb-10 md:pb-10">
    <div className="py-10">
      <div className="container mx-auto py-0">
        <div className="bg-white p-5  rounded-lg">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="vendor-carousel"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Vendor ${index + 1}`}
                  className="w-full h-10 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </main>
    </>
  );
};

export default VendorCarousel;
