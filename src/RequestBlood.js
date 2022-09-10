import React, { useState } from 'react'
import './RequestBlood.css'
import { Button, MenuItem, FormControl, Select, makeStyles, PaperComponent, TextField, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, InputLabel } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import { purple, red,orange } from '@mui/material/colors';
import {createStyles} from '@mui/styles'
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
            <div id='main-requestBloodForm'>
                <div className='requestBlood-conatiner'>
                    <form className='requestBloodAmountForm' >
                        <h1>Request Blood</h1>
                        <p>Its Our Duty to Help Needy People Who are Facing Problmes Related Bloods or Charity.</p>
                        <div className='fullName-requestBlood-Field'>
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
                        <div className='Cnic-requestBlood-Field'>
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
                                label="CNIC NO."
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                required
                                type="number"
                            />
                        </div>
                        <div className='bloodCate-requestBlood-Field'>
                            <FormControl margin='normal'
                                fullWidth>
                                <InputLabel required id="demo-simple-select-label">Blood</InputLabel>
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
                        <div className='dnrCity-requestBlood-Field'>
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
                                label="Requester Age"
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                required
                                type="number"
                            />
                            {/* <div className='uplaodSlarySlip-Btn-requestBlood'>
                                <p id='salaryPara'>Upload your Salary Slip for Validity *Not for having Income more Than 20,000/ Pkr</p>
                                <Button variant="contained" id='uploadSalruSlipBtn' margin='normal' fullWidth component="label">
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </div> */}
                        </div>
                        <div className='dnrPhone-requestBlood-Field'>
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
                                label="Requester Address"
                                variant="outlined"
                                fullWidth
                                margin='normal'
                                required
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
