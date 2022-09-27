import React, { useState } from 'react'
import './DonateBlood.css'
import { MenuItem, FormControl, Select, makeStyles, PaperComponent, TextField, Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, InputLabel } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import { purple, red,orange } from '@mui/material/colors';
import {createStyles} from '@mui/styles'
// import {, makeStyles,Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from '@mui/material'
const orgCol = orange[500]

const theme = createStyles({
    palette: {
      primary: orange[500],
      secondary: red[500]
    },
  });



export default function DonateBlood() {

  const [blood, setBlood] = useState("");
  const handleChange = (e) => {

    setBlood(e.target.value)

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
                    "& .MuiInputLabel-root": {color: 'white'},//styles the label
                    "& .MuiInputLabel-root:hover": {color: 'white'},//styles the lab
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "white"
                        }},
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                      "& .MuiInputBase-input":{color:'white'},
                        },
                    "& .MuiInputBase-root": {color: 'white'},}}
                  

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
                  "& .MuiInputLabel-root": {color: 'white'},//styles the label
                  "& .MuiInputLabel-root:hover": {color: 'white'},//styles the lab
                  "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "white"
                      }},
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "white" },
                    "& .MuiInputBase-input":{color:'white'},
                      },
                  "& .MuiInputBase-root": {color: 'white'},}}
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
                  onChange={handleChange}
                >
                  <MenuItem value={10}>A+</MenuItem>
                  <MenuItem value={20}>A-</MenuItem>
                  <MenuItem value={30}>B+</MenuItem>
                  <MenuItem value={30}>B-</MenuItem>
                  <MenuItem value={30}>AB+</MenuItem>
                  <MenuItem value={30}>AB-</MenuItem>
                  <MenuItem value={30}>O+</MenuItem>
                  <MenuItem value={30}>O-</MenuItem>
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
                  value={blood}
                  label="City"
                  fullWidth
                  onChange={handleChange}
                  className="donateBloodSelect"
                  sx={{
                    "& .MuiInputLabel-root": {color: 'white'},//styles the label
                    "& .MuiInputLabel-root:hover": {color: 'white'},//styles the lab
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "white"
                        }},
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                      "& .MuiInputBase-input":{color:'white'},
                        },
                    "& .MuiInputBase-root": {color: 'white'},}}
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
                  "& .MuiInputLabel-root": {color: 'white'},//styles the label
                  "& .MuiInputLabel-root:hover": {color: 'white'},//styles the lab
                  "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "white"
                      }},
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "white" },
                    "& .MuiInputBase-input":{color:'white'},
                      },
                  "& .MuiInputBase-root": {color: 'white'},}}
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
                  "& .MuiInputLabel-root": {color: 'white'},//styles the label
                  "& .MuiInputLabel-root:hover": {color: 'white'},//styles the lab
                  "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "white"
                      }},
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "white" },
                    "& .MuiInputBase-input":{color:'white'},
                      },
                  "& .MuiInputBase-root": {color: 'white'},}}
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
                  "& .MuiInputLabel-root": {color: 'white'},//styles the label
                  "& .MuiInputLabel-root:hover": {color: 'white'},//styles the lab
                  "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "white"
                      }},
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "white" },
                    "& .MuiInputBase-input":{color:'white'},
                      },
                  "& .MuiInputBase-root": {color: 'white'},}}

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