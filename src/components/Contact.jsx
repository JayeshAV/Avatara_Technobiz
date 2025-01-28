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
        <div className="get-in-touch h-[440px] bg-no-repeat opacity-70  max-h-full bg-[url('src/assets/contactbf.png')] bg-center bg-top">
        <div className="absolute text-center transform -translate-x-1/2 text-touch top-1/5 left-1/2 ">
        <h2 className='text-2xl text-black-400'>Check here For Customer Support</h2>
                <h2 className='font-bold text-black text-8xl'>Get in Touch</h2>
                <p className='py-5 text-red-800 ps-5'>Fill out the form and our team will get back to you as soon as we can !</p>
                <a href="#contact" className='px-3 border-black rounded-md btn border-1 '>Learn more</a>
            </div>
        </div>
      
        </div>
      </div>
     <FAQContactSection />
      {/* contact section */}

      <main id='contact' className="flex flex-col w-[85%] mx-auto p-6 mt-10 md:mb-10 md:pb-10">
  <h1 className="py-6 mb-10 text-5xl font-bold text-center text-blue-500">Contact Us For Inquiries</h1>
  <div className="flex flex-col w-full gap-5 mx-auto md:flex-row md:justify-between">
    {/* Contact Box 1 */}
    <div className="flex-grow h-auto p-3 text-center transition-transform transform border-2 rounded-lg contact-boxes hover:bg-blue-100 hover:scale-105">
      <div className="flex flex-col items-center gap-2">
        <a href="tel:+919558476369" className="flex flex-col items-center rounded-lg">
          <div className="py-5 icon">
            <i className="text-5xl text-blue-500 fa-solid fa-phone"></i>
          </div>
          <div className="text">
            <p className="text-lg font-medium text-center text-black">
              Contact us at +91 9558476369
            </p>
            <p className="text-sm text-center text-gray-600">
              We are available for your inquiries and support.
            </p>
          </div>
        </a>
      </div>
    </div>

    {/* Contact Box 2 */}
    <div className="flex-grow h-auto p-3 text-center transition-transform transform border-2 rounded-lg contact-boxes hover:bg-blue-100 hover:scale-105">
      <div className="flex flex-col items-center gap-2">
        <a href="mailto:avataratechnobiz@gmail.com" className="flex flex-col items-center rounded-lg">
          <div className="py-5 icon">
            <i className="text-5xl text-blue-500 fa-solid fa-envelope"></i>
          </div>
          <div className="text">
            <p className="text-lg font-medium text-center text-black">
              Contact us on avataratechnobiz@gmail.com
            </p>
            <p className="text-sm text-center text-gray-600">
              We are available for your inquiries and support.
            </p>
          </div>
        </a>
      </div>
    </div>

    <div className="flex-grow h-auto p-3 text-center transition-transform transform border-2 rounded-lg contact-boxes hover:bg-blue-100 hover:scale-105">
      <div className="flex flex-col items-center gap-2">
        <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all" className="flex flex-col items-center rounded-lg">
          <div className="py-5 icon">
            <i className="text-5xl text-blue-500 fa-brands fa-linkedin"></i>
          </div>
          <div className="text">
            <p className="text-lg font-medium text-center text-black">
              Contact us on LinkedIn
            </p>
            <p className="text-sm text-center text-gray-600">
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
        <div className="w-full h-auto mx-auto md:w-1/2 md:h-24">
         <img src="src/assets/favicon.ico" className='mx-auto' alt="" />
        </div>
        <div className="w-full h-auto md:w-1/1 md:h-96">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2919732184605!2d72.88172151157193!3d21.140775780455584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0515a0f81fa81%3A0x4847daa352709464!2sAvatara%20Technobiz%20LLP!5e0!3m2!1sen!2sin!4v1737957646204!5m2!1sen!2sin" width="100%" height="350" className='mx-auto rounded-lg'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
      
      <Company_Slider />
      <Footer />
      
    </>
  )
}

export default Contact

