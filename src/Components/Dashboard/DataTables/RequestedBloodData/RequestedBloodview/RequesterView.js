import React from 'react'
import './requesterView.css'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
export default function RequesterView() {
    const history = useHistory()
    const [user,setUser] = useState([])
    const {id} = useParams()
    console.log(id)
    const getUserIdData = async (req,res)=>{
       await axios.get(`http://localhost:5000/api/v1/requester/${id}`).then((res)=>
        {
            const data = res.data.getSingleRequester
            setUser(data)
            console.log(user)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
   
    const sendBackDashboard = () =>
    {
        history.push('/dashboard')
    }

    useEffect(()=>
    {
        getUserIdData();
    },[])
  return (
    <div>

<div className='checkRequester' id='checkUser'>
            <h2>Get Single User </h2>

                
             
                        <div className='singleRequester'>
                            <div className='UserIcon'>
                               <div className='icon'>
                                <img src='/assets/sliderimgs/userDetailIcon.png' alt='userIcon' />
                                </div>
                                </div>
                                <div className='User-Details'>
                                
                                <span>Mr / Mrs Name </span> : {user.name} <br/><br/>
                                <span>Application Status </span> : {user.ApplicationStatus} <br/><br/>
                                <span> CNIC</span> : {user.cnic}<br/><br/>
                                <span>City</span> : {user.city} <br/><br/>
                                <span>Requester Age</span> : {user.requesterAge}<br/><br/>
                                <span>Address</span> : {user.requesterAddress}<br/><br/>
                                <span>Phone No</span> : {user.phoneNo}<br/><br/>
                                <span>User _Id</span> : {user._id} <br/><br/>
                           
                                </div>
                                <button onClick={sendBackDashboard} className='closeSingleUser-btn' >Back</button>

                        </div> 
                       
            
            </div>
    </div>
  )
}
