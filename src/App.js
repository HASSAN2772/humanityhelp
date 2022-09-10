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
import DonateBlood from './RequestBlood';
import RequestBlood from './RequestBlood';
import DonateForm from './DonateForm'


function App() {

  const [user, setLoginUser] = useState({

  })

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/gallery'><Gallery /></Route>
            <Route path='/navbar'><Navbar /></Route>
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
