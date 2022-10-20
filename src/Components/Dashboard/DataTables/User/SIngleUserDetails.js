import React from 'react'
import './SingleUserDetail.css'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
export default function SIngleUserDetails() {
    const history = useHistory()
    const [user,setUser] = useState([])
    const {id} = useParams()
    console.log(id)
    const getUserIdData = async (req,res)=>{
       await axios.get(`http://localhost:5000/api/v1/user/${id}`).then((res)=>
        {
            const data = res.data.getSingleUserData
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

<div className='checkUser' id='checkUser'>
            <h2>Get Single User </h2>

                
             
                        <div className='singleUser'>
                            <div className='UserIcon'>
                               <div className='icon'>
                                <img src='/assets/sliderimgs/userDetailIcon.png' alt='userIcon' />
                                </div>
                                </div>
                                <div className='User-Details'>
                                
                                <span>Mr / Mrs Name </span> : {user.firstName} <br/><br/>
                                <span> Last Name</span> : {user.lastName}<br/><br/>
                                <span>Email Address</span> : {user.email} <br/><br/>
                                <span>User Role / Status</span> : {user.role}<br/><br/>
                                <span>User _Id</span> : {user._id} <br/><br/>
                           
                                </div>
                                <button onClick={sendBackDashboard} className='closeSingleUser-btn' >Back</button>

                        </div> 
                       
            
            </div>
    </div>
  )
}
