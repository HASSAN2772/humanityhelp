import React, { useState } from 'react'
import './DonateBlood.css'
import { Button, MenuItem, FormControl, Select, makeStyles, PaperComponent, TextField, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, InputLabel } from '@mui/material'
import Navbar from './Navbar';
import Footer from './Footer';


export default function DonateBlood() {

    const [blood, setBlood] = useState("");
    const handleChange = (e) => {

        setBlood(e.target.value)

    }
    return (
        <div>
            <Navbar />
            <div className='main-donateBloodForm'>
                <div className='donateBlood-conatiner'>
                    <form className='donateBloodAmountForm' >
                        <h1>Request Blood</h1>
                        <p>wewge dwugduwb j dugd yuqgiuwb </p>
                        <div className='fullName-donateBlood-Field'>
                            <TextField
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
                            />
                        </div>
                        <div className='bloodCate-donateBlood-Field'>
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
                                label="Donar Age"
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                required
                                type="number"
                            />
                            <div className='uplaodSlarySlip-Btn-donateBlood'>
                                <p id='salaryPara'>Upload your Salary Slip for Validity *Not for having Income more Than 20,000/ Pkr</p>
                                <Button variant="contained" id='uploadSalruSlipBtn' margin='normal' fullWidth component="label">
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </div>
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
                            />
                        </div>
                        <div className='dnraddress-donateBlood-Field'>
                            <TextField
                                id="outlined-basic"
                                label="Doner Address"
                                variant="outlined"
                                fullWidth
                                margin='normal'
                                required
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
