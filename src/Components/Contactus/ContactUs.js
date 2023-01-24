import "./ContactUs.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { axios } from "axios";
export default function ContactUs() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const SaveUser = () => {
    const commentData = { firstname, lastname, email, comment };
    console.log(commentData);
    axios
      .post("http://localhost:5000/comment", commentData)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="contactUs-row-1">
        <div className="contactUs-Header">
          <div className="contactUs-HeaderLogo">
            <h1>Contact US</h1>
          </div>
        </div>
      </div>
      <div className="contactUs-row-2">
        <div className="contactInfo">
          <div className="contactInfoLeft">
            <div className="contactInfoLeft-details">
              <h2>
                <FontAwesomeIcon
                  id="contactInfoLeft-logo"
                  icon={faLocationDot}
                  size="gl"
                />{" "}
                Office Address
              </h2>
              <p>Street 21 Gulberg 3 Lahore,Pakistan.</p>
              <p>127 Oxford Street Gulberg 5 Lahore,Pakistan.</p>
            </div>
            <div className="contactInfoLeft-details">
              <h2>
                <FontAwesomeIcon
                  id="contactInfoLeft-logo"
                  icon={faEnvelope}
                  size="gl"
                />{" "}
                Email Address
              </h2>
              <p>Webdevsofttechnologies@gmail.com</p>
              <p>Futuretechnologies@gmail.com</p>
            </div>
            <div className="contactInfoLeft-details">
              <h2>
                <FontAwesomeIcon
                  id="contactInfoLeft-logo"
                  icon={faPhone}
                  size="gl"
                />{" "}
                Phone Number
              </h2>
              <p>+923131499465</p>
              <p>+42043509499487</p>
            </div>
          </div>
          <div className="contactInfoRight">
            <h1>Comment Here</h1>
            <div className="commentForm">
              <div className="comment-textfields">
                <TextField
                  // name='name' value={} onChange={}
                  fullWidth
                  id="outlined-basic"
                  autoComplete="off"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "#f7941d",
                    },
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& label.Mui-focused": {
                      color: "#f7941d",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
              </div>
              <div className="comment-textfields">
                <TextField
                  // name='name' value={} onChange={}
                  fullWidth
                  id="outlined-basic"
                  autoComplete="off"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "#f7941d",
                    },
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& label.Mui-focused": {
                      color: "#f7941d",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
              </div>
              <div className="comment-textfields">
                <TextField
                  // name='name' value={} onChange={}
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  autoComplete="off"
                  label="Comment"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "#f7941d",
                    },
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& label.Mui-focused": {
                      color: "#f7941d",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
                <button
                  type="submit"
                  onClick={SaveUser}
                  className="commentFormSumbitBtn"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contactUs-row-3">
          <div className="contactMap">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1TfXeVTwnym2Gk4ID7wKP1aXB-H9NfxQ&ehbc=2E312F"
              title="our-location"
              width="100%"
              height="550px"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
