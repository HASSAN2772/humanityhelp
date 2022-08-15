import React from 'react'
import './ContactUs.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className='contactUs-row-1'>
        <div className='contactUs-Header'>
          <div className='contactUs-HeaderLogo'>
            <h1>Contact US</h1>

          </div>
        </div>
      </div>
      <div className='contactUs-row-2'>
        <div className='contactInfo'>
          <div className='contactInfoLeft'>
            <div className='contactInfoLeft-details'>
              <h1>Office Address</h1>
              <p>203, Envato Labs, Behind Alis Steet,Melbourne,Australia</p>
            </div>
            <div className='contactInfoLeft-details'>
              <h1>Office Address</h1>
              <p>203, Envato Labs, Behind Alis Steet,Melbourne,Australia</p>
            </div>
            <div className='contactInfoLeft-details'>
              <h1>Office Address</h1>
              <p>203, Envato Labs, Behind Alis Steet,Melbourne,Australia</p>
            </div>
          </div>
          <div className='contactInfoRight'>
            
          </div>
        </div>
      </div>
      <div className='contactUs-row-3'>
        <div className='contactMap'>
          map
        </div>
      </div>
      <Footer />
    </div>
  )
}
