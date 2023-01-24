import axios from "axios"
import { Component } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useHistory, Redirect, Route } from "react-router-dom"

const isAuth = false;

const ProtectedAdminRoutes = ({ component: Component,...rest }) => {
    const [userLogin,setUserLogin]= useState(null);
    const history = useHistory()
    const isAuthUser = localStorage.getItem('token')
    const isAdmin = localStorage.getItem('role')

        
       
   
    return (<Route {...rest} render={() => isAuthUser && isAdmin === "admin" ? <Component /> : (<Redirect to={'/'} />)} />)
}

export default ProtectedAdminRoutes