import React from "react";
import "./ottp.css";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axios } from "axios";
import { useEffect } from "react";
export default function SubmitOttp() {
  const { id, token } = useParams();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState({
    password: "",
  });
  const handler = (e) => {
    const { name, value } = e.target;
    setUserEmail({
      ...userEmail,
      [name]: value,
    });
  };
  const confirmOttp = async () => {
    await axios
      .get(`http://localhost:5000/api/v1/forgot/password/token/${id}/${token}`)
      .then((res) => {
        if (res.status === 201) {
          console.log("Valid User");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendUpdatePassword = async () => {
    await axios
      .post(`http://localhost:5000/api/v1/${id}/${token}`, userEmail)
      .then((res) => {
        if (res.status === 201) {
          alert("Password Update Successfully");
          history("/login");
        }
        if (res.status === 401) {
          alert("Token isExpire");
        }
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    sendUpdatePassword();
    confirmOttp();
  }, []);
  return (
    <div>
      <div className="ottp">
        <div className="container">
          <h3>Donate Happiness Recovery</h3>

          <div className="forgot">
            <h4>Verify Ottp Code</h4>
            <input
              type="text"
              name="password"
              value={userEmail.password}
              onChange={handler}
              placeholder="Enter New Password"
            />
            <br />
            <button onClick={sendUpdatePassword} className="forgotPassBtn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
