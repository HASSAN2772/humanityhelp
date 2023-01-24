import React from 'react'
import '../User/SingleUserDetail.css'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
export default function CharityView() {
    const history = useHistory()
    const [user,setUser] = useState([])
    const {id} = useParams()
    console.log(id)
    const getUserIdData = async (req,res)=>{
       await axios.get(`http://localhost:5000/api/v1/charity/user/${id}`).then((res)=>
        {
            const data = res.data.getSingleCharityUser
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
                                <span>Card Name</span> : {user.cardName} <br/><br/>
                                <span> Cvv</span> : {user.cvv}<br/><br/>
                                <span>longCard No</span> : {user.longCard} <br/><br/>
                                <span>donate amount</span> : {user.donate}<br/><br/>
                                <span>phone</span> : {user.phone}<br/><br/>
                                <span>date</span> : {user.date}<br/><br/>
                                <span>User _Id</span> : {user._id} <br/><br/>
                           
                                </div>
                                <button onClick={sendBackDashboard} className='closeSingleUser-btn' >Back</button>

                        </div> 
                       
            
            </div>
    </div>
  )
}
