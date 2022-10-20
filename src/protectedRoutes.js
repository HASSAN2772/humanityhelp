import axios from "axios"
import { Component } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useHistory, Redirect, Route } from "react-router-dom"

const isAuth = false;

const ProtectedRoutes = ({ component: Component,...rest }) => {
    const [userLogin,setUserLogin]= useState(null);
    const history = useHistory()
    const isAuthUser = localStorage.getItem('token')


   
    return (<Route {...rest} render={() => isAuthUser ? <Component /> : (<Redirect to={'/'} />)} />)
}

export default ProtectedRoutes