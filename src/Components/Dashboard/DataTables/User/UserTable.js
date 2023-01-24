import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { AxiosProvider } from "react-axios";
import { HashLink } from "react-router-hash-link";
import "./UserTable.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function UserTable() {
  const { id } = useParams("");
  const [UserData, setUserData] = useState([]);
  const [singleUserDataOpen, setSingleUserDataClose] = useState(false);
  const getUserTableData = async (req, res) => {
    await axios
      .get("http://localhost:5000/api/v1/getusers")
      .then((res) => {
        const data = res.data.getAllUserData;
        setUserData(data);
      })
      .catch((err) => {
        // deleteUser();
      });
  };
  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/delete/${id}`)
      .then((res) => {
        const data = res.data.getAllUserData;
        getUserTableData();
        alert("User Deleted Successfully");
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserTableData();
    deleteUser();
  }, []);
  const viewDataHandler = () => {
    setSingleUserDataClose(true);
  };
  return (
    <div>
      <thead id="user-table-head">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <div className="Usertable">
        <table className="table">
          <tbody className="tbody">
            {UserData.map((ele, id) => {
              return (
                <>
                  <tr>
                    {/* <td id='dataId'>{id + 1}</td> */}

                    <td>{ele.firstName}</td>
                    <td>{ele.email}</td>
                    <td>
                      {ele.role.charAt(0).toUpperCase() + ele.role.slice(1)}
                    </td>
                    <td>
                      <div className="oprBtn">
                        <Link to={`/dashboard/data/${ele._id}`}>
                          <button onClick={viewDataHandler}>View</button>
                        </Link>
                        <Link to={`/dashboard/update/role/user/${ele._id}`}>
                          <button>Update</button>
                        </Link>
                        <button onClick={() => deleteUser(ele._id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
