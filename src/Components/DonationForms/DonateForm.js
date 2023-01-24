import React, { useState } from "react";
import "./DonateForm.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export default function DonateForm() {
  const [easyPaisaopen, setEasypaisaOpen] = useState(false);
  const [jazzcashopen, setJazzcashOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const setEValueOpen = () => {
    setEasypaisaOpen(!easyPaisaopen);
  };

  const setJValueOpen = () => {
    setJazzcashOpen(!jazzcashopen);
  };
  const [bloodRequesterUser, setBloodrequesterUser] = useState({
    name: "",
    cardName: "",
    cvv: "",
    longCard: "",
    donateAmount: "",
    phone: "",
  });

  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBloodrequesterUser({
      ...bloodRequesterUser,
      [name]: value,
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Required";
    }
    if (!values.cardName) {
      errors.cardName = "Card Name is Required";
    }
    if (!values.cvv) {
      errors.cvv = "Cvv is Required";
    } else if (values.cvv.length < 3) {
      errors.cvv = "Cvv must be 3 Digist *";
    } else if (values.cvv.length > 3) {
      errors.cvv = "Cvv must be 3 Digist * ";
    }
    if (!values.longCard) {
      errors.longCard = "Long Card is Required";
    } else if (values.longCard.length < 12) {
      errors.longCard = "Long Card must be 12 Digist * ";
    } else if (values.longCard.length > 12) {
      errors.longCard = "Long Card must be 12 Digist * ";
    }
    if (!values.donateAmount) {
      errors.donateAmount = "Donate Amount is Required";
    }
    if (!values.phone) {
      errors.phone = "Phone No is Required";
    } else if (values.phone.length > 11) {
      errors.phone = "Phone No must be 11 Digits ";
    } else if (values.phone.length < 11) {
      errors.phone = "Phone No must be 11 Digits ";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(bloodRequesterUser);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    const { name, cardName, cvv, longCard, donateAmount, phone } =
      bloodRequesterUser;
    e.preventDefault();
    setFormErrors(validate(bloodRequesterUser));
    if (name && cardName && cvv && longCard && donateAmount && phone) {
      if (cvv.length == 3 && longCard.length == 12 && phone.length == 11) {
        setIsSubmit(true);
        axios
          .post("http://localhost:5000/api/v1/charity", bloodRequesterUser)
          .then((res) => {
            if (res.status === 200) {
              alert("Your Request Submitted Successfully");
            } else {
              console.log("request field");
            }
            // console.log(res.data);
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
      <div className="main-DonationForm">
        <div className="donation-conatiner">
          <form
            onSubmit={handleSubmit}
            className="donationAmountForm"
            id="donationAmountForm"
          >
            <h1>Donate for Save Lifes</h1>
            <p>You can save millions of people lifes by Donating.</p>
            <div className="donationPaymentMethodLogos">
              <TextField
                name="name"
                value={bloodRequesterUser.name}
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
              <TextField
                name="cardName"
                value={bloodRequesterUser.cardName}
                onChange={handler}
                fullWidth
                id="outlined-basic"
                autoComplete="off"
                label="Name on Card"
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
              <p id="error-message"> {formErrors.cardName}</p>
              <div className="paymentMethods">
                <div className="jazzcash">
                  <img
                    onClick={setJValueOpen}
                    src="/assets/sliderimgs/jazzcash-logo.png"
                    alt="jazzcash"
                  />
                  {easyPaisaopen ? null : jazzcashopen ? (
                    <div className="jazzDialog-box">
                      <div className="jazzdialogBox-Content">
                        <h3>Our jazzCash</h3>
                        <p>
                          If anyone want to donate via jazzCash, can send us
                          amount on our jazzcash account . <br />
                          <br />
                          Account Title : Donate Happiness <br />
                          Account No : <span>03131499465</span>
                        </p>
                      </div>
                      <button
                        className="jazzCash-CloseBtn"
                        onClick={() => setJazzcashOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="easypaisa">
                  <img
                    onClick={setEValueOpen}
                    src="/assets/sliderimgs/easypaisa-logo.png"
                    alt="easypaisa"
                  />
                  {easyPaisaopen ? (
                    <div className="easypaisaDialog-box">
                      <div className="easydialogBox-Content">
                        <h3>Our EasyPaisa</h3>
                        <p>
                          If anyone want to donate via EasyPaisa, can send us
                          amount on our easypaisa account . <br />
                          <br />
                          Account Title : Donate Happiness <br />
                          Account No : <span>03131499465</span>
                        </p>
                      </div>
                      <button
                        className="easypaisa-CloseBtn"
                        onClick={() => setEasypaisaOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <TextField
                name="cvv"
                value={bloodRequesterUser.cvv}
                onChange={handler}
                id="outlined-basic"
                autoComplete="off"
                type="number"
                label="Cvv"
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
              <p id="error-message"> {formErrors.cvv}</p>
              <TextField
                name="longCard"
                value={bloodRequesterUser.longCard}
                onChange={handler}
                fullWidth
                id="outlined-basic"
                autoComplete="off"
                label="Long Card No"
                type="number"
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
              <p id="error-message"> {formErrors.longCard}</p>
              <TextField
                name="donateAmount"
                value={bloodRequesterUser.donateAmount}
                onChange={handler}
                id="outlined-basic"
                autoComplete="off"
                label="Amount to Donate"
                type="number"
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
              <p id="error-message"> {formErrors.donateAmount}</p>
              <TextField
                name="phone"
                value={bloodRequesterUser.phone}
                onChange={handler}
                fullWidth
                id="outlined-basic"
                autoComplete="off"
                type="number"
                label="Phone No"
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

              <button type="submit" className="donateAmountBtn">
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
