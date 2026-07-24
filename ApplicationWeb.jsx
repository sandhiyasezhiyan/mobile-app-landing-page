import { BrowserRouter, Route,Routes } from "react-router-dom";
import Menus from "./Menus";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import MoreDemos from "./Pages/MoreDemos";
import ContactUs from "./Pages/ContactUs";
import Hero from "./Components/Hero";
import History from './Components/History';

import './CSS/Application.css'
import Displaybuttons from "./Components/Displaybuttons";
import Capabilities from "./Components/Capabilities";
import Features from "./Components/Features";
import WhyChoose from "./Components/WhyChoose";
import Footer from "./Components/Footer";


function ApplicationWeb()
{
    return(
        <BrowserRouter>
        <Menus />
        <Hero />
        <History />
        <Displaybuttons />
        <Capabilities />
        <Features />
        <WhyChoose />
        <Footer />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/moredemos" element={<MoreDemos />} />
            <Route path="/contactus" element={<ContactUs />} />
           
        </Routes>
        </BrowserRouter>
    )
}
export default ApplicationWeb;