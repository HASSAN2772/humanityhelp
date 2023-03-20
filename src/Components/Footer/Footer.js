import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHandHoldingDollar,
  faHouse,
  faBookOpen,
  faHouseMedical,
  faHouseCircleXmark,
  faHandsHoldingChild,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClipboardQuestion,
  faUpRightAndDownLeftFromCenter,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faImage, faAddressBook } from "@fortawesome/free-regular-svg-icons";
export default function Footer() {
  return (
    <div>
      <div className="main-footer">
        <div className="footer-Container">
          <div className="footerLogo">
            <img
              src="/assets/sliderimgs/Logo.png"
              alt="logo"
              style={{ width: "250px", height: "130px" }}
            />
            <ul className="ul">
              <li>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} size="gl" />{" "}
                  <label>Email :</label> Webdevsofttechnologies@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <address>
                    <FontAwesomeIcon icon={faLocationDot} size="gl" /> Street 21
                    Gulberg 3 Lahore,Pakistan.
                  </address>
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faPhone} size="gl" /> Ph :
                  +923131499465
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-home-Link">
            <div className="home-Links">
              <h2 id="footer-home-links-h2">About Us</h2>
              <ul className="ul">
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faHouse}
                      size="gl"
                    />{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faImage}
                      size="gl"
                    />
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faHandHoldingDollar}
                      size="gl"
                    />
                    Donate Now
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faAddressBook}
                      size="gl"
                    />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-services">
            <div className="services-Links">
              <h2>Our Services </h2>
              <ul className="ul">
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faBookOpen}
                      size="gl"
                    />
                    For Education
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faHouseMedical}
                      size="gl"
                    />
                    For Health
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faHouseCircleXmark}
                      size="gl"
                    />
                    For Homeless
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faHandsHoldingChild}
                      size="gl"
                    />
                    For Save Childs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-coantacts">
            <div className="conatct-Links">
              <h2>Get in Touch</h2>
              <ul className="ul">
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faPerson}
                      size="gl"
                    />
                    Get Supports
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faUpRightAndDownLeftFromCenter}
                      size="gl"
                    />
                    Community
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faClipboardQuestion}
                      size="gl"
                    />
                    For Query
                  </a>
                </li>
                <li>
                  <a href="" className="ul-footer-tags">
                    <FontAwesomeIcon
                      id="fahouseIcon"
                      icon={faAddressBook}
                      size="gl"
                    />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="copyrightPara">
            <p>
              © Donate Happiness all Rights Reserved. Designed by{" "}
              <span className="copyrightPara-span">WebDev Technologies.</span>
            </p>
          </div>
          <div className="copyright-Links">
            <ul className="ul-copyright-Links">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100011483130209"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+923228039792" target={"_blank"}>
                  <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Muhamma13489729" target={"_blank"}>
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </a>
              </li>
              <li id="link-faInsta">
                <a
                  href="https://www.instagram.com/call_me_mr_ra/"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
