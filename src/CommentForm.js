import React from 'react'
import './commentForm.css';
import {useState} from 'react'
import {TextField,FormControl} from '@mui/material'

export default function CommentForm() {

    const[firstName,setFirstName] =useState("");
    const[lastName,setLastName] =useState("");

  return (
    <div>
        <div className='commentFormDiv'>
        <FormControl>
        <TextField id="firstName" name='firstName' value={firstName} 
        onChange={(e)=>setFirstName(e.target.value)}
        label="Name" 
        variant="outlined" />
        <TextField id="lastName" name='LastName' value={lastName} 
        onChange={(e)=>setLastName(e.target.value)}
        label="Last Name" 
        variant="outlined" />
        
        </FormControl>
    </div>
    </div>
  
  )
}
