import React, { useState } from 'react'
import './RequestBlood.css'
import { MenuItem, FormControl, Select, TextField, InputLabel, Label, Autocomplete } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'

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
            <div id='main-requestBloodForm'>
                <div className='requestBlood-conatiner'>
                    <form className='requestBloodAmountForm' >
                        <h1>Request Blood</h1>
                        <p>Its Our Duty to Help Needy People Who are Facing Problmes Related Bloods or Charity.</p>
                        <div className='fullName-requestBlood-Field'>
                            <TextField
                                sx={{
                                    '& .MuiAutocomplete-inputFocused':{
                                      backgroundColor:"black",
                                      
                                    },
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
                        <div className='Cnic-requestBlood-Field'>
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
            <div className='bloodCate-requestBlood-Field'>
              <FormControl margin='normal' fullWidth>
                <InputLabel required id="demo-simple-select-label">Blood</InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="blood"
                  required
                  value={blood}
                  onChange={handleChangeblood}
                  sx={{
                    '& .MuiSelect-iconOpen': {
                      color: 'white',
                   },
                   '& .MuiInputBase-input': {
                     color: 'white',
                   },
                   '& .MuiSelect-icon': {
                     color: 'White',
                   },
                  // '& .MuiOutlinedInput-root': {
                  //   color: 'white',
                  // },
                  // '& .MuiInputBase-colorPrimary': {
                  //   color: 'white',
                  // },
                  '& css-vysm2i-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root"': {
                    color: 'white',
                  },
                //  '& .MuiInputLabel-outlined': {
                //   color: 'white',
                //  },
                //  '& .MuiFormLabel-colorPrimary': {
                //   color: 'white',
                //  },
                //  '& .MuiFormLabel-filled': {
                //   color: 'white',
                //  },
                //  '& css-1sumxir-MuiFormLabel-root-MuiInputLabel-root': {
                //   color: 'white',
                //  },
                //  '& .Mui-focused': {
                //   color: 'white',
                //  },
                
                  //  '& .MuiInput-underline:after': {
                  //    borderBottomColor: 'white',
                  //  },
                  //  '& .MuiOutlinedInput-root': {
                  //    '& fieldset': {
                  //      borderColor: 'white',
                  //    },
                  //    '&.Mui-focused fieldset': {
                  //      borderColor: 'white',
                  //    },
                  //  },
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
                        <div className='dnrCity-requestBlood-Field'>
                            <FormControl margin='normal' fullWidth>
                                <InputLabel required id="demo-simple-select-label">City</InputLabel>
                                <Select
                                    // labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    margin='normal'
                                    required
                                    value={city}
                                    label="City"
                                    fullWidth
                                    onChange={handleChangecity}
                                    sx={{
                                      '& .MuiSelect-iconOpen': {
                                        color: 'white',
                                     },
                                     '& .MuiInputBase-input': {
                                       color: 'white',
                                     },
                                     '& .MuiSelect-icon': {
                                       color: 'White',
                                     },
                                    }}


                                >
                                    <MenuItem value={10} defaultValue>Lahore </MenuItem>
                                    <MenuItem value={20}>Islamabad</MenuItem>
                                    <MenuItem value={30}>Faisalabad</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='dnrAge-requestBlood-Field'>
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
                                label="Requester Age"
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                required
                                type="number"
                            />
                        
                        </div>
                        <div className='dnrPhone-requestBlood-Field'>
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
                                label="Ph Number."
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                required
                                type="number"
                            />
                        </div>
                        <div className='dnraddress-requestBlood-Field'>
                            <TextField
                                id="outlined-basic"
                                label="Requester Address"
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
                        <button className='requestAmountBtn'>Request</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
