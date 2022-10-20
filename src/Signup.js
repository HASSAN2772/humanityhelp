import React, { useState ,useEffect} from 'react'
import './Signup.css'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import { TextField } from '@mui/material'
import { GoogleFonts } from 'use-google-fonts'
import axios from 'axios'

export default function Signup() {

    const history = useHistory();
    const [formErrors,setFormErrors] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)
    const [user,setUser]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cpassword:"",
    })
    const hander = (e) =>
    {
        e.preventDefault();
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })

    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
        //   console.log(user)
        }
      },[formErrors])
      const validate = (values) =>
      {
          const errors = {};
          const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if(!values.firstname)
          {
            errors.firstname = "Firstname is Required*";
          }
          if(!values.lastname)
          {
            errors.lastname = "Lastname is Required*";
          }
          if(!values.email)
          {
            errors.email = "Email is Required*";
          } 
          else if(!regex.test(values.email))

          {
         errors.email = "Please enter valid Email address*"
          }
          if(!values.password)
          {
            errors.password = "Password is Required*";
          }
          else if(values.password.length < 8)
          {
            errors.password = "Password should have 8 characters*";

          } 
      
        if(!values.cpassword)
          {
            errors.cpassword = "Confirm Password is Required*";
          }
       
          else if(values.password !== values.cpassword)
          {
            errors.cpassword = "Confirm Pasword should be Same as Password*";

          }
         
        
          return errors
      }
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(user))
        
    
        const { firstname, lastname, email, password, cpassword } = user 
        if (firstname && lastname && email && password && cpassword) {
            if (password === cpassword) {
                const result = axios.post('http://localhost:5000/api/v1/register',user).then(res => 
                {
                    if(res.status === 204)
                    {
                        alert("this email already exist ")
                        setIsSubmit(false)  
                    }
                   else
                   {
                    setIsSubmit(true) 
                    alert("Successfully Registered")
                    history.push("/login")
                   }   
                console.log(res)
                })
                .catch(err => {
                console.log(err)
                })  
            }
            else {     
            }
        }
        else {    
        }}
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
                                        value={user.firstname}
                                        onChange={hander}
                                        
                                        label="First Name"
                                        variant="standard"
                                        margin='normal'
                                    />
               <p id='error-message'> {formErrors.firstname}</p>
                                </div>
                                <div className='lastname-Signup'>
                                    <TextField
                                    fullWidth
                                        name='lastname'
                                        value={user.lastname}
                                        onChange={hander}
                                       
                                        label="Last Name"
                                        variant="standard"
                                        margin='normal'
                                    />
                                                   <p id='error-message'> {formErrors.lastname}</p>

                                </div>
                                <div className='email-Signup'>
                                    <TextField
                                        name='email'
                                        value={user.email}
                                        onChange={hander}
                                        
                                        label="Email"
                                        variant="standard"
                                        margin='normal'
                                        fullWidth
                                    />
                                                   <p id='error-message'> {formErrors.email}</p>

                                </div>
                                <div className='password-Signup'>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        variant="standard"
                                        margin='normal'
                                        name='password'

                                        value={user.password}
                                        onChange={hander}
                                        
                                    />
                                                   <p id='error-message'> {formErrors.password}</p>

                                </div>
                                <div className='cpassword-Signup'>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        variant="standard"
                                        fullWidth
                                        name='cpassword'
                                        margin='normal'
                                        value={user.cpassword}
                                        onChange={hander}
                                        
                                    />
                                                   <p id='error-message'> {formErrors.cpassword}</p>

                                </div>
                                <button type='submit'  className='RegisterBtn'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
