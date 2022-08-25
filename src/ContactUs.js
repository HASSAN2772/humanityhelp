import './ContactUs.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

export default function ContactUs() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const SaveComment = (e) => {
    console.log(lastName, firstName, email, comment)
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
              <form>
                <div className='form-control' id='commentFormNameField'>
                  <TextField
                    value={firstName}
                    name='firstName'
                    onChange={(e) => {
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
                    onChange={(e) => {
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
                    onChange={(e) => {
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
                    onChange={(e) => {
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
          {/* <iframe src="https://www.google.com/maps/d/edit?mid=1TfXeVTwnym2Gk4ID7wKP1aXB-H9NfxQ&usp=sharing" width="100%" height="550px" /> */}
          <iframe src="https://www.google.com/maps/d/embed?mid=1TfXeVTwnym2Gk4ID7wKP1aXB-H9NfxQ&ehbc=2E312F" width="100%" height="550px" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
