import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Career from './Career'
import Contact from './Contact'
import  JobApplicationForm  from './Home_Pages/JobAppicationForm'

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
                    </Routes>
            </div>

        </>
    )
}

export default AllRoutes