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
                                <div className='login-textfields'>
                                    <div className='login-textfiled'>
                                        <input  required name='firstname' value={user.firstname} onChange={handler}/><span>Name</span>
                                    </div>

                                </div>
                                </div>
                                <div className='lastname-Signup'>
                                <div className='login-textfields'>
                                    <div className='login-textfiled'>
                                        <input  required  name='lastname' value={user.lastname} onChange={handler}/><span>Last Name</span>
                                    </div>

                                </div>
                                </div>
                                <div className='email-Signup'>
                                <div className='signup-textfields'>
                                    <div className='signup-textfiled'id='sinup-textfield-Div'>
                                        <input  required name='email' value={user.email} onChange={handler}/><span>Email</span>
                                    </div>

                                </div>
                                </div>
                                <div className='password-Signup'>
                                <div className='signup-textfields'>
                                    <div className='signup-textfiled'>
                                        <input type="password" required name='password' value={user.password} onChange={handler}/><span>Password</span>
                                    </div>

                                </div>
                                </div>
                                <div className='cpassword-Signup'>
                                <div className='signup-textfields'>
                                    <div className='signup-textfiled'>
                                        <input type="password" required name='cpassword' value={user.cpassword} onChange={handler}/><span>Confrim Password</span>
                                    </div>

                                </div>
                                </div>
                                <button type='submit' className='RegisterBtn'>Register</button>
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
