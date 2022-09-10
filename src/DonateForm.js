import React from 'react'
import './DonateForm.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { purple, red,orange } from '@mui/material/colors';
import {createStyles} from '@mui/styles'
import {TextField, makeStyles,Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from '@mui/material'
const orgCol = orange[500]

const theme = createStyles({
    palette: {
      primary: orange[500],
      secondary: red[500]
    },
  });

export default function DonateForm() {
    // const classes = useStyles();
  
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin='normal'
                            // inputProps={{ className: classes.input }}
                            />
                        <TextField
                            id="outlined-basic"
                            label="Name Appeare on Card"
                            variant="outlined"
                            margin='normal'
                            fullWidth
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
                        <div className='donationPaymentMethodLogos'>
                            <div className='jazzcash'>
                                <Button  onClick={handleClickOpen}>
                                    <img src='assets/sliderimgs/jazzcasg-removebg-preview (1).png' />
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="draggable-dialog-title"
                                >
                                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-Jazzcash">
                                        For JazzCash
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            If you don't have Bank Account, You can share your donation to us via JazzCash
                                            Our JazzCash No's +9263897665, +9284879946 Donate Happiness
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                            <div className='easypaisa'>
                                <Button  onClick={handleClickOpen}>
                                <img src='assets/sliderimgs/Easypaisa-removebg-preview.png' />
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="draggable-dialog-title"
                                >
                                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-Easypaisa">
                                        For Easypaisa
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            To subscribe to this website, please enter your email address here. We
                                            will send updates occasionally.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                         
                        </div>
                        <TextField
                            id="outlined-basic"
                            label="Amount to Donate"
                            variant="outlined"
                            margin='normal' required
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
                        <TextField
                            id="outlined-basic"
                            label="Cvv"
                            variant="outlined"
                            margin='normal'
                            type="number" required
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
                        <TextField
                            id="outlined-basic"
                            label="Card No."
                            variant="outlined"
                            fullWidth
                            margin='normal'
                            type="number"
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
                        <button className='donateAmountBtn'>Donate</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
