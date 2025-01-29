import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./components/style.css"
import "./lib/owlcarousel/assets/owl.carousel.css";
import "./lib/owlcarousel/assets/owl.theme.default.css";
import "jquery";
// import "owl.carousel";


// import WOW from "wowjs";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
