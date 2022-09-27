import React, { useState } from 'react';
import './Login.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link ,useHistory} from 'react-router-dom';
import { TextField } from '@mui/material'
import axios, { Axios } from 'axios';
export default function Login() {

    const history = useHistory()
    
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const SaveUser = async (e) => {
    //     e.preventDefault();

    //     const user = {username,password}
    //     console.log(user.password,user.username)
    //     axios.post('http://localhost:4000/login',user
    //     ).then(res=>
    //     {
    //         console.log(res)
    //     }).then(err=>
    //         {
    //             console.log(err)
    //         })
      
    // }
    
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const handler=(e)=>
    {
        e.preventDefault();
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value

        })}
    const SaveUser= ()=>
    { 
        axios.post('http://localhost:5000/login',user)
        .then(res=>{

            
        alert(res.data.message) 
        })
        .then(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            <Navbar />
            <div className='main-Login'>
                <div className='login-Container'>
                    <div className='loginLeft-details'>
                        <div className='login-Logo'>
                        <img src='/assets/sliderimgs/Logo.png' style={{width:"250px" ,height:"130px"}} />

                        </div>
                        <h2>Donate Happiness</h2>
                        <p>First you have to Login</p>
                        <p id='loginLeft-p'>"The greatness of a community is most accurately measured by the compassionate actions of its members."</p>
                     <Link to='/signup'>  <button  className='loginLeft-SignupBtn'>Sign Up</button></Link> 
                    </div>
                    <div className='loginRight-Form'>
                        <div className='LoginForm'>
                            <h2>Welcome to Donate Happiness</h2>
                            <p>Put your details in given fields:</p>
                            <form>
                                <div className='username-login'>
                                    <TextField
                                    label="Username"
                                    variant="standard"
                                    fullWidth
                                    margin='normal'
                                        name='email'
                                        value={user.email}
                                        onChange={handler}
                                        //     value={username}
                                        //  onChange={(e) => {
                                        //      setUsername(e.target.value)
                                        //  }}
                                        
                                    />
                                </div>
                                <div className='password-login'>
                                    <TextField
                                        label="Password"
                                        type="password"

                                        variant="standard"
                                        fullWidth
                                        margin='normal'
                                        // value={password}
                                        // 
                                        // onChange={(e) => {
                                        //     setPassword(e.target.value)
                                        // }}
                                        name="password"
                                        value={user.password}
                                        onChange={handler}
                                    />
                                </div>
                                <p className='forgotPassword-Para'>Here's <a href=''>Forgot Password ?</a></p>
                                <button type='button' onClick={SaveUser} className='loginBtn'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
