import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Career from './Career'
import Contact from './Contact'
import  JobApplicationForm  from './Home_Pages/JobAppicationForm'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Price from './Price'
import Feature from './Feature'
import Team from './Team'
import Testimonial from './Testimonial'
import FreeQuate from "./FreeQuate"

const AllRoutes = () => {

    return (
        <>
            <div>         
                    <Routes>
                        
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/service" element={<Service />}></Route>
                        <Route path="/career" element={<Career />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/job" element={<JobApplicationForm />}></Route>
                        <Route path="/blog" element={<Blog />}></Route>
                        <Route path="/blogdetails" element={<BlogDetails />}></Route>
                        <Route path="/price" element={<Price />}></Route>
                        <Route path="/feature" element={<Feature />}></Route>
                        <Route path="/team" element={<Team />}></Route>
                        <Route path="/testimonial" element={<Testimonial />}></Route>
                        <Route path="/free" element={<FreeQuate />}></Route>
                        

                    </Routes>
            </div>

        </>
    )
}

export default AllRoutes