import React from 'react'
import "./style.css"
import Company_Slider from "./Home_Pages/Company_Slider"
import Footer from "./Footer"
import JobApplicationForm from './Home_Pages/JobAppicationForm'

const Career = () => {
  return (
    <>
      <div className="bg-blue-500 text-white py-8 px-4 bg-opp h-96 relative text-center">
        <div className='py-10'>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 py-8">
            Explore Exciting Career Opportunities with Us
          </h1>
          <p className="text-base lg:text-lg">
            Discover the power of our feature spotlight and unleash the full potential of our offerings.
          </p>
        </div>
      </div>
      {/* career sec 3 */}
      <main className="container mx-auto p-6 about-sec-3 mt-10">
        <div className="flex flex-col lg:flex-row gap-6 justify-around">
          {/* Left Section: Picture */}
          <div className="picture flex-shrink-0 lg:w-1/3 rounded-full">
            <img
              src="src/assets/about-sec-3.jpg"
              alt=""
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>

          {/* Right Section: Text */}
          <div className="text lg:w-1/2 py-8">
            <h1 className="text-2xl lg:text-5xl font-extrabold mb-4 heading">
              Diversity, Equity <br /> & Inclusion
            </h1>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed para py-5" style={{ fontFamily: "poppins", lineHeight: 1.5 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid tenetur incidunt alias, eius, autem, deleniti ipsa suscipit repellendus recusandae unde architecto cum a magnam. Odio quo temporibus non repellendus?
              Error, unde sequi saepe quidem quaerat iusto, eius, nobis sed similique hic consequuntur earum doloremque mollitia sint est? Voluptatem minima suscipit numquam eligendi possimus qui deleniti ab libero doloremque tempora!
              Rem aperiam tempore tempora quam quaerat rerum delectus enim repellendus, facilis tenetur animi hic omnis quas possimus culpa, voluptas odio repellat sapiente inventore exercitationem maiores eaque porro eveniet. At, error.
              Dicta id accusantium dolorum aliquid cum, animi facilis labore amet dolores laborum, dolor enim quas voluptatum eligendi tempora blanditiis illo non qui odit assumenda. Iusto rem deserunt hic blanditiis corrupti.
            </p>
          </div>
        </div>
      </main>

      {/* misson section */}
  
      <main className="container mx-auto p-6 mt-10">
  {/* Heading Section */}
  <div className="text py-5">
    <h1 className="text-4xl text-center font-bold text-sky-800 py-10">
      Interested in Our Mission
    </h1>
  </div>

  {/* Boxes Section */}
  <div className="flex flex-col md:flex-row md:justify-around lg:justify-between gap-8 w-[85%] mx-auto">
    {/* Box 1 */}
    <div className="boxes text-center w-full md:w-1/4">
      <div className="icon m-auto">
        <i className="p-3 rounded-full text-3xl text-blue-900 bg-[#F4F7FF] fa-solid fa-people-group"></i>
      </div>
      <div className="info">
        <h1 className="py-3 text-xl font-semibold boxes-heading">
          We put clients first
        </h1>
        <p className="px-5 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur eius,
        </p>
      </div>
    </div>

    {/* Box 2 */}
    <div className="boxes text-center w-full md:w-1/4">
      <div className="icon m-auto">
        <i className="p-3 rounded-full text-3xl text-blue-900 bg-[#F4F7FF] fa-solid fa-rocket"></i>
      </div>
      <div className="info">
        <h1 className="py-3 text-xl font-semibold boxes-heading">
          We're always growing
        </h1>
        <p className="px-5 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur eius,
        </p>
      </div>
    </div>

    {/* Box 3 */}
    <div className="boxes text-center w-full md:w-1/4">
      <div className="icon m-auto">
        <i className="p-3 rounded-full text-3xl text-blue-900 bg-[#F4F7FF] fa-solid fa-people-group"></i>
      </div>
      <div className="info">
        <h1 className="py-3 text-xl font-semibold boxes-heading">
          We're accessible  
        </h1>
        <p className="px-5 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur eius,
        </p>
      </div>
    </div>
  </div>
</main>

{/* jobs vacancy section */}
<main>
  <div className="bg-white py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-[85%] m-auto">
    <h1 className="text-3xl text-center py-10 font-bold text-gray-800 mb-4 font-bold text-sky-800">
      Are You Ready To Join Our Team?
    </h1>

    <div className="flex flex-wrap justify-around">
      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Python Developer</h2>
        <p className="text-gray-600 mb-4">Experience - 0 to 2 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="text-lg font-medium text-gray-800 mb-2">React.js Developer</h2>
        <p className="text-gray-600 mb-4">Experience - 0 to 2 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Node.js Developer</h2>
        <p className="text-gray-600 mb-4">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="text-lg font-medium text-gray-800 mb-2">React Native Developer</h2>
        <p className="text-gray-600 mb-4">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Web Designer</h2>
        <p className="text-gray-600 mb-4">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="text-lg font-medium text-gray-800 mb-2">BDE</h2>
        <p className="text-gray-600 mb-4">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">Apply Now</button>
        </a>
      </div>
    </div>
  </div>
</main>

  
  {/* Form Section */}
 <main className=" flex flex-col md:flex-row w-[77%] mx-auto p-6 mt-10 md:mb-10 md:pb-10" style={{marginBottom:"8%"}}>
        <div className="w-full md:w-1/2 h-auto md:h-96">
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
        <div className="w-full md:w-1/2 h-auto md:h-96" id='applyhere'>
         <JobApplicationForm />
        </div>
      </main>

      {/* company logos collab */}
<br /><br />
    
     <Company_Slider />
     <Footer />

    </>
  )
}

export default Career