import React from 'react'
import './DonateForm.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { PaperComponent, TextField, Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from '@mui/material'
export default function DonateForm() {

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
                        <p>wewge dwugduwb j dugd yuqgiuwb </p>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin='normal'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Name Appeare on Card"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                            required
                        />
                        <div className='donationPaymentMethodLogos'>
                            <div className='jazzcash'>
                                <Button variant="outlined" onClick={handleClickOpen}>
                                    For JazzCash
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="draggable-dialog-title"
                                >
                                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                                        For JazzCash
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
                            <div className='easypaisa'>
                                <Button variant="outlined" onClick={handleClickOpen}>
                                    For Easypaisa
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="draggable-dialog-title"
                                >
                                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
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
                            <div className='bank'>
                                bank
                            </div>
                        </div>
                        <TextField
                            id="outlined-basic"
                            label="Amount to Donate"
                            variant="outlined"
                            margin='normal' required
                            type="number"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Cvv"
                            variant="outlined"
                            margin='normal'
                            type="number" required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Card No."
                            variant="outlined"
                            fullWidth
                            margin='normal'
                            type="number"
                            required
                        />
                        <button className='donateAmountBtn'>Donate</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
