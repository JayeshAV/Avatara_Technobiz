import React from 'react'
import Reviews from "./Home_Pages/Reviews"
import Company_Slider from "./Home_Pages/Company_Slider"
import Footer from "./Footer"
import Home_Form from "./Home_Pages/Home_Form"
import { a } from 'motion/react-client'

const Service = () => {
  return (
   <>
   <div>
    {/* services */}
    <main className="container-fluid w-[85%]  p-6 mx-auto mt-10 animate__animated animate__fadeIn">
        <div className="pb-5 text-center">
          <h2 className="mt-5 text-3xl font-semibold text-blue-500 ">OUR SERVICES</h2>
          <h1 className="mt-3 mb-5 text-4xl font-bold text-gray-800">
            Custom IT Solutions for Your Successful Business
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-5 mt-5 services-main">
        {[
            {
              icon: "fa-solid fa-hexagon-nodes",
              title: "Ai Development",
              description:
                "We provide advanced AI solutions, including machine learning. Our AI services are designed to enhance your business efficiency and drive innovation.",
              link: "/service",
            },
            {
              icon: "fa-solid fa-cloud",
              title: "Cloud Services",
              description:
                "Our cloud solutions enable businesses to scale seamlessly with secure, and cost-effective cloud infrastructure, we deliver end-to-end cloud services.",
              link: "/service",
            },
            {
              icon: "fa-solid fa-code",
              title: "Web Development",
              description:
                "We design and develop responsive, secure, and visually to your business needs. Our web solutions and an exceptional user experience.",
              link: "/service",
            },
            {
              icon: "fa-brands fa-apple",
              title: "Apps Development",
              description:
                "We provide advanced AI solutions, including machine learning. Our AI services are designed to enhance your business efficiency and drive innovation.",
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
                <h1 className="pb-5 text-xl font-medium ">{service.title}</h1>
                <p>{service.description}</p>
              </div>
              <a className='wow animate__animated animate__pulse animate__infinite' href={service.link}>

                <i
                  className="flex items-center justify-center mx-auto text-2xl text-blue-500 wow fadeInUp fa-solid fa-arrow-right-long"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                ></i>

              </a>
            </div>
          ))}
        </div>
      </main>


      <main className=" flex flex-col md:flex-row w-[85%] mx-auto p-6 mt-10 md:mb-10 md:pb-10 " >
        <div className="w-full h-auto md:w-1/2 md:h-96 wow animate__animated animate__bounceInLeft">
          <h1 className="m-2 text-lg text-2xl font-extrabold text-blue-500">REQUEST A QUOTE</h1>
          <h1 className="text-4xl m-2 font-extrabold text-xl/12 leading-[1.4] pb-3">
            Need A Free Quote? <br /> Please Feel Free to Contact Us
          </h1>
          <div className="flex flex-col w-full m-2 md:flex-row">
            <p className="flex items-center text-lg">
              <i className="m-2 text-2xl text-blue-500 fa-solid fa-reply"></i>
              Reply within 24 hours
            </p>
            <p className="flex items-center text-lg xl-5 m-sm-0 lg:ps-3 md:ps-3">
              <i className="m-2 text-2xl text-blue-500 fa-solid fa-phone"></i>
              24 hrs telephone support
            </p>
          </div>
          <p className="p-2 text-lg text-gray-400">
          Avatara TechnoBiz is a Surat-based digital agency specializing in delivering high-quality, cost-effective, and reliable web and e-commerce solutions. With a commitment to excellence, we ensure result-oriented services tailored to meet the unique 
          </p>
          <div className="call">
            <h1 className="pt-5 mb-5 text-xl ms-3 text-sky-700">
              Call to ask any question
     
            </h1>
            <div className="flex items-center">
              <div className="icon">
                <i className="text-2xl text-blue-500 rounded-lg ms-2 ps-2 fa-solid fa-phone"></i>
              </div>
              <a href="tel:+919558476369">
                <div className="text">
                  <h1 className="m-2 text-lg text-center text-black">+91 9558476369</h1>
                </div>
              </a>
            </div>
            <div className="flex items-center">
              <a href="mailto:avataratechnobiz@gmail.com">
                <div className="icon">
                  <i className="py-2 text-2xl text-blue-500 rounded-lg ms-2 ps-2 fa-solid fa-envelope"></i>
                </div>
              </a>
              <div className="text">
                <h1 className="m-2 text-lg text-center text-black">avataratechnobiz@gmail.com</h1>
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all">
                <div className="icon">
                  <i className="py-2 text-3xl text-blue-500 rounded-lg ms-2 ps-2 fa-brands fa-linkedin"></i>
                </div>
              </a>
              <div className="text">
                <h1 className="m-2 text-lg text-center text-black">Avatara Technobiz</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Home_Form Component */}
        <div className="w-full h-auto md:w-1/2 md:h-96 animate__animated animate__bounceInRight" id='requestaquate'>
          <Home_Form />
        </div>
      </main>

  {/* reviews */}
  <Reviews />

  {/* company slider */}
  <Company_Slider />
 
 {/* footer */}
 <Footer />

   </div>
   </>
  )
}

export default Service