import './ContactUs.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import axios from 'axios';

export default function ContactUs() {

  const[firstname,setFirstname] = useState("");
  const[lastname,setLastname] = useState("");
  const[email,setEmail] = useState("");
  const[comment,setComment] = useState("");

  const SaveUser = () =>
  {
    const commentData = {firstname,lastname,email,comment};
    console.log(commentData)
    axios.post("http://localhost:5000/comment",commentData)
    .then(res => {
      console.log(res)
    }).then(err =>
      {
        console.log(err)
      })
  }
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
              <h2><FontAwesomeIcon id='contactInfoLeft-logo' icon={faLocationDot} size="gl" />  Office Address</h2>
              <p>Street #21 Building #1 Gulberg 3 Lahore,Pakistan.</p>
              <p>127 Oxford Street Gulberg 3 Islamabad,Pakistan.</p>
            </div>
            <div className='contactInfoLeft-details'>
              <h2><FontAwesomeIcon id='contactInfoLeft-logo' icon={faEnvelope} size="gl" />  Email Address</h2>
              <p>Webdevsofttechnologies@gmail.com</p>
              <p>Futuretechnologies@gmail.com</p>
            </div>
            <div className='contactInfoLeft-details'>
              <h2><FontAwesomeIcon id='contactInfoLeft-logo' icon={faPhone} size="gl" />  Phone Number</h2>
              <p>+923131499465</p>
              <p>+42043509499487</p>
            </div>
          </div>
          <div className='contactInfoRight'>
            <h1>Comment Here</h1>
            <div className='commentForm'>
                
            <div className='comment-textfields'>
              <div className='comment-textfiled'>
                <input type="text" required /><span>Name</span>
              </div>
              <div className='comment-textfiled'>
                <input type="text" required max="12" /><span>Last</span>  
              </div>
            </div>
            <div className='comment-textfields'>
              <div className='comment-textfiled' id='comment-textfiled-Email'>
                <input type="text" required autoComplete='true' /><span>Email</span>
              </div>
              
            </div>
            <div className='comment-textfields'>
              <div className='comment-textfiled' id='comment-textfiled-comBox'>
                <input type="text" required /><span>Comment</span>
              </div>
              
            </div>
                <button type='submit' onClick={SaveUser} className='commentFormSumbitBtn'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className='contactUs-row-3'>
        <div className='contactMap'>
          <iframe src="https://www.google.com/maps/d/embed?mid=1TfXeVTwnym2Gk4ID7wKP1aXB-H9NfxQ&ehbc=2E312F" width="100%" height="550px" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
