import React from 'react'
import './requestedBlood.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function RequestedBloodTable() {
    const [getRequestedBloodUser,setGetRequestedBloodUser] = useState([])
    const result = async(req,res)=>
    
    {axios.get(`http://localhost:5000/api/v1/requested/blood/users`).then((res)=>
    {
        const data = res.data.getRequestedBlood
        setGetRequestedBloodUser(data)
    }).catch((err)=>
    {
        console.log(err)
    })
}
useEffect(()=>
{result();

},[])
    return (
        <div>
            <thead id='requested-thead'>
                <tr id='requested-thead-tr'>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>Age </th>
                    <th>City </th>
                    <th>Phone </th> <th> </th>
                </tr>
            </thead>
            <div className='requestBlood-table'>
                <table className='table'>
                    <tbody className='tbody'>

                        {
                            getRequestedBloodUser.map((ele, id) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{ele.name}</td>
                                            <td>{ele.blood}</td>
                                            <td>{ele.requesterAge}</td>
                                            <td>{ele.city}</td>
                                            <td>{ele.phoneNo}</td>
                                            <div className='oprBtn'>
                                            <Link to={`/dashboard/request/data/${ele._id}`}><button>View</button></Link>
                                            <Link to={`/dashboard/update/request/${ele._id}`}><button>Update</button></Link>
                                                <button >Delete</button>
                                            </div>

                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
