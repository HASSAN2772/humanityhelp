import React, { useState,useEffect } from 'react'
import './RequestBlood.css'
import { MenuItem, FormControl, Select, TextField, InputLabel, Label, Autocomplete } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'

export default function DonateBlood() {

  const [formErrors,setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)
  const [requestuser,setRequestuser] = useState({

    name:"",
    cnic:"",
    city:"",
    blood:"",
    age:"",
    phone:"",
    address:"",

})

const handler = (e) =>
{
  e.preventDefault();
  const { name,value} = e.target
  setRequestuser({
    ...requestuser,
    [name]:value

  })
}
const handleSubmit = (e)=>
{
  e.preventDefault();
  setFormErrors(validate(requestuser)) ;
  setIsSubmit(true);
  // console.log(requestuser)
}
useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit)
    {
      console.log(requestuser)
    }
},[formErrors])
const validate = (values) =>
{
      const errors = {};
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!values.name)
      {
        errors.name = "Name is Require";
      }
      if(!values.cnic)
      {
        errors.cnic = "CNIC is Require";
      }
      if(!values.city)
      {
        errors.city = "City is Require";
      } if(!values.blood)
      {
        errors.blood = "Blood is Require";
      } if(!values.age)
      {
        errors.age = "Age is Require";
      }
      else if(values.age < 18)
      {
        errors.age = "Only 19 Plus and Request Blood"
      }
      if(!values.phone)
      {
        errors.phone = "Phone is Require";
      } 
      if(!values.address)
      {
        errors.address = "Address is Require";
      }
      return errors
}

  return (
    <div>
      <Navbar />
      <div id='main-requestBloodForm'>
        <div className='requestBlood-conatiner'>
          <form onSubmit={handleSubmit}  className='requestBloodAmountForm' >
            <h1>Request Blood</h1>
            <p>Its Our Duty to Help Needy People Who are Facing Problmes Related Bloods or Charity.</p>
            <div className='requested-textfields'>
              <div className='requested-textfiled'>
                <input type="text" name="name" value={requestuser.name}  onChange={handler} /><span>Name</span>
              </div>
              <p>{formErrors.name}</p>
              <div className='requested-textfiled'>
                <input type="number" name="cnic" value={requestuser.cnic}  onChange={handler}  /><span>CNIC</span>  
              </div>
            </div>
            {/* type and city */}
            <div className='requested-textfields-type-city'>
              <div className='optionfileds'>
              <select  onChange={handler} name="city" value={requestuser.city} >
              <option>Select City</option>

                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Multan</option>
                 </select><span>Select city</span>
              </div>
              <div className='optionfileds'>
              <select name="blood" onChange={handler}  value={requestuser.blood}>
              <option>Select Blood</option>
              <option>A+</option>
                <option>A-</option> 
                <option>AB+</option>
                <option>AB-</option> 
                <option>O+</option>
                <option>O-</option> 
                 </select><span>Select Blood</span>
              </div>
            </div>
            <div className='requested-textfields'>
              <div className='requested-textfiled'>
                <input type="number" name="age" value={requestuser.age}  onChange={handler} /><span>Requester Age</span>
              </div>
              <p>{formErrors.age}</p>
            </div>
            <div className='requested-textfields'>
              <div className='requested-textfiled'>
                <input type="text" name="phone" value={requestuser.phone}  onChange={handler} /><span>Phone No</span>
              </div>
              
            </div>
            <div className='requested-textfields'>
              <div id='requested-textfiled-addressDiv' className='requested-textfiled'>
                <input type="text" name="address" value={requestuser.address}  onChange={handler} /><span> Residental Address</span>
              </div>
              
            </div>
            <button type='submit' className='requestAmountBtn'>Request</button>
            
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
