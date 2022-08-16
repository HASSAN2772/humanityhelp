import './ContactUs.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField, FormControl } from '@mui/material'
import CommentForm from './CommentForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'



export default function ContactUs() {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [comment,setComment] = useState("");

  const SaveComment=(e)=>
  {
    console.log(lastName,firstName,email,comment)
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
              <p>Street 21 Gulberg 3 Lahore,Pakistan.</p>
            </div>
            <div className='contactInfoLeft-details'>
              <h2><FontAwesomeIcon id='contactInfoLeft-logo' icon={faEnvelope} size="gl" />  Email Address</h2>
              <p>Webdevsofttechnologies@gmail.com</p>
            </div>
            <div className='contactInfoLeft-details'>
              <h2><FontAwesomeIcon id='contactInfoLeft-logo' icon={faPhone} size="gl" />  Phone Number</h2>
              <p>+923131499465</p>
            </div>
          </div>
          <div className='contactInfoRight'>
            <div className='commentForm'>
              <form>
                <div className='form-control' id='commentFormNameField'>
                  <TextField 
                  value={firstName}
                    name='firstName'
                    onChange={(e)=>{
                     setFirstName(e.target.value)
                    }}
                    
                  id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    
                    />

                </div>
                <div className='form-control' id='commentFormLastNameField'>
                  <TextField id="outlined-basic"
                   label="Last Name"
                  variant="outlined"
                   fullWidth
                   value={lastName}
                   name='lastName'
                   onChange={(e)=>{
                    setLastName(e.target.value)
                   }}
                   />

                </div>
                <div className='form-control' id='commentFormEmailField'>
                  <TextField id="outlined-basic" 
                  label="Email Address"
                   variant="outlined" 
                   fullWidth 
                   value={email}
                    name='email'
                    onChange={(e)=>{
                     setEmail(e.target.value)
                    }}
                   />

                </div>
                <div className='form-control' id='commentFormCommentField'>
                  <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    fullWidth
                    value={comment}
                    name='comment'
                    onChange={(e)=>{
                     setComment(e.target.value)
                    }}
                  />
                </div>
                <button type='button' onClick={SaveComment} className='commentFormSumbitBtn'>Submit</button>
              </form>
            </div>

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
