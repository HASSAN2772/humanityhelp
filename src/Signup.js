import React, { useState } from 'react'
import './Signup.css'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import { TextField } from '@mui/material'
import { GoogleFonts } from 'use-google-fonts'
import axios from 'axios'

export default function Signup() {

    const history = useHistory();
    const [user,setUser]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cpassword:"",
    })
    const handler =(e)=>
    {
        e.preventDefault();
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })

    }
    // const SaveUser= ()=>
    // {     

    //     axios.post('http://localhost:5000/signup',user)
    //     .then(res=>{
    //             console.log(user)
    //     })
    //     .then(err=>{
    //         console.log(err)
    //     })
    // }



 

    const handleSubmit = (e) => {
        e.preventDefault();
        


        const { firstname, lastname, email, password, cpassword } = user 
        if (firstname && lastname && email && password && cpassword) {
            
            if (password === cpassword) {
                const result = axios.post('http://localhost:5000/signup',user).then(res => {
                    console.log(result)
                })
                .then(err => {
                console.log(err)
                })
                    
                alert("Sucessfully Registered")
                // history.push('/login')
            }
            else {
                alert("password Doesn't Match ")
            }
        }
        else {
            alert("Invalid Inputs ")
        }



    }
    console.log(user)
    return (
        <div>
            <Navbar />
            <div className='main-Signup'>
                <div className='Signup-Container'>
                    <div className='SignupLeft-details'>
                        <div className='Signup-Logo'>
                            <img src='/assets/sliderimgs/Logo.png' style={{ width: "250px", height: "130px" }} />
                        </div>
                        <h2>Donate Happiness</h2>
                        <p>First you have to SignUp</p>
                        <p id='SignupLeft-p'>
                            "The greatness of a community is most accurately measured by the compassionate actions of its members."
                        </p>
                        <div className='contributionCompLogos'>
                            <div className='signupContrib-Comp-Logos-img1'>
                                <img src='./assets/sliderimgs/transparent-hand-logo.png' alt='img 1' />
                            </div><div className='signupContrib-Comp-Logos-img2'>
                                <img src='./assets/sliderimgs/shaukat-Khanam-logo.png' alt='img 2' />
                            </div>
                            {/* <div className='signupContrib-Comp-Logos-img3'>
                                <img src='./assets/sliderimgs/edhilogo.png' alt='img 2' />
                            </div> */}

                        </div>
                    </div>
                    <div className='SignupRight-Form'>
                        <div className='SignupForm'>
                            <h2>Register Now</h2>
                            <p>Welcome, Please Put your details in given fields:</p>
                            <form onSubmit={handleSubmit}>
                            <div className='firstname-Signup'>
                                    <TextField
                                        name='firstname'
                                        fullWidth
                                        // value={user.firstname}
                                        // onChange={hander}
                                        // onChange={(e) => {
                                        //     setFirstname(e.target.value)
                                        // }}
                                        label="First Name"
                                        variant="standard"
                                        margin='normal'
                                    />
                                </div>
                                <div className='lastname-Signup'>
                                    <TextField
                                    fullWidth
                                        name='lastname'
                                        // value={user.lastname}
                                        // onChange={hander}
                                        // value={lastname}
                                        // onChange={(e) => {
                                        //     setLastname(e.target.value)
                                        // }}
                                        label="Last Name"
                                        variant="standard"
                                        margin='normal'
                                    />
                                </div>
                                <div className='email-Signup'>
                                    <TextField
                                        name='email'
                                        // value={user.email}
                                        // onChange={hander}
                                        // value={email}
                                        // onChange={(e) => {
                                        //     setEmail(e.target.value)
                                        // }}
                                        label="Email"
                                        variant="standard"
                                        margin='normal'
                                        fullWidth
                                    />
                                </div>
                                <div className='password-Signup'>
                                    <TextField
                                        // required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        variant="standard"
                                        margin='normal'
                                        // value={user.password}
                                        // onChange={hander}
                                        // value={password}
                                        // name="password"
                                        // onChange={(e) => {
                                        //     setPassword(e.target.value)
                                        // }}
                                    />
                                </div>
                                <div className='cpassword-Signup'>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        variant="standard"
                                        fullWidth
                                        margin='normal'
                                        // value={user.cpassword}
                                        // onChange={hander}
                                        // value={cpassword}
                                        // name="cpassword"
                                        // onChange={(e) => {
                                        //     setCPassword(e.target.value)
                                        // }}
                                    />
                                </div>
                                <button type='button'  className='RegisterBtn'>Register</button>
                            </form>
                            {/* <button className='signupBtn'>Login</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
