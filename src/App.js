import './App.css';
import Login from './Login';
import Signup from './Signup';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Sameer from './Sameer';
import Main from './main';
import {  BrowserRouter,Switch,Route, NavLink } from "react-router-dom";
import NavLinks from './NavLinks';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Switch>
        <Route path='/gallery'><Gallery/></Route>
        <Route path='/navbar'><Navbar/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/contact"><ContactUs/></Route>
          <Route path="/signup"  ><Signup/></Route>
          <Route path="/testing"  ><Sameer/></Route>
          <Route path="/"><Main/></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
