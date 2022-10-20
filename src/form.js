import axios from 'axios';
import React from 'react'
import { useState } from 'react'


export default function Form() {

    const [data,setdata] =useState("")
    const [user,setUser] = useState({
        name:"",
        email:"",
        comment:"",
    })

    const handler = (e) =>
    {
        e.preventDefault();
        const {name,value} = e.target
        setUser({...user,
        [name]:value
        })
    }
    const submit = (e) =>
    {
        e.preventDefault();
        console.log(user)
        const result = axios.post('http://localhost:5000/api/v1/test',user).then((res)=>
        {
            const responce = res.status;
            if(responce === 204)
            {
                window.alert("Invlaid Credentials")
            }
            if(responce === 205)
            {
                window.alert("lenght")
            }
            if(responce.data === 11000)
            {
                window.alert("Duplicate emamil")
            }
            console.log(res.data)
        }).catch((err)=>
        {
            console.log(err)
        })

    }

  return (
    <div>

    <form>       
     <h1>Weelocomw </h1>
        <input type="text" name='name' value={user.name}  onChange={handler}/>
         <br/>
        <input type="text" name='email' value={user.email} onChange={handler}/> <br/>
        <input type="text" name='comment' value={user.comment}  onChange={handler}/><br/>
        <button type='submit' onClick={submit}>Submit</button>
        </form>

    </div>
  )
}
