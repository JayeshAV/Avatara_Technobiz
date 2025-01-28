import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#091E3E]'>
                <main className='container-fluid w-[85%] h-92 mx-auto mt-10'>
                    <div className="flex flex-wrap justify-between text-white">

                        <div className="w-full md:w-1/4 text-center bg-[#06A3DA] h-full py-5">
                            <div className="icon m-auto py-5">
                                <img src="src/assets/favicon.ico" className='mx-auto' alt="Logo" />
                            </div>
                            <div className="para p-5">
                                We specialize in providing innovative, results-driven services that are tailored to meet the unique needs of our global clientele. With a strong focus on delivering projects on time, we help businesses achieve their digital goals by combining cutting-edge technology with creative excellence.
                            </div>
                        </div>

                        <div className="w-full md:w-1/4 text-left h-full py-5 lg:ps-5">
                            <ul>
                                <li className='p-2 text-3xl py-8 font-medium'>Get In Touch</li>
                                <a href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.140643,72.8845383,17z/data=!4m15!1m8!3m7!1s0x3be0515a0f81fa81:0x4847daa352709464!2sAvatara+Technobiz+LLP!8m2!3d21.1407758!4d72.8843018!10e5!16s%2Fg%2F11wtdy2fs9!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D">
                                    <li className='flex py-1 items-center me-5'><i className="text-sky-200 text-xl p-2 fa-solid fa-location-dot"></i> Office No. 14, 5th floor, Madhuram Arcade-2, Near Madhuram Circle Dindoli, Surat, 394210</li>
                                </a>
                                <a href="mailto:avataratechnobiz@gmail.com">
                                    <li className='flex py-1 items-center'><i className="text-sky-200 text-xl p-2 fa-solid fa-envelope"></i>avataratechnobiz@gmail.com</li>
                                </a>
                                <a href="tel:+919558476369">
                                    <li className='flex items-center'><i className="text-sky-200 text-xl p-2 fa-solid fa-phone"></i> +91 9558476369</li>
                                </a>
                            </ul>
                            <div className="contact-icons m-2">
                                <ul className='flex justify-between w-1/3'>
                                    <a href="mailto:avataratechnobiz@gmail.com">
                                        <li><i className="bg-blue-500 rounded-lg p-2 fa-solid fa-envelope"></i></li>
                                    </a>
                                    <a href="https://www.linkedin.com/company/avatara-technobiz-llp/posts/?feedView=all">
                                        <li><i className="bg-blue-500 rounded-lg p-2 fa-brands fa-linkedin"></i></li>
                                    </a>
                                    <a href="https://www.instagram.com/avataratechnobiz/">
                                        <li><i className="bg-blue-500 rounded-lg p-2 fa-brands fa-instagram"></i></li>
                                    </a>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="w-full md:w-1/4 text-left h-full py-5 lg:ps-5">
                            <ul>
                                <li className='py-2 text-3xl py-8 font-medium'>Quick Links</li>
                                <Link to={"/"}> <li className='py-1'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Home</li></Link>
                                <Link to={"/about"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>About</li></Link>
                                <Link to={"/service"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Service</li></Link>
                                <Link to={"/career"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Career</li></Link>
                                <Link to={"/contact"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Contact Us</li></Link>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="w-full md:w-1/4 text-left h-full py-5 lg:pe-5">
                            <ul>
                                <li className='py-2 text-3xl py-8 font-medium'>Popular Links</li>
                                <Link to={"/about"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Gallery</li></Link>
                                <Link to={"/service"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Features</li></Link>
                                <Link to={"/contact"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Privacy Policy</li></Link>
                                <Link to={"/service"}><li className='py-2'><i className="px-2 text-sm text-sky-200 fa-solid fa-arrow-right animate__animated animate__backInLeft"></i>Services</li></Link>
                            </ul>
                        </div>
                    </div>

                </main>
                  {/* last contact bar */}
                    

                <div className='w-full'>
                    <div className='h-20 bg-slate-900 py-7'>
                      <h2 className='text-center text-white'><a href="/">© avataratechnobiz.com.</a> All Rights Reserved. Designed by <a href="/"> Avatara TechnoBiz </a></h2>
                    </div></div>
            </div></>
    )
}

export default Footer