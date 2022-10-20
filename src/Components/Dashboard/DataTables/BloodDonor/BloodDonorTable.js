import React from 'react'
import './blooddonor.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function BloodDonorTable() {
    const [getBloodDonorUser,setGetBloodDonorUser] = useState([{}])
    const result = async (req,res) =>
    { 
        try {
            await axios.get(`http://localhost:5000/api/v1/donors/detail`).then((res)=>
            {
                const data = res.data.getyDonorUsers
                setGetBloodDonorUser(data)
            }).catch((err)=>
            {
                console.log(err)
            })
        }
        catch(err)
        {
            console.log(err)
        }
 
}

useEffect(()=>
{
    result();

},[])
  return (
    <div>
         <thead id='charity-thead'>
                <tr id='charity-thead-tr'>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>Age </th>
                    <th>City </th>
                    <th>Phone </th> <th>Status </th>
                </tr>
            </thead>
            <div className='bloodDonor-table'>
                <table className='table'>
                    <tbody className='tbody'>
                       
                        {
                            getBloodDonorUser.map((ele, id) => {
                                return (
                                    <>
 <tr>
                            <td>{ele.name}</td>
                            <td>{ele.blood}</td>
                            <td>{ele.donorAge}</td>
                            <td>{ele.city}</td>
                            <td>{ele.phoneNo}</td>
                            <div className='oprBtn'>
                                <button>View</button>
                                <button >Modify</button> 
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
