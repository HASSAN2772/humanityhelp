import React from "react";
import { useState } from "react";
import "./charityTable.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CharityTable(props) {
  const [getCharityUser, setGetCharityUser] = useState([{}]);
  const [getDeletedUser, setGetDeletedUser] = useState();
  const result = async (req, res) => {
    await axios
      .get(`http://localhost:5000/api/v1/charity/donor`)
      .then((res) => {
        const data = res.data.getCharityDonors;
        console.log(data);
        setGetCharityUser(data);
      })
      .then((err) => {
        console.error(err);
      });
  };
  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/v1/delete/charity/user/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("User Deleted Successfully");
        }
        if (res.status === 402) {
          alert("error in server");
        }
      })
      .then((res) => {
        result();
        setGetDeletedUser(props.getCharityUsers);
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
          <th>Cvv</th>
          <th>Card No</th>
          <th>Amount </th>
          <th>Contact </th>
          <th>Status </th>
        </tr>
      </thead>
      <div className="charity-table">
        <table className="table">
          <tbody className="tbody">
            {getCharityUser.map((ele) => {
              return (
                <>
                  <tr>
                    {/* <td>{id +1 }</td>   */}
                    <td>{ele.cardName}</td>
                    <td>{ele.cvv}</td>
                    <td>{ele.longCard}</td>
                    <td>{ele.donate}</td>
                    <td>{ele.phone}</td>
                    <div className="oprBtn">
                      <Link to={`/dashboard/charity/data/${ele._id}`}>
                        {" "}
                        <button>View</button>
                      </Link>
                      <button
                        onClick={() => {
                          deleteUser(ele._id);
                        }}
                      >
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
