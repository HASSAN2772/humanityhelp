import './App.css';
import React, { useState } from 'react';
import { render } from 'react-dom'
import Login from './Login';
import Signup from './Signup';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Main from './main';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavLinks from './NavLinks';
import Navbar from './Navbar';
import Todo from './Todo';
import Applicants from './Applicants';
import RequestBlood from './RequestBlood';
import DonateForm from './DonateForm'
import DonateBlood from './DonateBlood';
import Nav from './Nav';
import Gal from './Gal'
import Form from './form';
import ProtectedRoutes from './protectedRoutes';
import { useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import UserTable from './Components/Dashboard/DataTables/User/UserTable'
import CharityTable from './Components/Dashboard/DataTables/Charity/charityTable';
import SingleUserDetails from './Components/Dashboard/DataTables/User/SIngleUserDetails';
import RequesterView from './Components/Dashboard/DataTables/Requester View/RequesterView'
import UpdateRequestStatus from './Components/Dashboard/DataTables/updateRequestStatus/updateRequestStatus';


function App() {

  
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/gallery'> 
            <ProtectedRoutes  component={Gallery}/>
            </Route>
            <Route exact path='/navbar'><Navbar /></Route>
            <Route exact path='/dashboard/data/:id'><SingleUserDetails /></Route>
            <Route exact path='/dashboard/request/data/:id'><RequesterView /></Route>
            <Route exact path='/usertable'><CharityTable /></Route>
            <Route exact path='/dashboard'><Dashboard /></Route>
            <Route exact path='/dashboard/update/request/:id'><UpdateRequestStatus /></Route>
            <Route exact path='/gal'><Gal /></Route>
            <Route exact path='/applicants'><Nav /></Route>
            <Route exact path='/requestblood'><RequestBlood /></Route>
            <Route exact path='/donateblood'><DonateBlood /></Route>
            <Route exact path='/charity'><DonateForm /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/contact"><ContactUs /></Route>
            <Route exact path="/signup"  ><Signup /></Route>
            <Route exact path="/"><Main /></Route>
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
