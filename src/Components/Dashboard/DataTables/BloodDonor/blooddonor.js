import React from "react";
import "./blooddonor.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function BloodDonorTable(props) {
  const [getBloodDonorUser, setGetBloodDonorUser] = useState([{}]);
  const [getDonors, setDonors] = useState();
  const result = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/donors/detail`)
      .then((res) => {
        const data = res.data.getyDonorUsers;
        setGetBloodDonorUser(data);
      })
      .catch((err) => {});
  };
  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/delete/blooddonor/${id}`)
      .then((res) => {
        const data = res.data.deleteSingleDonor;
        alert("User Deleted Successfully");
      })
      .then((res) => {
        result();
        setDonors(props.getDonors);
      });
  };

  useEffect(() => {
    result();
  }, []);
  return (
    <div>
      <thead id="charity-thead">
        <tr id="charity-thead-tr">
          <th>Name</th>
          <th>Blood Group</th>
          <th>Age </th>
          <th>City </th>
          <th>Phone </th>
          <th>Status </th>
        </tr>
      </thead>
      <div className="bloodDonor-table">
        <table className="table">
          <tbody className="tbody">
            {getBloodDonorUser.map((ele, id) => {
              return (
                <>
                  <tr>
                    <td>{ele.name}</td>
                    <td>{ele.blood}</td>
                    <td>{ele.donorAge}</td>
                    <td>{ele.city}</td>
                    <td>{ele.phoneNo}</td>
                    <div className="oprBtn">
                      <Link to={`/blood/donor/single/${ele._id}`}>
                        <button>View</button>
                      </Link>
                      <Link to={`/dashboard/update/blood/${ele._id}`}>
                        <button>Update</button>
                      </Link>
                      <button onClick={() => deleteUser(ele._id)}>
                        Delete
                      </button>
                    </div>
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
