import React from 'react'
import Navbar from "./Navbar";
import Slider from "./Slider";
import Main from './main';
import Footer from './Footer';
import './Home.css';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Login from './Login';
import Signup from './Signup';
import DonateBlood from './DonateBlood';
import DonateForm from './DonateForm';
import RequestBlood from './RequestBlood';

export default function Home() {
  return (
    <div>
      {/* <DonateForm/> */}
      <DonateBlood />
      <RequestBlood />
      {/* <Navbar/>
        <Slider/>
        <Main/>
        <Footer/> */}
      {/* <ContactUs/>  */}
      {/* <Gallery/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  )
}

