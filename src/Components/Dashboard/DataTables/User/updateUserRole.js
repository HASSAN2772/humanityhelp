import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./updateUserRole.css";
export default function UpdateUserRole() {
  const history = useHistory();
  const [updateRole, setUpdateRole] = useState({
    role: "",
  });
  const { id } = useParams("");
  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdateRole({
      ...updateRole,
      [name]: value,
    });
  };
  console.log(updateRole);
  const getUserIdData = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/user/${id}`)
      .then((res) => {
        const data = res.data.getSingleUserData;
        setUpdateRole(data);
        console.log(updateRole);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserIdData();
  }, []);
  const updateRoleUser = (e) => {
    e.preventDefault();
    const { role } = updateRole;
    const reult = axios
      .put(`http://localhost:5000/api/v1/update/role/user/${id}`, {
        role,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("User Updated Successfullly");
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="updateRole-Div">
        <div className="updateField">
          <TextField
            name="role"
            value={updateRole.role}
            onChange={handler}
            autoComplete="off"
            variant="outlined"
            label="User Role"
            select
            fullWidth
            margin="normal"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <button onClick={updateRoleUser}>Update Role</button>
        </div>
      </div>
    </div>
  );
}
