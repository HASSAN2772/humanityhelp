import React, { useState, useEffect } from "react";
import "./Login.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is Required*";
    }
    if (!values.password) {
      errors.password = "Password is Required*";
    }
    return errors;
  };
  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    axios
      .post("http://localhost:5000/api/v1/login", user)
      .then((res) => {
        if (res.status === 205) {
          alert("Invalid credentials");
          setIsSubmit(false);
        } else if (res.status === 202) {
          alert("Invalid credentials");
        } else {
          if (res.status === 200) {
            alert("Login Successfully");
            setIsSubmit(true);
            history.push("/");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.user.role);
            localStorage.setItem("isUser", res.data.user);
            localStorage.setItem("loginUserName", res.data.user.firstName);
          } else {
          }
        }

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="main-Login">
        <div className="login-Container">
          <div className="loginLeft-details">
            <div className="login-Logo">
              <img
                src="/assets/sliderimgs/Logo.png"
                alt="logo"
                style={{ width: "250px", height: "130px" }}
              />
            </div>
            <h2>Donate Happiness</h2>
            <p>First you have to Login</p>
            <p id="loginLeft-p">
              "The greatness of a community is most accurately measured by the
              compassionate actions of its members."
            </p>
            <Link to="/signup">
              {" "}
              <button className="loginLeft-SignupBtn">Sign Up</button>
            </Link>
          </div>
          <div className="loginRight-Form">
            <div className="LoginForm">
              <h2>Welcome to Donate Happiness</h2>
              <p>Put your details in given fields:</p>
              <form onSubmit={handleSubmit}>
                <div className="username-login">
                  <TextField
                    label="Username"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={user.email}
                    onChange={handler}
                  />
                  <p id="error-message"> {formErrors.email}</p>
                </div>
                <div className="password-login">
                  <TextField
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    name="password"
                    value={user.password}
                    onChange={handler}
                  />
                  <p id="error-message"> {formErrors.password}</p>
                </div>
                <p className="forgotPassword-Para">
                  Here's <Link to={"/forgot/password"}>Forgot Password ?</Link>
                </p>
                <button type="submit" className="loginBtn">
                  Login
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
