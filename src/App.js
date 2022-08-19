import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
