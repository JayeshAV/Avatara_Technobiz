import React from 'react'
import "./style.css"
import "./Home_Pages/Home_Form"
import Company_Slider from './Home_Pages/Company_Slider'
import FAQContactSection from './Home_Pages/FAQContactSection'
import Footer from './Footer'


const Contact = () => {
  return (
    <>
    {/* bg-image get in touch */}
      <div>
        <div className="container-fluid wow animate__fadeInUp">
        <div className="get-in-touch h-[440px] bg-no-repeat opacity-70  bg-center bg-top max-h-full bg-[url('src/assets/contactbf.png')]">
        <div className="text-touch absolute  transform -translate-x-1/2 translate-y-2/1  left-1/2 top-1/4  text-center">
        <h2 className='text-2xl text-black-400'>Check here For Customer Support</h2>
                <h2 className='font-bold text-black text-8xl'>Get in Touch</h2>
                <p className='ps-5 text-red-800 py-5'>Fill out the form and our team will get back to you as soon as we can !</p>
                <a href="#contact" className='btn px-3  border-1 border-black rounded-md '>Learn more</a>
            </div>
        </div>
      
        </div>
      </div>
     <FAQContactSection />
      {/* contact section */}

      <main id='contact' className="flex flex-col w-[85%] mx-auto p-6 mt-10 md:mb-10 md:pb-10">
  <h1 className="text-center text-5xl text-blue-500 mb-10 font-bold py-6">Contact Us For Inquiries</h1>
  <div className="flex flex-col gap-5 md:flex-row md:justify-between w-full mx-auto">
    {/* Contact Box 1 */}
    <div className="contact-boxes border-2 h-auto text-center p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-transform transform flex-grow">
      <div className="flex flex-col items-center gap-2">
        <a href="tel:+919558476369" className="flex flex-col items-center rounded-lg">
          <div className="icon py-5">
            <i className="text-5xl text-blue-500 fa-solid fa-phone"></i>
          </div>
          <div className="text">
            <p className="text-lg text-black font-medium text-center">
              Contact us at +91 9558476369
            </p>
            <p className="text-sm text-gray-600 text-center">
              We are available for your inquiries and support.
            </p>
          </div>
        </a>
      </div>
    </div>

    {/* Contact Box 2 */}
    <div className="contact-boxes border-2 h-auto text-center p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-transform transform flex-grow">
      <div className="flex flex-col items-center gap-2">
        <a href="mailto:avataratechnobiz@gmail.com" className="flex flex-col items-center rounded-lg">
          <div className="icon py-5">
            <i className="text-5xl text-blue-500 fa-solid fa-envelope"></i>
          </div>
          <div className="text">
            <p className="text-lg text-black font-medium text-center">
              Contact us on avataratechnobiz@gmail.com
            </p>
            <p className="text-sm text-gray-600 text-center">
              We are available for your inquiries and support.
            </p>
          </div>
        </a>
      </div>
    </div>

    <div className="contact-boxes border-2 h-auto text-center p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-transform transform flex-grow">
      <div className="flex flex-col items-center gap-2">
        <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" className="flex flex-col items-center rounded-lg">
          <div className="icon py-5">
            <i className="text-5xl text-blue-500 fa-brands fa-linkedin"></i>
          </div>
          <div className="text">
            <p className="text-lg text-black font-medium text-center">
              Contact us on LinkedIn
            </p>
            <p className="text-sm text-gray-600 text-center">
              We are available for your inquiries and support.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</main>

{/* form section */}

<main className=" flex flex-col md:flex-col w-[85%] mx-auto p-6 mt-10 md:mb-10 md:pb-10" >
        

        {/* Home_Form Component */}
        <div className="w-full md:w-1/2 h-auto md:h-24 mx-auto">
         <img src="src/assets/favicon.ico" className='mx-auto' alt="" />
        </div>
        <div className="w-full md:w-1/1 h-auto md:h-96">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2919732184605!2d72.88172151157193!3d21.140775780455584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0515a0f81fa81%3A0x4847daa352709464!2sAvatara%20Technobiz%20LLP!5e0!3m2!1sen!2sin!4v1737957646204!5m2!1sen!2sin" width="100%" height="350" className='rounded-lg mx-auto'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
      
      <Company_Slider />
      <Footer />
      
    </>
  )
}

export default Contact

