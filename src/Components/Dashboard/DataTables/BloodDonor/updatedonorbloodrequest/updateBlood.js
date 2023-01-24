import { Alert, AlertTitle, Menu, Select, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./updateBlood.css";
import axios from "axios";
import { useEffect } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";
export default function UpdateBloodStatus() {
  const [user, setUser] = useState([{}]);
  const history = useHistory();
  const [dataInput, setDataInput] = useState({
    name: "",
    cnic: "",
    city: "",
    blood: "",
    donorAge: "",
    phoneNo: "",
    donorAddress: "",
    bloodStatus: "",
  });
  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };
  const { id } = useParams("");
  console.log(id);

  const getUserIdData = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/donor/${id}`)
      .then((res) => {
        const data = res.data.getSingleDonor;
        setDataInput(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserIdData();
  }, []);
  const updateUserStatusHandler = (e) => {
    e.preventDefault();
    const { bloodStatus } = dataInput;

    const reult = axios
      .put(`http://localhost:5000/api/v1/update/donor/${id}`, {
        bloodStatus,
      })
      .then((res) => {
        alert("User Updated Successfullly");
        history.push("/dashboard");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="updateRequestStatus">
        <h1>Update Blood Status</h1>
        <div className="request-Details">
          <div className="leftIconDiv">
            <div className="iconDiv">
              <img src="/assets/sliderimgs/userDetailIcon.png" alt="userIcon" />
            </div>
          </div>
          <div className="rightStatusDetails">
            <div className="textfields">
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.name}
                  onChange={handler}
                  label="Name"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.cnic}
                  onChange={handler}
                  label="Cnic"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </div>
            <div className="textfields">
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.city}
                  onChange={handler}
                  label="City"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.blood}
                  onChange={handler}
                  label="Blood"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </div>
            <div className="textfields">
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.donorAge}
                  onChange={handler}
                  label="Age"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.phoneNo}
                  onChange={handler}
                  label="Phone No"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </div>
            <div className="textfields">
              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  value={dataInput.donorAddress}
                  onChange={handler}
                  label="Address"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <div className="textfield">
                <TextField
                  name="Blood Status"
                  value={dataInput.bloodStatus}
                  onChange={handler}
                  autoComplete="off"
                  variant="outlined"
                  label="Blood Status"
                  select
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Recieved">Received</MenuItem>
                  <MenuItem value="Not-Recieved">Not Received</MenuItem>
                  <MenuItem value="Denied">Denied</MenuItem>
                </TextField>
              </div>
            </div>
            <button onClick={updateUserStatusHandler} className="updateBtn">
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
