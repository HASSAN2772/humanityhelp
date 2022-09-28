import React, { useState } from 'react'
import './DonateBlood.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField, MenuItem, InputLabel, Select, FormControl} from '@mui/material';



export default function DonateBlood() {

  const [blood, setBlood] = useState("");
  const handleChangeblood = (e) => {

    setBlood(e.target.value)
  }
    const [city, setCity] = useState("");
  const handleChangecity = (e) => {

    setCity(e.target.value)

  }
  return (
    <div>
      <Navbar />
      <div className='main-donateBloodForm' id='main-donateBloodForm'>
        <div className='donateBlood-conatiner' >
          <form className='donateBloodAmountForm'  >
            <h1>Donate Blood</h1>
            <p>Donate Blood for Saving Millions of People and Child Lifes. </p>
            <div className='fullName-donateBlood-Field'>
              <TextField
                   sx={{
                    '& .MuiFormLabel-root': {
                      color: 'white',
                   },
                   '& .MuiInputBase-input': {
                     color: 'white',
                   },
                   '& label.Mui-focused': {
                     color: 'White',
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
                   },
               }}



                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                margin='normal'
               />
            </div>
            <div className='Cnic-donateBlood-Field'>
              <TextField
                id="outlined-basic"
                label="CNIC NO."
                variant="outlined"
                margin='normal'
                fullWidth
                required
                type="number"
                sx={{
                  '& .MuiFormLabel-root': {
                    color: 'white',
                 },
                 '& .MuiInputBase-input': {
                   color: 'white',
                 },
                 '& label.Mui-focused': {
                   color: 'White',
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
                 },
             }}


              />
            </div>
            <div className='bloodCate-donateBlood-Field'>
              <FormControl margin='normal' fullWidth>
                <InputLabel required id="demo-simple-select-label">Blood Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="blood"
                  required
                  value={blood}
                  fullWidth
                  onChange={handleChangeblood}
                  sx={{
                    '& .MuiFormLabel-root': {
                      color: 'white',
                   },
                   '& .MuiInputBase-input': {
                     color: 'white',
                   },
                   '& label.Mui-focused': {
                     color: 'White',
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
                   },
               }}


                >
                  <MenuItem value={10}>A+</MenuItem>
                  <MenuItem value={20}>A-</MenuItem>
                  <MenuItem value={30}>B+</MenuItem>
                  <MenuItem value={40}>B-</MenuItem>
                  <MenuItem value={50}>AB+</MenuItem>
                  <MenuItem value={60}>AB-</MenuItem>
                  <MenuItem value={70}>O+</MenuItem>
                  <MenuItem value={80}>O-</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='dnrCity-donateBlood-Field'>
              <FormControl margin='normal' fullWidth>
                <InputLabel required id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  margin='normal'
                  required
                  value={city}
                  label="City"
                  fullWidth
                  onChange={handleChangecity}
                  className="donateBloodSelect"
                  sx={{
                    '& .MuiFormLabel-root': {
                      color: 'white',
                   },
                   '& .MuiInputBase-input': {
                     color: 'white',
                   },
                   '& label.Mui-focused': {
                     color: 'White',
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
                   },
               }}


                >
                  <MenuItem value={10} defaultValue>Lahore </MenuItem>
                  <MenuItem value={20}>Islamabad</MenuItem>
                  <MenuItem value={30}>Faisalabad</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='dnrAge-donateBlood-Field'>
              <TextField
                id="outlined-basic"
                label="Donor Age"
                variant="outlined"
                margin='normal'
                fullWidth
                required
                type="number"
                sx={{
                  '& .MuiFormLabel-root': {
                    color: 'white',
                 },
                 '& .MuiInputBase-input': {
                   color: 'white',
                 },
                 '& label.Mui-focused': {
                   color: 'White',
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
                 },
             }}


              />
            </div>
            <div className='dnrPhone-donateBlood-Field'>
              <TextField
                id="outlined-basic"
                label="Ph Number."
                variant="outlined"
                margin='normal'
                fullWidth
                required
                type="number"
                sx={{
                  '& .MuiFormLabel-root': {
                    color: 'white',
                 },
                 '& .MuiInputBase-input': {
                   color: 'white',
                 },
                 '& label.Mui-focused': {
                   color: 'White',
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
                 },
             }}


              />
            </div>
            <div className='dnraddress-donateBlood-Field'>
              <TextField
                id="outlined-basic"
                label="Donor Address"
                variant="outlined"
                fullWidth
                margin='normal'
                required 
                sx={{
                  '& .MuiFormLabel-root': {
                    color: 'white',
                 },
                 '& .MuiInputBase-input': {
                   color: 'white',
                 },
                 '& label.Mui-focused': {
                   color: 'White',
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
                 },
             }}



              />
            </div>
            <button className='donateAmountBtn'>Donate</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
            }