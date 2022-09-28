import React, { useState } from 'react'
import './DonateForm.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField } from '@mui/material';

export default function DonateForm() {



  const [easyPaisaopen, setEasypaisaOpen] = useState(false);
  const [jazzcashopen, setJazzcashOpen] = useState(false);


  const setEValueOpen = () => {
    setEasypaisaOpen(!easyPaisaopen)
  }

  const setJValueOpen = () => {
    setJazzcashOpen(!jazzcashopen)
  }

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
                //      // basic color or root text color 
                //      "& .MuiOutlinedInput-root":
                //      {
                //        color: "white"
                //      },
                //     // for label notch
                //   //  "& .MuiInputLabel-outlined": 
                //   //  {
                //   //    color: "white"
                //   //  },

                //    // when user enteres in fileds or type 
                //    "& .Mui-focused":{
                //      color:"white"
                //    },
                //     //  for fileds border hover effect
                //    "& .MuiOutlinedInput-root:hover": {
                //        "& > fieldset": {
                //            borderColor: "white"
                //        }
                //    },
                //     // for fileds border
                //    "& .MuiOutlinedInput-root": {
                //      "& > fieldset": {
                //          borderColor: "white"
                //      }
                //  }

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
            <div className='donationPaymentMethodLogos'>
              <div className='paymentMethods'>
                <div className='jazzcash'>
                  <img  onClick={setJValueOpen} src='/assets/sliderimgs/jazzcash-logo.png' alt='jazzcash' />
                  {
                    jazzcashopen ? <div className="jazzDialog-box" ><div className="jazzdialogBox-Content"><h3>Our jazzCash</h3>
                      <p>If anyone want to donate via jazzCash, can send
                        us amount on our jazzcash account . <br /><br />
                        Account Title :  Donate Happiness <br />
                        Account No : <span>03131923674</span>
                      </p></div>
                      <button className='jazzCash-CloseBtn' onClick={() => setJazzcashOpen(false)}>Close</button>

                    </div> : ""
                  }
                  </div>
                  <div className='easypaisa'>
                    <img onClick={setEValueOpen} src='/assets/sliderimgs/easypaisa-logo.png' alt='easypaisa' />
                    {
                      easyPaisaopen ? <div className="easypaisaDialog-box" ><div className="easydialogBox-Content"><h3>Our EasyPaisa</h3>
                        <p>If anyone want to donate via EasyPaisa, can send
                          us amount on our easypaisa account . <br /><br />
                          Account Title :  Donate Happiness <br />
                          Account No : <span>03131923674</span>
                        </p></div>
                        <button className='easypaisa-CloseBtn' onClick={() => setEasypaisaOpen(false)}>Close</button>

                      </div> : ""
                    }
                  </div>
              </div>
            </div>
            <TextField
              id="outlined-basic"
              label="Amount to Donate"
              variant="outlined"
              margin='normal' required
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
            <TextField
              id="outlined-basic"
              label="Cvv"
              variant="outlined"
              margin='normal'
              type="number" required
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
            <TextField
              id="outlined-basic"
              label="Card No."
              variant="outlined"
              fullWidth
              margin='normal'
              type="number"
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
            <button className='donateAmountBtn'>Donate</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
