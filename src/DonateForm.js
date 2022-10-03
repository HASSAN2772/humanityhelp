import React, { useState } from 'react'
import './DonateForm.css'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios"
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

  const [name, setName] = useState("");
  const [cardName, setCardname] = useState("");
  const [cvv, setCvv] = useState("");
  const [longCard, setLongcard] = useState("");
  const [donateAmount, setDonateamount] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
     
      const data = { name, cardName, cvv, longCard, donateAmount, phone }

        const result = axios.post('http://localhost:5000/api/v1/charity', data).then((res) => {
          console.log(res.data)
        })
          .catch((error) => {
            console.log(error)
          })
        
        }
    
      
  return (
    <div>
      <Navbar />
      <div className='main-DonationForm'>
        <div className='donation-conatiner'>
          <form onSubmit={handleSubmit} className='donationAmountForm' id='donationAmountForm'>
            <h1>Donate for Save Lifes</h1>
            <p>You can save millions of people lifes by Donating.</p>

            <div className='donationPaymentMethodLogos'>
            <TextField
              name='name' value={name} onChange={((e) => { setName(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              required
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
              /> <TextField
              name='cardName'  value={cardName} onChange={((e) => { setCardname(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              required
              autoComplete='off'
              label="Name on Card" 
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
              {/* <div className='charity-textfields'>
                <div className='charity-textfield'>
                  <input type="text" required name='name'  value={name} onChange={((e) => { setName(e.target.value) })} /><span>Name</span>
                </div></div>
              <div className='charity-textfields'>
                <div className='charity-textfield'>
                  <input type="text" required name='cardName' value={cardName} onChange={((e) => { setCardname(e.target.value) })} /><span>Name on card</span>
                </div>
              </div> */}

              <div className='paymentMethods'>
                <div className='jazzcash'>
                  <img onClick={setJValueOpen} src='/assets/sliderimgs/jazzcash-logo.png' alt='jazzcash' />
                  {
                    easyPaisaopen ? null :

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
              <TextField
              name='cvv'  value={cvv} onChange={((e) => { setCvv(e.target.value) })}
              id="outlined-basic" 
              required
              autoComplete='off'
              type="number"
              label="Cvv" 
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
               <TextField
               name='longCard'  value={longCard} onChange={((e) => { setLongcard(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              required
              autoComplete='off'
              label="Long Card No" 
              type="number"
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
              
              <TextField
              name='donateAmount'  value={donateAmount} onChange={((e) => { setDonateamount(e.target.value) })}
              id="outlined-basic" 
              required
              autoComplete='off'
              label="AMount to Donate" 
              type="number"
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
              /> <TextField
              name='phone'  value={phone} onChange={((e) => { setPhone(e.target.value) })}
              fullWidth
              id="outlined-basic" 
              required
              
              autoComplete='off'
              type="number"
              label="Phone No" 
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
              <button type='submit' className='donateAmountBtn'>Donate</button>
            </div>


          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
