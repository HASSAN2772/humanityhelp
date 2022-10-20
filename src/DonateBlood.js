import React, { useState ,useEffect} from 'react'
import './DonateBlood.css'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { TextField, MenuItem, InputLabel, Select, FormControl} from '@mui/material';



export default function DonateBlood() {


  const [formErrors,setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)
  const [donateBlood,setDonateBlood] = useState({

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

  setDonateBlood({
    ...donateBlood,
    [name]:value

  })
}
useEffect(()=>{
  if(Object.keys(formErrors).length === 0 && isSubmit)
  {
    console.log(donateBlood)
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
    else if (values.cnic.length < 13) {
      errors.cnic = "Cnic must be 13 Digist * "

    } else if (values.cnic.length > 13) {
      errors.cnic = "Cnic must be 13 Digist * "

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
    else if(values.age > 150)
    {
      errors.age = "Age cannot exceed 150 Years Old"
    }
    if (!values.phone) {
      errors.phone = "Phone No is Required"
    }
    else if (values.phone.length > 11) {
      errors.phone = "Phone No must be 11 Digits "
    }
    else if (values.phone.length < 11) {
      errors.phone = "Phone No must be 11 Digits "
    }
    if(!values.address)
    {
      errors.address = "Address is Require";
    }
    return errors
}

const handleSubmit = (e)=>
{ 
  const { name, cnic, blood, city, age, phone,address } = donateBlood
  e.preventDefault()
  setFormErrors(validate(donateBlood))
  if (name && cnic && city && blood && age && phone && address) {
    if (cnic.length == 13 && phone.length == 11 && (age > 18 && age < 100)) {
      setIsSubmit(true)
      const result = axios.post('http://localhost:5000/api/v1/donate/blood', donateBlood).then((res) => {
        console.log(res.data)
      })
        .catch((error) => {
          console.log(error)
        })
    }   
  }else {
  }
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
            name='name' value={donateBlood.name} onChange={handler}
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
               <p id='error-message'> {formErrors.name}</p>

              </div>
              <div className='textfields' id='textfields'>
            <TextField
            name='cnic' value={donateBlood.cnic} onChange={handler}
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
                            <p id='error-message'> {formErrors.cnic}</p>

              </div>  <div className='textfields' id='textfields'>
            <TextField
                name='blood' value={donateBlood.blood} onChange={handler}

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
          <MenuItem value="A+">A+</MenuItem>
         <MenuItem value="A-">A-</MenuItem>
         <MenuItem value="B+">B+</MenuItem>
         <MenuItem value="B-">B-</MenuItem>
         <MenuItem value="AB+">AB+</MenuItem>
         <MenuItem value="AB-">AB-</MenuItem>
         <MenuItem value="O+">O+</MenuItem>
         <MenuItem value="O-">O-</MenuItem>
       </TextField>
       <p id='error-message'> {formErrors.blood}</p>

              </div>
              <div className='textfields' id='textfields'>
            <TextField
            name='age' value={donateBlood.age} onChange={handler}
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
                            <p id='error-message'> {formErrors.age}</p>

              </div>
              <div className='textfields-ful'>
              <TextField
            name='phone' value={donateBlood.phone} onChange={handler}
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
                            <p id='error-message'> {formErrors.phone}</p>

              </div>
              <div className='textfields-ful'>
              <TextField
                          name='city' value={donateBlood.city} onChange={handler}

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
       <MenuItem defaultValue="Lahore" value="Lahore">Lahore</MenuItem>
        <MenuItem value="Islamabad">Islamabad</MenuItem>
        <MenuItem value="Faisalabad">Faisalabad</MenuItem>
      </TextField>
      <p id='error-message'> {formErrors.city}</p>

              </div>
              
              <div className='textfields-address'>
                <TextField
            name='address' value={donateBlood.address} onChange={handler}
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
                            <p id='error-message'> {formErrors.address}</p>

              </div>
        
            <button type='submit' className='donateAmountBtn'>Donate</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
            }