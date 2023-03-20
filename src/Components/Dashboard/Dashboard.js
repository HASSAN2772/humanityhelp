import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";
import UserTable from "./DataTables/User/UserTable";
import CharityTable from "./DataTables/Charity/charityTable";
import BloodDonorTable from "./DataTables/BloodDonor/blooddonor";
import RequestedBloodTable from "./DataTables/RequestedBloodData/RequestedBloodTable";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {
  //getting data from props
  const history = useHistory();
  let counter = 9;
  const [getTotalBloodRequest, setGetTotalBloodRequest] = useState({});
  const [charitySum, setCharitySum] = useState({ _id: null, donate: 0 });
  const result = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/requested/users`)
      .then((res) => {
        const data = res.data;
        console.log("getTotalBloodRequest", data);
        setGetTotalBloodRequest(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [donors, setDonors] = useState("");
  const [charityDonors, setCharityDonors] = useState("");
  const [totalRegisterUser, setTotalRegisterUser] = useState("");
  const getCharitySum = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/charitySum`)
      .then((res) => {
        console.log("setCharitySum", res.data);
        setCharitySum(res.data[0]);
      })
      .catch((err) => {
        console.error("setCharitySum", err);
      });
  };
  console.log("setCharitySum", charitySum);
  const getTptalRegister = async (req, res) => {
    await axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        setTotalRegisterUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDonors = async (req, res) => {
    await axios
      .get("http://localhost:5000/api/v1/donors")
      .then((res) => {
        setDonors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCharityDonor = async (req, res) => {
    await axios
      .get("http://localhost:5000/api/v1/charity/donors")
      .then((res) => {
        console.log("donor", res.data);
        setCharityDonors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logoutUSer = () => {
    localStorage.clear();
    alert("User Logout Succesuflly");
    history.push("/");
  };
  useEffect(() => {
    result();
    getCharitySum();
    getDonors();
    getCharityDonor();
    getTptalRegister();
  }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-conatiner">
          <div className="lefSide-Menu">
            <div className="lelfSide">
              <h1>Dashboard</h1>
              <ul className="dashboard-ul">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <HashLink to={"/dashboard#userTable-link"}>Users</HashLink>
                </li>
                <li>
                  <HashLink to={"/dashboard#charityTable-Link"}>
                    Charity
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/dashboard#bloodDonor-link"}>Donors</HashLink>
                </li>
                <li>
                  <HashLink to={"/dashboard#requestBlood-h2"}>
                    Requesters
                  </HashLink>
                </li>
                <li>
                  <HashLink>summary</HashLink>
                </li>
                <li>
                  <HashLink>Admin</HashLink>
                </li>
                <button onClick={logoutUSer}>Logout</button>
              </ul>
            </div>
          </div>
          <div className="RightSide-Details">
            <div className="summary">
              Here is Overall about user and their requests
            </div>
            <div className="data-Details">
              <div className="box-1">
                <p>{donors.getTotalDonors}</p>
                <h6>Current Blood Donors</h6>
              </div>
              <div className="box-1">
                <p>{charityDonors.numberCharityDonors}</p>
                <h6>Current Charity Donors</h6>
              </div>
              <div className="box-1">
                <p>{counter}</p>
                <h6>No's of Helped People</h6>
              </div>
              <div className="box-1">
                <p>{totalRegisterUser.gettotalUsers}</p>
                <h6>Current Register Users</h6>
              </div>
            </div>
            <div className="user-Details">
              <div className="box-1-bloodRequest">
                <div className="bloodRequest">
                  <h3>Total Blood Request Recieved</h3>
                  <p>{getTotalBloodRequest.numberRequestedBloood}</p>
                </div>
              </div>
              <div className="box-1-bloodRequest">
                <div className="bloodRequest">
                  <h3>Total Charity Recieved</h3>
                  <p>{charitySum.donate}</p>
                </div>
              </div>
            </div>
            <div className="tables">
              <div className="user-table">
                <h2 id="userTable-link"> Users and Their Information</h2>
                <UserTable />
              </div>
            </div>
          </div>
        </div>
        <div className="datatables-bloods">
          <h2 id="charityTable-Link"> Charity Donors Details</h2>
          <CharityTable getCharityUsers={getCharityDonor} />
          <h2 id="bloodDonor-link"> Blood Donors Details</h2>
          <BloodDonorTable getDonors={getDonors} />
          <h2 id="requestBlood-h2"> Requested Blood Details</h2>
          <RequestedBloodTable getbloodRequested={result} />
        </div>
      </div>
    </div>
  );
}
