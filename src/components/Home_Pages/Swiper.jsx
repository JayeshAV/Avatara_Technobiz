import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = () => {
    const images = [
        "src/assets/vendor-1.jpg",
        "src/assets/vendor-2.jpg",
        "src/assets/vendor-3.jpg",
        "src/assets/vendor-4.jpg",
        "src/assets/vendor-5.jpg",
        "src/assets/vendor-6.jpg",
        "src/assets/vendor-7.jpg",
        "src/assets/vendor-8.jpg",
    ];

    return (
        <div className="container-fluid mx-auto m-5" style={{marginTop:'10px',marginBottom:'20px',width:'85%'}}>
            <div className="p-5 rounded-lg m-5">
                <Swiper
                    // modules={[Autoplay]}
                    slidesPerView={7}  // Display 7 images per row
                    spaceBetween={30} // Add spacing between images
                    loop={true}
                    autoplay={{ delay: 600, disableOnInteraction: false }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },  // Small screens: 2 images
                        480: { slidesPerView: 3, spaceBetween: 15 },  // Small tablets: 3 images
                        768: { slidesPerView: 5, spaceBetween: 20 },  // Tablets: 5 images
                        1024: { slidesPerView: 7, spaceBetween: 30 }, // Large screens: 7 images with spacing
                    }}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <img src={src} alt={`Vendor ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
