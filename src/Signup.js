import React, { useState } from 'react'
import './Signup.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField } from '@mui/material'

export default function Signup() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const SaveUser = () => {
        console.log(firstname, lastname, email, password, cpassword)
    }
    return (
        <div>
            <Navbar />
            <div className='main-Signup'>
                <div className='Signup-Container'>
                    <div className='SignupLeft-details'>
                        <div className='Signup-Logo'>
                            <img src='' alt='Signup-logo' />
                        </div>
                        <h2>Donate Happiness</h2>
                        <p>First you have to SignUp</p>
                        <p id='SignupLeft-p'>djgifkdsfj djfjids fjsdhf dfjsdhfsd fsdfjk ufbdfo fjdbfjd fdjfbd b</p>
                        <div className='contributionCompLogos'>
                            compines logo
                        </div>
                    </div>
                    <div className='SignupRight-Form'>
                        <div className='SignupForm'>
                            <h2>Register Now</h2>
                            <p>Put your details in given fields:</p>
                            <form>
                                <div className='firstname-Signup'>
                                    <TextField
                                        name='firstname'
                                        value={firstname}
                                        onChange={(e) => {
                                            setFirstname(e.target.value)
                                        }}
                                        label="First Name"
                                        variant="standard"
                                        margin='normal'
                                    />
                                </div>
                                <div className='lastname-Signup'>
                                    <TextField
                                        name='lastname'
                                        value={lastname}
                                        onChange={(e) => {
                                            setLastname(e.target.value)
                                        }}
                                        label="Last Name"
                                        variant="standard"
                                        margin='normal'
                                    />
                                </div>
                                <div className='email-Signup'>
                                    <TextField
                                        name='email'
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        label="Email"
                                        variant="standard"
                                        margin='normal'
                                        fullWidth
                                    />
                                </div>
                                <div className='password-Signup'>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="standard"
                                        margin='normal'
                                        value={password}
                                        name="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className='cpassword-Signup'>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        variant="standard"
                                        fullWidth
                                        margin='normal'
                                        value={cpassword}
                                        name="cpassword"
                                        onChange={(e) => {
                                            setCPassword(e.target.value)
                                        }}
                                    />
                                </div>
                                <button type='button' onClick={SaveUser} className='RegisterBtn'>Register</button>
                            </form>
                            <button className='LoginBtn'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
