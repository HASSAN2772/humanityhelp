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
import axios from "axios";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const SaveUser = () => {
    axios
      .post("http://localhost:5000/api/v1/user-comments", {
        name,
        email,
        comment,
      })
      .then((res) => {
        console.log(res);
        alert("Commented successfully");
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
                  value={name}
                  onChange={(e) => {
                    const { value } = e.target;
                    setName(value);
                  }}
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
                  value={email}
                  onChange={(e) => {
                    const { value } = e.target;
                    setEmail(value);
                  }}
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
                  name="name"
                  value={comment}
                  onChange={(e) => {
                    const { value } = e.target;
                    setComment(value);
                  }}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34687.32075293577!2d74.30430944277987!3d31.49970789431532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a28ff1d39%3A0xf71e739b84b3c3c!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679376465595!5m2!1sen!2s"
              title="our-location"
              width="100%"
              height="550px"
            />

            {/* <iframe

              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            /> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
