import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Navbar() {
  const history = useHistory();
  const isAuthUser = localStorage.getItem("token");
  const loginUserName = localStorage.getItem("loginUserName");
  const logoutUser = () => {
    localStorage.clear();
    alert("User Logout Succesuflly");
    history.push("/applicants");
  };
  return (
    <div>
      <header>
        <div className="m-header">
          <div className="header-container">
            <nav className="header-nav">
              <ul className="header-ul">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100011483130209"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+923228039792" target={"_blank"}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Muhamma13489729"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/call_me_mr_ra/"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
              <div className="header-btn">
                <span> {loginUserName}</span>
                {isAuthUser ? (
                  <button onClick={logoutUser} className="h-registerbtn">
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="h-loginbtn">Login</button>
                  </Link>
                )}
              </div>
            </nav>
            <div className="headerlogo">
              <div className="logoimg-div">
                <img
                  src="/assets/sliderimgs/Logo.png"
                  alt="img"
                  style={{ width: "250px", height: "130px" }}
                />
              </div>
              <ul className="ul-menu">
                <li>
                  <Link to="/" id="menu-ul-Link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" id="menu-ul-Link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/applicants" id="menu-ul-Link">
                    Applicants
                  </Link>
                </li>
                <li>
                  <Link to="/contact" id="menu-ul-Link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <HashLink to={"/#donate-Sec"}>
                {" "}
                <button className="h-donatebtn">Donate Now</button>
              </HashLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
