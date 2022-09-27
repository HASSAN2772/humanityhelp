import React, { useState } from 'react'
import './DonateForm.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { purple, red, orange } from '@mui/material/colors';
import { createStyles } from '@mui/styles'
import { TextField, makeStyles, Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from '@mui/material'
const orgCol = orange[500]

const theme = createStyles({
    palette: {
        primary: orange[500],
        secondary: red[500]
    },
});

export default function DonateForm() {
    // const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [openeasyPaisa, seteasyPaisaClose] = useState(false);
    const handleClickOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false)
    }
    const easyPaisahandleClickOpen = () => {
        setOpen(!openeasyPaisa);
    };
    const easyPaisahandleClose = () => {
        seteasyPaisaClose(false);
    };

    return (
        <div>
            <Navbar />
            <div className='main-DonationForm'>
                <div className='donation-conatiner'>
                    <form className='donationAmountForm' >
                        <h1>Donate for Save Lifes</h1>
                        <p>You can save millions of people lifes by Donating.</p>
                        <TextField
                            sx={{
                                "& .MuiInputLabel-root": { color: 'white' },//styles the label
                                "& .MuiInputLabel-root:hover": { color: 'white' },//styles the lab
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: "white"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: "white" },
                                    "& .MuiInputBase-input": { color: 'white' },
                                },
                                "& .MuiInputBase-root": { color: 'white' },
                            }}


                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin='normal'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Name Appear on Card"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                            required
                            sx={{
                                "& .MuiInputLabel-root": { color: 'white' },//styles the label
                                "& .MuiInputLabel-root:hover": { color: 'white' },//styles the lab
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: "white"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: "white" },
                                    "& .MuiInputBase-input": { color: 'white' },
                                },
                                "& .MuiInputBase-root": { color: 'white' },
                            }}
                        />
                        <div className='donationPaymentMethodLogos'>
                            <div className='paymentMethods'>
                                <div className='jazzcash'>
                                    <img onClick={handleClickOpen} src='/assets/sliderimgs/easypaisa-logo.png' alt='jazcash' />
                                </div>
                                {
                                    open ?
                                        <div className='jazzDialog-box'>
                                            <div className='dialogBox-Content'>
                                                <h3>Our EasyPaisa</h3>
                                                <p>If anyone want to donate via EasyPaisa, can send
                                                us amount on our easypaisa account . <br /><br />
                                                Account Title :  Donate Happiness <br />
                                                Account No : <span>03131923674</span>
                                                </p>
                                            </div>
                                            <button className='jazzCash-CloseBtn' onClick={handleClose}> Close</button>
                                        </div> : null
                                }
                                {/* <div className='easypaisa'>
                                    <img onClick={easyPaisahandleClickOpen} src='/assets/sliderimgs/easypaisa-logo.png' alt='easypaisa' />
                                </div>
                                {
                                    openeasyPaisa ?
                                        <div className='easyPaisaDialog-box'>
                                            <div className='dialogBox-Content'>
                                                <h3>Our EasyPaisa </h3>
                                                <p>If anyone wnat donate via EasyPaisa, you can send
                                                us on our easypaisa account . <br /><br />
                                                Account Title :  Donate Happiness <br />
                                                Account No : <a href=''> 031319236749</a>
                                                </p>
                                            </div>
                                            <button className='jazzCash-CloseBtn' onClick={easyPaisahandleClose}> Close</button>
                                        </div> : null
                                } */}
                            </div>

                        </div>
                        <TextField
                            id="outlined-basic"
                            label="Amount to Donate"
                            variant="outlined"
                            margin='normal' required
                            type="number"
                            sx={{
                                "& .MuiInputLabel-root": { color: 'white' },//styles the label
                                "& .MuiInputLabel-root:hover": { color: 'white' },//styles the lab
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: "white"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: "white" },
                                    "& .MuiInputBase-input": { color: 'white' },
                                },
                                "& .MuiInputBase-root": { color: 'white' },
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Cvv"
                            variant="outlined"
                            margin='normal'
                            type="number" required
                            sx={{
                                "& .MuiInputLabel-root": { color: 'white' },//styles the label
                                "& .MuiInputLabel-root:hover": { color: 'white' },//styles the lab
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: "white"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: "white" },
                                    "& .MuiInputBase-input": { color: 'white' },
                                },
                                "& .MuiInputBase-root": { color: 'white' },
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Card No."
                            variant="outlined"
                            fullWidth
                            margin='normal'
                            type="number"
                            required
                            sx={{
                                "& .MuiInputLabel-root": { color: 'white' },//styles the label
                                "& .MuiInputLabel-root:hover": { color: 'white' },//styles the lab
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: "white"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: "white" },
                                    "& .MuiInputBase-input": { color: 'white' },
                                },
                                "& .MuiInputBase-root": { color: 'white' },
                            }}
                        />
                        <button className='donateAmountBtn'>Donate</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
