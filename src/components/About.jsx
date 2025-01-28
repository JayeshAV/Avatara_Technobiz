import React, { useState } from 'react'
import Company_Slider from '../components/Home_Pages/Company_Slider'
import Footer  from './Footer';
const About = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div>


        {/* about us */}

        <main className="container max-w-screen-1xl mx-auto flex flex-col md:flex-row items-center mt-10 py-6 rounded-lg bg-white">

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
              <a href="/" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
                +91 9558476369
              </a>
              <a href="/contact" className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
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

        {/* compnay logo */}

        <Company_Slider />

        {/* FAQS ABOUT SECTION */}

        <div className="main container-fluid w-[85%]  p-6 mx-auto mt-10">
          <div className="w-full mx-auto space-y-4">
            <h2 className="text-blue-500 font-semibold text-3xl mt-5 p-3 text-center">FAQS
            </h2>
            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(1)}
              >
                What is AI Development, and how can it benefit my business? 
              </button>
              {activeIndex === 1 && (
                <div className="px-6 pb-4 p-3">
                  AI Development involves creating advanced solutions using machine learning, natural language processing, and predictive analytics. These technologies enhance business efficiency, automate tasks, and provide data-driven insights.
                </div>
              )}
            </div>

            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(2)}
              >
                What kind of Cloud Services do you offer?
              </button>
              {activeIndex === 2 && (
                <div className="px-6 pb-4 p-3">
                  We provide secure, scalable, and cost-effective cloud solutions, including infrastructure migration, cloud management, and end-to-end cloud services tailored to your business needs.
                </div>
              )}
            </div>

            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(3)}
              >
                Do you create custom websites?
              </button>
              {activeIndex === 3 && (
                <div className="px-6 pb-4 p-3">
                  Yes, we specialize in Web Development, offering responsive, secure, and visually appealing websites designed to meet your specific business goals.
                </div>
              )}
            </div>

            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(4)}
              >
                Can you develop mobile apps for both iOS and Android?
              </button>
              {activeIndex === 4 && (
                <div className="px-6 pb-4 p-3">
                  Absolutely! Our Apps Development services include creating feature-rich, user-centric mobile applications for both iOS and Android platforms.
                </div>
              )}
            </div>

            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(5)}
              >
                How do your SEO Optimization services work?
              </button>
              {activeIndex === 5 && (
                <div className="px-6 pb-4 p-3">
                  Our SEO Optimization services help improve your search engine rankings, drive organic traffic, and enhance your brand visibility using expert techniques and best practices.
                </div>
              )}
            </div>

            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(6)}
              >
                How do I get a quote for my project?
              </button>
              {activeIndex === 6 && (
                <div className="px-6 pb-4 p-3">
                  You can contact us directly at +91 9558476369 or use our "Request A Quote" feature to receive a personalized proposal.
                </div>
              )}
            </div>

            <div className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none "
                onClick={() => toggleAccordion(7)}
              >
                Do you provide ongoing support for your services?
              </button>
              {activeIndex === 7 && (
                <div className="px-6 pb-4 p-3">
                  Yes, we offer comprehensive support to ensure the solutions we deliver continue to meet your business needs effectively.
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(8)}
              >
                How do I get started with your services?
              </button>
              {activeIndex === 8 && (
                <div className="px-6 pb-4 p-3">
                  Simply reach out to us through the contact details provided or schedule a consultation to discuss your project requirements.
                </div>
              )}
            </div>
          </div>

        </div>

        <div className="container mx-auto py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="p-6 bg-white shadow-lg rounded-lg content-1 h-96 text-center flex items-center justify-center animate__animated   animate__slow animate__delay-0.2s animate__infinite">
              <div className="py-10">
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                <p className="text-gray-200 mb-4">
                  What sets us apart from other IT service providers?
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-6 bg-white shadow-lg rounded-lg content-2 h-96 flex items-center justify-center ">
              <div className="text-center">
                <div className='py-10'>
                  <h2 className="text-4xl font-bold text-white mb-4 ">What we do?</h2>
                  <p className="text-gray-200 mb-4  ">
                    Solutions drive business success by delivering innovative IT
                    management
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      {/* footer section */}

      <Footer />




      </div>
    </>
  )
}

export default About