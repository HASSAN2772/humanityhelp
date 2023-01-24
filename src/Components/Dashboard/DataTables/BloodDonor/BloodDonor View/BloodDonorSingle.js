import React from "react";
import { useHistory } from "react-router-dom";
import "./BloodDonorSingle.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function BloodDonorSingle() {
  const history = useHistory();

  const [user, setUser] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getUserIdData = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/donor/${id}`)
      .then((res) => {
        const data = res.data.getSingleDonor;
        setUser(data);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserIdData();
  }, []);
  const sendBackDashboard = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      <div className="checkRequester" id="checkUser">
        <h2>Get Blood Donor </h2>

        <div className="singleRequester">
          <div className="UserIcon">
            <div className="icon">
              <img src="/assets/sliderimgs/userDetailIcon.png" alt="userIcon" />
            </div>
          </div>
          <div className="User-Details">
            <span>Mr / Mrs Name </span> : {user.name} <br />
            <br />
            <span>Blood Status </span> : {user.bloodStatus} <br />
            <br />
            <span> CNIC</span> : {user.cnic}
            <br />
            <br />
            <span>City</span> : {user.city} <br />
            <br />
            <span>Donor Age</span> : {user.donorAge}
            <br />
            <br />
            <span>Address</span> : {user.donorAddress}
            <br />
            <br />
            <span>Phone No</span> : {user.phoneNo}
            <br />
            <br />
            <span>User _Id</span> : {user._id} <br />
            <br />
          </div>
          <button onClick={sendBackDashboard} className="closeSingleUser-btn">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
