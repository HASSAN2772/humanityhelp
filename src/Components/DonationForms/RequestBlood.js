import React, { useState, useEffect } from "react";
import "./RequestBlood.css";
import { MenuItem, TextField } from "@mui/material";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function DonateBlood() {
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [requestuser, setRequestuser] = useState({
    name: "",
    cnic: "",
    city: "",
    blood: "",
    age: "",
    phone: "",
    address: "",
  });
  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRequestuser({
      ...requestuser,
      [name]: value,
    });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Require";
    }
    if (!values.cnic) {
      errors.cnic = "CNIC is Require";
    } else if (values.cnic.length < 13) {
      errors.cnic = "Cnic must be 13 Digist *";
    } else if (values.cnic.length > 13) {
      errors.cnic = "Cvv must be 13 Digist * ";
    }
    if (!values.city) {
      errors.city = "City is Require";
    }
    if (!values.blood) {
      errors.blood = "Blood is Require";
    }
    if (!values.age) {
      errors.age = "Age is Require";
    } else if (values.age < 18) {
      errors.age = "Only 19 Plus and Request Blood";
    } else if (values.age > 100) {
      errors.age = "Ge must be between 100 to Request Blood";
    } else if (values.age > 150) {
      errors.age = "Age cannot exceed 150 Years Old";
    }
    if (!values.phone) {
      errors.phone = "Phone is Require";
    } else if (values.phone.length > 11) {
      errors.phone = "Phone No must be 11 Digits ";
    } else if (values.phone.length < 11) {
      errors.phone = "Phone No must be 11 Digits ";
    }
    if (!values.address) {
      errors.address = "Address is Require";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    const { name, cnic, city, blood, age, phone, address } = requestuser;
    e.preventDefault();
    setFormErrors(validate(requestuser));
    if (name && cnic && city && blood && age && phone && address) {
      if (cnic.length == 13 && phone.length == 11 && age > 18 && age < 100) {
        setIsSubmit(true);
        console.log(requestuser);
        axios
          .post("http://localhost:5000/api/v1/blood/request", requestuser)
          .then((res) => {
            console.log(res.data);
            alert("Your Request Submitted Successfully");
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
    }
  };
  return (
    <div>
      <Navbar />
      <div id="main-requestBloodForm">
        <div className="requestBlood-conatiner">
          <form onSubmit={handleSubmit} className="requestBloodAmountForm">
            <h1>Request Blood</h1>
            <p>
              Its Our Duty to Help Needy People Who are Facing Problmes Related
              Bloods or Charity.
            </p>
            <div className="textfields">
              <div className="textfield">
                <TextField
                  name="name"
                  value={requestuser.name}
                  onChange={handler}
                  fullWidth
                  id="outlined-basic"
                  autoComplete="off"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <p id="error-message"> {formErrors.name}</p>
              </div>
              <div className="textfield" id="textfields">
                <TextField
                  name="cnic"
                  value={requestuser.cnic}
                  onChange={handler}
                  fullWidth
                  id="outlined-basic"
                  type="number"
                  autoComplete="off"
                  label="CNIC"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <p id="error-message"> {formErrors.cnic}</p>
              </div>
            </div>
            <div className="textfields">
              <div className="textfield" id="textfields">
                <TextField
                  name="blood"
                  value={requestuser.blood}
                  onChange={handler}
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiSelect-iconOpen": {
                      color: "white",
                    },
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                    "&:hover .MuiOutlinedInput-input": {
                      color: "white",
                    },
                    "&:hover .MuiInputLabel-root": {
                      color: "white",
                    },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                      {
                        color: "white",
                      },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                  }}
                  autoComplete="off"
                  variant="outlined"
                  label="Blood Type"
                  select
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </TextField>
                <p id="error-message"> {formErrors.blood}</p>
              </div>
              <div className="textfield" id="textfields">
                <TextField
                  name="age"
                  value={requestuser.age}
                  onChange={handler}
                  fullWidth
                  id="outlined-basic"
                  type="number"
                  autoComplete="off"
                  label="Age"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <p id="error-message"> {formErrors.age}</p>
              </div>
            </div>
            <div className="textfields-ful">
              <TextField
                name="phone"
                onChange={handler}
                fullWidth
                id="outlined-basic"
                autoComplete="off"
                type="tel"
                value={requestuser.phone}
                label="Phone no."
                variant="outlined"
                margin="normal"
                sx={{
                  "& .MuiFormLabel-root": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <p id="error-message"> {formErrors.phone}</p>
            </div>
            <div className="textfields-ful">
              <TextField
                name="city"
                value={requestuser.city}
                onChange={handler}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiSelect-iconOpen": {
                    color: "white",
                  },
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-input": {
                    color: "white",
                  },
                  "&:hover .MuiInputLabel-root": {
                    color: "white",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "white",
                    },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
                autoComplete="off"
                variant="outlined"
                label="City"
                select
                fullWidth
                margin="normal"
              >
                <MenuItem defaultValue="Lahore" value="Lahore">
                  Lahore
                </MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
                <MenuItem value="Faisalabad">Faisalabad</MenuItem>
              </TextField>
              <p id="error-message"> {formErrors.city}</p>
            </div>
            <div className="textfields-address">
              <TextField
                name="address"
                value={requestuser.address}
                onChange={handler}
                fullWidth
                id="outlined-basic"
                autoComplete="off"
                label="Requester Address"
                variant="outlined"
                margin="normal"
                sx={{
                  "& .MuiFormLabel-root": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <p id="error-message"> {formErrors.address}</p>
            </div>
            <button type="submit" className="requestAmountBtn">
              Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
