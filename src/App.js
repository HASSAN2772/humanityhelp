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


function App() {

  const [user, setLoginUser] = useState({

  })

  return (
    <div className="App">
      <>
        {/* <Gal/> */}

      {/* <Applicants/> */}
      
        <BrowserRouter>
          <Switch>
            <Route path='/gallery'><Gallery /></Route>
            <Route path='/navbar'><Navbar /></Route>
            {/* <Route path='/nav'><Nav /></Route> */}
            <Route path='/gal'><Gal /></Route>
            <Route path='/applicants'><Nav /></Route>
            <Route path='/requestblood'><RequestBlood /></Route>
            <Route path='/donateblood'><DonateBlood /></Route>
            <Route path='/charity'><DonateForm /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/contact"><ContactUs /></Route>
            <Route path="/signup"  ><Signup /></Route>
            <Route path="/"><Main /></Route>
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
