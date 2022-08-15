import React from 'react'
import Navbar from "./Navbar";
import Slider from "./Slider";
import Main from './main';
import Footer from './Footer';
import './Home.css';
import ContactUs from './ContactUs';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Main/>
        <Footer/>
        <ContactUs/>

    </div>
  )
}
