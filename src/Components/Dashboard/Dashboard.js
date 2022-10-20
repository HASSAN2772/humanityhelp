import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import UserTable from './DataTables/User/UserTable'
import CharityTable from './DataTables/Charity/charityTable'
import BloodDonorTable from './DataTables/BloodDonor/BloodDonorTable'
import RequestedBloodTable from './DataTables/RequestedData/RequestedBloodTable'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react'

export default function Dashboard() {
    //getting data from props 
    let counter = 4
    const [getTotalBloodRequest,setGetTotalBloodRequest] = useState({})
    const result = async(req,res)=>
    
    { 
        
      await axios.get(`http://localhost:5000/api/v1/requested/users`).then((res)=>
    {
        const data = res.data
        setGetTotalBloodRequest(data)
    }).catch((err)=>
    {
        console.log(err)
    }
    )
}
const [donors,setDonors] = useState("")
const [charityDonors,setCharityDonors] = useState("")

const [totalRegisterUser, setTotalRegisterUser] = useState("");

const getTptalRegister  = async (req,res) =>
{
    await axios.get('http://localhost:5000/api/v1/users').then((res)=>
    {
        setTotalRegisterUser(res.data)
    }).then((err)=>
    {
        console.log(err)
    })
}

const getDonors  = async (req,res) =>
{
    await axios.get('http://localhost:5000/api/v1/donors').then((res)=>
    {
        setDonors(res.data)
    }).then((err)=>
    {
        console.log(err)
    })
}
const getCharityDonor = async (req,res) =>
{
    await axios.get('http://localhost:5000/api/v1/charity/donors').then((res)=>
    {
        setCharityDonors(res.data)
    }).then((err)=>
    {
        console.log(err)
    })
}

useEffect(()=>
{
    result()
    getDonors();
    getCharityDonor()
    getTptalRegister()
},[])

    return (
        <div>
            <div className='dashboard'>
                <div className='dashboard-conatiner'>
                    <div className='lefSide-Menu'>
                        <div className='lelfSide'>
                            <h1>Dashboard</h1>
                            <ul className='dashboard-ul'>
                                <li><Link>Home</Link></li>
                                <li><Link>Users</Link></li>
                                <li><Link>Charity</Link></li>
                                <li><Link>Donors</Link></li>
                                <li><Link>Requesters</Link></li>
                                <li><Link>summary</Link></li>
                                <li><Link>Admin</Link></li>
                                <button>Logout</button>

                            </ul>
                        </div>
                    </div>
                    <div className='RightSide-Details'>
                        <div className='summary'>Here is Overall about user and their requests</div>
                        <div className='data-Details'>
                            <div className='box-1'>
                                <p>
                                   
                                {donors.getTotalDonors}
                                </p>
                                <h6>Current Blood Donors</h6>

                            </div>
                            <div className='box-1'>

                                <p>
                              
                                {charityDonors.numberCharityDonors}

                                </p>
                                <h6>Current Charity Donors</h6>

                            </div>
                            <div className='box-1'>
                            <p>
                              
                              {counter }

                              </p>
                              <h6>No's of Helped People</h6>
                            </div>
                            <div className='box-1'>
                            <p>
                              
                              {totalRegisterUser.gettotalUsers }

                              </p>
                              <h6>Current Register Users</h6>
                            </div>
                        </div>
                        <div className='user-Details'>
                            <div className='box-1-bloodRequest'>
                                <div className='bloodRequest'>
                                <h3>Total Blood Request Recieved</h3>
                                <p>
                                {getTotalBloodRequest.numberRequestedBloood}
                                </p>
                                </div>
                            </div><div className='box-1'>
                                box
                            </div>
                        </div>
                        <div className='tables'>
                            <div className='user-table'>
                                <h2> Users and Their Information</h2>
                                <UserTable />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='datatables-bloods'>
                    <h2> Charity Donors Details</h2>
                    <CharityTable />
                    <h2> Blood Donors Details</h2>
                    <BloodDonorTable />
                    <h2 id='requestBlood-h2'> Requested Blood Details</h2>
                    <RequestedBloodTable />
                </div>

            </div>
        </div>
    )
}
