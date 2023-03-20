import React from "react";
import { useState } from "react";
import "./ResetPassword.css";
import { axios } from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function ForgotPassword() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState({
    email: "",
  });
  const handler = (e) => {
    const { name, value } = e.target;
    setUserEmail({
      ...userEmail,
      [name]: value,
    });
  };
  console.log(userEmail.email);
  const forgotemail = async (req, res) => {
    try {
      await axios
        .post("http://localhost:5000/api/v1/forgot/password", userEmail)
        .then((res) => {
          if (res.status === 202) {
            alert("Invalid Email Address");
          }
          if (res.status === 200) {
            alert("Ottp Send Successfully");
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="forgotPassword">
        <div className="container">
          <h3>Donate Happiness Recovery</h3>

          <div className="forgot">
            <h4>Forgot Password</h4>
            <input
              type="text"
              name="email"
              value={userEmail.email}
              onChange={handler}
              placeholder="PLease Enter Your Email"
            />
            <br />
            <button onClick={forgotemail} className="forgotPassBtn">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
