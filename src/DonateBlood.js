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
            <TextField
              // name='name' value={name} onChange={((e) => { setName(e.target.value) })}
              fullWidth
              id="outlined-basic"
              autoComplete='off'
              label="Name" 
              variant="outlined"
              margin='normal'
              
              sx={{
                '& .MuiFormLabel-root':
                {
                  color:"white"
                },
                '& .MuiInputBase-input':
                {
                  color:"white"
                },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }}}
              />
              </div>
              <div className='textfields' id='textfields'>
            <TextField
              // name='name' value={name} onChange={((e) => { setName(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              type="number"
              autoComplete='off'
              label="CNIC" 
              variant="outlined"
              margin='normal'
              
              sx={{
                '& .MuiFormLabel-root':
                {
                  color:"white"
                },
                '& .MuiInputBase-input':
                {
                  color:"white"
                },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }}}
              />
              </div>  <div className='textfields' id='textfields'>
            <TextField
    
             sx={{
               "& .MuiOutlinedInput-input": {
                 color: "white"
               },
               "& .MuiInputLabel-root": {
                 color: "white"
               },
               "& .MuiSelect-iconOpen": {
                 color: "white"
               }, 
               "& .MuiSelect-icon": {
                 color: "white"
               },
               "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                 borderColor: "white"
               },
               "&:hover .MuiOutlinedInput-input": {
                 color: "white"
               },
               "&:hover .MuiInputLabel-root": {
                 color: "white"
               },
               "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                 borderColor: "white"
               },
               "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                 color: "white"
               },
               "& .MuiInputLabel-root.Mui-focused": {
                 color: "white"
               },
               "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                 borderColor: "white"
               }
             }}
      
         autoComplete= 'off'
         variant="outlined"
         label="Blood Type"
         select
         fullWidth
         margin='normal'
       >
          <MenuItem value={10}>A+</MenuItem>
         <MenuItem value={20}>A-</MenuItem>
         <MenuItem value={30}>B+</MenuItem>
         <MenuItem value={40}>B-</MenuItem>
         <MenuItem value={50}>AB+</MenuItem>
         <MenuItem value={60}>AB-</MenuItem>
         <MenuItem value={70}>O+</MenuItem>
         <MenuItem value={80}>O-</MenuItem>
       </TextField>
              </div>
              <div className='textfields' id='textfields'>
            <TextField
              // name='name' value={name} onChange={((e) => { setName(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              type="number"
              autoComplete='off'
              label="Age" 
              variant="outlined"
              margin='normal'
              
              sx={{
                '& .MuiFormLabel-root':
                {
                  color:"white"
                },
                '& .MuiInputBase-input':
                {
                  color:"white"
                },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }}}
              />
              </div>
              <div className='textfields-ful'>
              <TextField
              // name='name' value={name} onChange={((e) => { setName(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              type="number"
              autoComplete='off'
              label="Phone no." 
              variant="outlined"
              margin='normal'
              
              sx={{
                '& .MuiFormLabel-root':
                {
                  color:"white"
                },
                '& .MuiInputBase-input':
                {
                  color:"white"
                },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }}}
              />
              </div>
              <div className='textfields-ful'>
              <TextField
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white"
              },
              "& .MuiInputLabel-root": {
                color: "white"
              },
              "& .MuiSelect-iconOpen": {
                color: "white"
              }, 
              "& .MuiSelect-icon": {
                color: "white"
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              },
              "&:hover .MuiOutlinedInput-input": {
                color: "white"
              },
              "&:hover .MuiInputLabel-root": {
                color: "white"
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "white"
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              }
            }}
        autoComplete= 'off'
        variant="outlined"
        label="City"
        select
        fullWidth
        margin='normal'
      >
       <MenuItem value={10}>Lahore</MenuItem>
        <MenuItem value={20}>Islamabad</MenuItem>
        <MenuItem value={30}>Faisalabad</MenuItem>
      </TextField>
              </div>
              
              <div className='textfields-address'>
                <TextField
              // name='name' value={name} onChange={((e) => { setName(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              autoComplete='off'
              label="Donor Address" 
              variant="outlined"
              margin='normal'
              
              sx={{
                '& .MuiFormLabel-root':
                {
                  color:"white"
                },
                '& .MuiInputBase-input':
                {
                  color:"white"
                },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }}}
              />
              </div>
            {/* type and city */}
            {/* <div className='textfields-type-city'>
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
              
            </div> */}
        
            <button type='submit' className='donateAmountBtn'>Donate</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
            }