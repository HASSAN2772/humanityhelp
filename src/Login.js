import React, { useState } from 'react';
import './Login.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField } from '@mui/material'
export default function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const SaveUser=()=>
    {
       console.log(username,password)
    }
    
    return (
        <div>
            <Navbar />
            <div className='main-Login'>
                <div className='login-Container'>
                    <div className='loginLeft-details'>
                        <div className='login-Logo'>
                            <img src='' alt='login-logo' />
                        </div>
                        <h2>Donate Happiness</h2>
                        <p>First you have to Login </p>
                        <p id='loginLeft-p'>djgifkdsfj djfjids fjsdhf dfjsdhfsd fsdfjk ufbdfo fjdbfjd fdjfbd b</p>
                        <button className='loginLeft-SignupBtn'>Sign Up</button>
                    </div>
                    <div className='loginRight-Form'>
                        <div className='LoginForm'>
                            <h2>Welcome Donate Happiness</h2>
                            <p>Put your details in given fields</p>
                            <form>
                                <div className='username-login'>
                                    <TextField 
                                    name='username'
                                    value={username}
                                    onChange={(e)=>
                                    {
                                        setUsername(e.target.value)
                                        }}
                                        label="Username"
                                        variant="standard"
                                        fullWidth

                                        margin='normal'
                                        

                                    />
                                </div>
                                <div className='password-login'>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="standard"

                                        fullWidth
                                        margin='normal'
                                        value={password}
                                        name="password"
                                        onChange={(e)=>
                                        {
                                            setPassword(e.target.value)
                                        }}

                                    />
                                </div>
                                <p className='forgotPassword-Para'>Here's <a href=''>Forgot Password ?</a></p>

                                <button type='button' onClick={SaveUser} className='loginBtn'>Login</button>



                            </form>

                            {/* <button className='SignupBtn'>Sign Up</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}
