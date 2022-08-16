import React from 'react'
import './commentForm.css';
import {useState} from 'react'
import {TextField,FormControl} from '@mui/material'

export default function CommentForm() {

    const[firstName,setFirstName] =useState("");
    const[lastName,setLastName] =useState("");
    console.log(setFirstName)

    
  return (
    <div>
        <div className='commentFormDiv'>
        hello
        <input placeholder='hello' name='firstName' value={firstName} 
        onChange={(e)=>setFirstName(e.target.value)}></input>
    </div>
    </div>
  
  )
}
