import React from 'react'
import "./style.css"
import Company_Slider from "./Home_Pages/Company_Slider"
import Footer from "./Footer"
import JobApplicationForm from './Home_Pages/JobAppicationForm'

const Career = () => {
  return (
    <>
      <div className="relative px-4 py-8 text-center text-white bg-blue-500 bg-opp h-96">
        <div className='py-10'>
          <h1 className="py-8 mb-4 text-4xl font-bold lg:text-5xl">
            Explore Exciting Career Opportunities with Us
          </h1>
          <p className="text-base lg:text-lg">
            Discover the power of our feature spotlight and unleash the full potential of our offerings.
          </p>
        </div>
      </div>
      {/* career sec 3 */}
      <main className="container p-6 mx-auto mt-10 about-sec-3">
        <div className="flex flex-col justify-around gap-6 lg:flex-row">
          {/* Left Section: Picture */}
          <div className="flex-shrink-0 rounded-full picture lg:w-1/3">
            <img
              src="https://www.krashitservices.com/assets/img/about.jpg"
              alt=""
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>

          {/* Right Section: Text */}
          <div className="py-8 text lg:w-1/2">
            <h1 className="mb-4 text-2xl font-extrabold lg:text-5xl heading">
              Diversity, Equity <br /> & Inclusion
            </h1>
            <p className="py-5 text-sm leading-relaxed text-gray-700 lg:text-base para" style={{ fontFamily: "poppins", lineHeight: 1.5 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid tenetur incidunt alias, eius, autem, deleniti ipsa suscipit repellendus recusandae unde architecto cum a magnam. Odio quo temporibus non repellendus?
              Error, unde sequi saepe quidem quaerat iusto, eius, nobis sed similique hic consequuntur earum doloremque mollitia sint est? Voluptatem minima suscipit numquam eligendi possimus qui deleniti ab libero doloremque tempora!
              Rem aperiam tempore tempora quam quaerat rerum delectus enim repellendus, facilis tenetur animi hic omnis quas possimus culpa, voluptas odio repellat sapiente inventore exercitationem maiores eaque porro eveniet. At, error.
              Dicta id accusantium dolorum aliquid cum, animi facilis labore amet dolores laborum, dolor enim quas voluptatum eligendi tempora blanditiis illo non qui odit assumenda. Iusto rem deserunt hic blanditiis corrupti.
            </p>
          </div>
        </div>
      </main>

      {/* misson section */}
  
      <main className="container p-6 mx-auto mt-10">
  {/* Heading Section */}
  <div className="py-5 text">
    <h1 className="py-10 text-4xl font-bold text-center text-sky-800">
      Interested in Our Mission
    </h1>
  </div>

  {/* Boxes Section */}
  <div className="flex flex-col md:flex-row md:justify-around lg:justify-between gap-8 w-[85%] mx-auto">
    {/* Box 1 */}
    <div className="w-full text-center boxes md:w-1/4">
      <div className="m-auto icon">
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
    <div className="w-full text-center boxes md:w-1/4">
      <div className="m-auto icon">
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
    <div className="w-full text-center boxes md:w-1/4">
      <div className="m-auto icon">
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
    <h1 className="py-10 mb-4 text-3xl font-bold text-center text-gray-800 text-sky-800">
      Are You Ready To Join Our Team?
    </h1>

    <div className="flex flex-wrap justify-around">
      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="mb-2 text-lg font-medium text-gray-800">Python Developer</h2>
        <p className="mb-4 text-gray-600">Experience - 0 to 2 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="mb-2 text-lg font-medium text-gray-800">React.js Developer</h2>
        <p className="mb-4 text-gray-600">Experience - 0 to 2 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="mb-2 text-lg font-medium text-gray-800">Node.js Developer</h2>
        <p className="mb-4 text-gray-600">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="mb-2 text-lg font-medium text-gray-800">React Native Developer</h2>
        <p className="mb-4 text-gray-600">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="mb-2 text-lg font-medium text-gray-800">Web Designer</h2>
        <p className="mb-4 text-gray-600">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Apply Now</button>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[46%] ease-in-out">
        <h2 className="mb-2 text-lg font-medium text-gray-800">BDE</h2>
        <p className="mb-4 text-gray-600">Experience - 0 to 3 years | Full-time, Temporary or Contract</p>
        <a href="#applyhere">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Apply Now</button>
        </a>
      </div>
    </div>
  </div>
</main>

  
  {/* Form Section */}
 <main className=" flex flex-col md:flex-row w-[77%] mx-auto p-6 mt-10 md:mb-10 md:pb-10" style={{marginBottom:"8%"}}>
        <div className="w-full h-auto md:w-1/2 md:h-96">
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
        <div className="w-full h-auto md:w-1/2 md:h-96" id='applyhere'>
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