import React, { useEffect, useState } from 'react';
import "./style.css"
import CounterUp from './Home_Pages/Counter_Up';
import Home_Form from './Home_Pages/Home_Form';
import Reviews from './Home_Pages/Reviews';
import Company_Slider from './Home_Pages/Company_Slider';
import Footer from './Footer';


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };


  const slides = [
    {
      image: 'src/assets/carousel-1.jpg',
      title: 'Creative & Innovative Digital Solution',
      subtitle: 'Creative & Innovative',
      link: 'service.html',
      btnText: 'Free Quote',
    },
    {
      image: 'src/assets/carousel-2.jpg',
      title: 'Expert Solutions & Digital Transformation',
      subtitle: 'Enhance Digital Presence',
      link: 'service.html',
      btnText: 'Free Quote',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    //slider
    <>
      <div id="header-carousel" className="relative w-full overflow-hidden animate__animated animate__fadeInUp animate__delay-0.1s ">
    <div className="relative h-[800px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            className="h-full w-full object-cover opacity-60"
            src={slide.image}
            alt={slide.title}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6">
            <div className="p-6 max-w-3xl text-center space-y-4">
              <h5 className="text-white text-lg font-semibold uppercase">
                {slide.subtitle}
              </h5>
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                {slide.title}
              </h1>
              <div className="flex gap-4 justify-center">
                <a
                  href={"#requestaquate"}
                  className="bg-blue-600 text-white py-3 px-5 rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                  {slide.btnText}
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white py-3 px-5 rounded-lg shadow-lg hover:bg-white hover:text-black transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75"
    >
      <span className="sr-only">Previous</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75"
    >
      <span className="sr-only">Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

      {/* counter up form another components */}
      <CounterUp />


      {/* about section */}

      <main className="container max-w-screen-1xl mx-auto flex flex-col md:flex-row items-center mt-10 p-6 rounded-lg bg-white "> 

        {/* Left Section */}
        <div className="md:w-1/2 p-6 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Your Trusted Partner for Cutting-Edge IT Solutions
          </h1>
          <p className="text-gray-600">
            We started in 2024 with a vision to positively impact businesses. We take pride in delivering innovative solutions and services with a team of 80+ professionals to help our clients achieve their goals. We work with a range of industries, including Education, Healthcare, Finance, Legal, E-commerce, Social Networking, Automobile, and Fitness. Our solutions are tailored to our clients' specific needs, and we are committed to quality, reliability, and innovation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-lg">
              <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>Programming Experts
            </div>
            <div className="flex items-center text-lg">
              <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>24/7 Support
            </div>
            <div className="flex items-center text-lg">
              <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>Professional Staff
            </div>
            <div className="flex items-center text-lg">
              <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>Timely Delivery
            </div>
          </div>
          <div className="flex gap-4">
            <a href="tel:+919558476369" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
              +91 9558476369
            </a>
            <a href="#requestaquate" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Request A Quote
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src="src/assets/about.jpg"
            alt="Team Discussion"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </main>
      {/* <main className="container max-w-screen-1xl mx-auto flex flex-col md:flex-row items-center mt-10 p-6 space-y-8 md:space-y-0 md:space-x-8 bg-white rounded-lg">
    <div className="md:w-1/2 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Your Trusted Partner for Cutting-Edge IT Solutions
      </h1>
      <p className="text-gray-600">
        We started in 2024 with a vision to positively impact businesses...
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center text-lg">
          <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>Programming Experts
        </div>
        <div className="flex items-center text-lg">
          <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>24/7 Support
        </div>
        <div className="flex items-center text-lg">
          <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>Professional Staff
        </div>
        <div className="flex items-center text-lg">
          <i className="p-2 text-blue-500 text-xl fa-solid fa-check"></i>Timely Delivery
        </div>
      </div>
      <div className="flex gap-4">
        <a href="tel:+919558476369" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
          +91 9558476369
        </a>
        <a href="#requestaquate" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Request A Quote
        </a>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-end">
      <img src="src/assets/about.jpg" alt="Team Discussion" className="rounded-lg shadow-md w-full max-w-xl" />
    </div>
  </main> */}

      {/* why choose us section */}

      <main className="container max-w-screen-1xl mt-5 animate__animated  animate__delay-0.2s mx-auto p-6 space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-blue-500 font-semibold text-3xl mt-5">WHY CHOOSE US</h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-3 mb-5">
            We Are Here to Grow Your Business Exponentially
          </h1>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Features */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__bounceInLeft animate__delay-0.2s">
              <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quality Design</h3>
              <p className="text-gray-600 mt-2">
                Our designs blend creativity with functionality, ensuring a seamless user experience while enhancing your brand’s visual appeal and market presence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__bounceInLeft animate__delay-0.2s">
              <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Timely Delivery</h3>
              <p className="text-gray-600 mt-2">
                We understand the importance of deadlines and pride ourselves on delivering your projects on time, every time, without compromising quality and technologies.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center animate__animated animate__backInUp animate__delay-0.3s">
            <img
              src="src/assets/feature.jpg"
              alt="Team Discussion"
              className="rounded-lg shadow-md w-full max-w-lg"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__bounceInRight animate__delay-0.2s">
              <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Programming Experts</h3>
              <p className="text-gray-600 mt-2">
                Our skilled developers deliver tailored solutions using the latest technologies and best practices, ensuring your business goals are met effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__bounceInRight animate__delay-0.2s">
              <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 mt-2">
                Our dedicated support team is available round-the-clock to assist you with any technical issues or queries, ensuring continuous assistance whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Our Services */}
      <main className="container-fluid w-[85%]  p-6 mx-auto mt-10 animate__animated animate__fadeIn">
        <div className="text-center pb-5">
          <h2 className="text-blue-500 font-semibold text-3xl mt-5 ">OUR SERVICES</h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-3 mb-5">
            Custom IT Solutions for Your Successful Business
          </h1>
        </div>

        <div className="services-main mt-5 pt-5 flex flex-wrap justify-center gap-4">
          {[
            {
              icon: "fa-solid fa-hexagon-nodes",
              title: "Ai Development",
              description:
                "We provide advanced AI solutions, including machine learning, natural language processing, and predictive analytics. Our AI services are designed to enhance your business efficiency and drive innovation.",
              link: "/service",
            },
            {
              icon: "fa-solid fa-cloud",
              title: "Cloud Services",
              description:
                "Our cloud solutions enable businesses to scale seamlessly with secure, reliable, and cost-effective cloud infrastructure. From migration to management, we deliver end-to-end cloud services.",
              link: "/service",
            },
            {
              icon: "fa-solid fa-code",
              title: "Web Development",
              description:
                "We design and develop responsive, secure, and visually appealing websites tailored to your business needs. Our web solutions ensure optimal performance and an exceptional user experience.",
              link: "/service",
            },
            {
              icon: "fa-brands fa-apple",
              title: "Apps Development",
              description:
                "We provide advanced AI solutions, including machine learning, natural language processing, and predictive analytics. Our AI services are designed to enhance your business efficiency and drive innovation.",
              link: "/service",
            },
            {
              icon: "fa-solid fa-magnifying-glass",
              title: "SEO Optimization",
              description:
                "Boost your online presence with our expert SEO services. We help improve search engine rankings, drive organic traffic, and enhance your brand visibility.",
              link: "/service",
            },
            {
              icon: "fa-solid fa-phone",
              title: "Call Us For Quote",
              description:
                "Get in touch with us today for a personalized quote tailored to your project needs. Let’s bring your ideas to life!",
              link: "tel:+919558476369",
            },
          ].map((service, index) => (
            <div
              key={index}
              className=" wow  services-boxes rounded-xl h-[20rem] mt-4 p-5 w-full pt-5 sm:w-[48%] lg:w-[32%] flex flex-col justify-between text-center shadow-md"
            >
              <div className="info"><a href={service.link}>
                <div className="mb-5 animate__animated  animate__pulse animate__delay-0.2s  animate__infinite">

                  <i className={`text-5xl text-blue-500   ${service.icon}`}></i>
                </div> </a>
                <h1 className="text-xl font-medium pb-5  ">{service.title}</h1>
                <p>{service.description}</p>
              </div>
              <a className='wow animate__animated animate__pulse animate__infinite' href={service.link}>

                <i
                  className="wow fadeInUp text-blue-500 mx-auto flex items-center justify-center text-2xl fa-solid fa-arrow-right-long"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                ></i>

              </a>
            </div>
          ))}
        </div>
      </main>

      {/* home page form */}

      <main className=" flex flex-col md:flex-row w-[85%] mx-auto p-6 mt-10 md:mb-10 md:pb-10 " >
        <div className="w-full md:w-1/2 h-auto md:h-96 wow animate__animated animate__bounceInLeft">
          <h1 className="text-2xl m-2 text-lg text-blue-500 font-extrabold">REQUEST A QUOTE</h1>
          <h1 className="text-4xl m-2 font-extrabold text-xl/12 leading-[1.4] pb-3">
            Need A Free Quote? <br /> Please Feel Free to Contact Us
          </h1>
          <div className="flex flex-col md:flex-row w-full m-2">
            <p className="flex items-center text-lg">
              <i className="text-2xl text-blue-500 fa-solid fa-reply m-2"></i>
              Reply within 24 hours
            </p>
            <p className="flex items-center text-lg xl-5 m-sm-0 lg:ps-3 md:ps-3">
              <i className="text-2xl text-blue-500 m-2 fa-solid fa-phone"></i>
              24 hrs telephone support
            </p>
          </div>
          <p className="p-2 text-lg text-gray-400">
          Avatara TechnoBiz is a Surat-based digital agency specializing in delivering high-quality, cost-effective, and reliable web and e-commerce solutions. With a commitment to excellence, we ensure result-oriented services tailored to meet the unique 
          </p>
          <div className="call">
            <h1 className="ms-3 mb-5 text-xl text-sky-700 pt-5">
              Call to ask any question
     
            </h1>
            <div className="flex items-center">
              <div className="icon">
                <i className="text-2xl text-blue-500 ms-2 ps-2 rounded-lg fa-solid fa-phone"></i>
              </div>
              <a href="tel:+919558476369">
                <div className="text">
                  <h1 className="text-lg text-black m-2 text-center">+91 9558476369</h1>
                </div>
              </a>
            </div>
            <div className="flex items-center">
              <a href="mailto:avataratechnobiz@gmail.com">
                <div className="icon">
                  <i className="text-2xl text-blue-500 py-2  ms-2 ps-2 rounded-lg fa-solid fa-envelope"></i>
                </div>
              </a>
              <div className="text">
                <h1 className="text-lg text-black m-2 text-center">avataratechnobiz@gmail.com</h1>
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all">
                <div className="icon">
                  <i className="text-3xl py-2 text-blue-500 ms-2 ps-2 rounded-lg fa-brands fa-linkedin"></i>
                </div>
              </a>
              <div className="text">
                <h1 className="text-lg text-black m-2 text-center">Avatara Technobiz</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Home_Form Component */}
        <div className="w-full md:w-1/2 h-auto md:h-96 wow animate__animated animate__bounceInRight" id='requestaquate'>
          <Home_Form />
        </div>
      </main>

{/* review section from another components*/}
    <div className='md:mt-4 md:py-10 xl:m-0 lg:p-0 animate__animate animate__bounceInRight '>
      <section className='md:pt-5 md-:mt-5'>

     <Reviews />
      </section>
    </div>

  {/* company logos slider section */}
 
   <Company_Slider />
 {/* footer */}
 <Footer />
    
    </>
  );
};

export default Home;
