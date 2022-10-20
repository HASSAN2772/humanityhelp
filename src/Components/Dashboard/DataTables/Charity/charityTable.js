import React from 'react'
import { useState } from 'react';
import './charity.css';
import axios from 'axios'
import { useEffect } from 'react';

export default function CharityTable() {
    const [getCharityUser,setGetCharityUser] = useState([{}])
    const result = async (req,res)=>
    { 
        await axios.get(`http://localhost:5000/api/v1/charity/donor`).then((res)=>
    {
        const data = res.data.getCharityDonors
        setGetCharityUser(data)
    }).then((err)=>
    {
        console.log(err)
    })
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
                    <th>Cvv</th>
                    <th>Card No</th>
                    <th>Amount </th>
                    <th>Contact </th>
                    <th>Status </th>
                </tr>
            </thead>
            <div className='charity-table'>
                <table className='table'>
                    <tbody className='tbody'>
                        {/* <tr>
                            <td>name</td>
                            <td>name</td>
                            <td>name</td>
                            <td>name</td>
                            <td>name</td>
                            <div className='oprBtn'>
                                <button>View</button>
                                <button >Modify</button> 
                                <button >Delete</button>
                            </div>

                        </tr> */}
                        {
                            getCharityUser.map((ele, id) => {
                                return (
                                    <>
                            <tr>
                            {/* <td>{id +1 }</td>   */}
                            <td>{ele.cardName}</td>
                            <td>{ele.cvv}</td>
                            <td>{ele.longCard}</td>
                            <td>{ele.donate}</td>
                            <td>{ele.phone}</td>
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
        </div >
    )
}
