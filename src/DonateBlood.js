import React, { useState } from 'react'
import './DonateBlood.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField, MenuItem, InputLabel, Select, FormControl} from '@mui/material';



export default function DonateBlood() {

  // const [blood, setBlood] = useState("");
  // const handleChangeblood = (e) => {

  //   setBlood(e.target.value)
  // }
  //   const [city, setCity] = useState("");
  // const handleChangecity = (e) => {

  //   setCity(e.target.value)

  // }

  const [name,setname] = useState("")
  const [user,setUser] = useState({

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

  setUser({
    ...user,
    [name]:value

  })
}
const handleSubmit = (e)=>
{e.preventDefault();
  console.log(user)
}

  return (
    <div>
      <Navbar />
      <div className='main-donateBloodForm' id='main-donateBloodForm'>
        <div className='donateBlood-conatiner' >
          <form onSubmit={handleSubmit}  className='donateBloodAmountForm'  >
            <h1>Donate Blood</h1>
            <p>Donate Blood for Saving Millions of People and Child Lifes. </p>
            
            <div className='textfields'>
              <div className='textfiled'>
                <input type="text" name='name' onChange={handler} value={user.name}  required /><span>Name</span>
              </div>
              <div className='textfiled'>
                <input type="number" required  name='cnic'onChange={handler}  value={user.cnic} /><span>CNIC</span>  
              </div>
            </div>
            {/* type and city */}
            <div className='textfields-type-city'>
              <div className='optionfileds'>
              <select required name='city'onChange={handler}  value={user.city} >
              <option>Select City</option> 

                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Faisalabad</option>
                 </select><span>Select city</span>
              </div>
              <div className='optionfileds'>
              <select required name='blood'onChange={handler}  value={user.blood} >
              <option>Select Blood</option> 
               <option>A+</option>
                <option>A-</option> 
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option> 
                <option>O+</option>
                <option>O-</option> 
                 </select><span>Select Blood</span>
              </div>
            </div>
            <div className='textfields'>
              <div className='textfiled'>
                <input type="number" required name='age'onChange={handler}  value={user.age} /><span>Requester Age</span>
              </div>
              
            </div>
            <div className='textfields'>
              <div className='textfiled'>
                <input type="text" required name='phone' onChange={handler}  value={user.phone} /><span>Phone No</span>
              </div>
              
            </div>
            <div className='textfields'>
              <div id='textfiled-addressDiv' className='textfiled'>
                <input type="text" required name='address' onChange={handler}  value={user.address} /><span> Residental Address</span>
              </div>
              
            </div>
        
            <button type='submit' className='donateAmountBtn'>Donate</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
            }