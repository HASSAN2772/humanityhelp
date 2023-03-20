import React from "react";
import "./main.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Slider from "../Sliders/Slider";
import OwlCarousel from "react-owl-carousel";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Main() {
  const [donors, setDonors] = useState("");
  const [charityDonors, setCharityDonors] = useState("");
  const [totalRegisterUser, setTotalRegisterUser] = useState("");
  let counter = 9;
  const getDonors = () => {
    axios
      .get("http://localhost:5000/api/v1/donors")
      .then((res) => {
        setDonors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCharityDonor = () => {
    axios
      .get("http://localhost:5000/api/v1/charity/donors")
      .then((res) => {
        setCharityDonors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getTptalRegister = () => {
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        setTotalRegisterUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDonors();
    getCharityDonor();
    getTptalRegister();
  }, []);
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="main-div">
        <div className="row-1">
          <div className="row1-welComeToDonate">
            <h1>Welcome to Donate Happiness</h1>
            <spam className="row1-spam">
              "We Make A Living By What We Get. We Make A Life By What We Give."
            </spam>
            <p className="row1-deatilPara">
              A donation is a gift for charity, humanitarian aid, or to benefit
              a cause. A donation may take various forms, including money, alms,
              services, or goods such as clothing, toys, food, or vehicles. A
              donation may satisfy medical needs such as blood or organs for
              transplant.
            </p>
          </div>
          <div className="donationBoxes">
            <div className="donationBox-1">
              <div className="donationBoxLogo-1">
                <img src="/assets/sliderimgs/help-icon.png" alt="help-icon" />
              </div>
              <h3>Help the Children</h3>
              <p>
                One of the most powerful forces on earth is the prayer of a
                child.
              </p>
            </div>
            <div className="donationBox-2">
              <div className="donationBoxLogo-2">
                <img
                  src="/assets/sliderimgs/volunteer-icon.png"
                  alt="volunteer-icon"
                />
              </div>
              <h3>Become a Volunteer</h3>
              <p>
                The best way to find yourself is to lose yourself in the service
                of others.
              </p>
            </div>
            <div className="donationBox-3">
              <div className="donationBoxLogo-3">
                <img
                  src="/assets/sliderimgs/education-icon.png"
                  alt="education-icon"
                />
              </div>
              <h3>Child Education</h3>
              <p>
                Every child should have the opportunity to receive a quality
                education.
              </p>
            </div>
            <div className="donationBox-4">
              <div className="donationBoxLogo-4">
                <img
                  src="/assets/sliderimgs/donation-icon.png"
                  alt="donation-icon"
                />
              </div>
              <h3>Give Donation</h3>
              <p>
                Giving is not just about make a donation, it's about making a
                difference.
              </p>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="aboutDonation">
            <div className="aboutDonationLeft">
              <img
                className="aboutDonationLeft-Img"
                src="/assets/sliderimgs/about-img.jpg"
                alt="aboutg-img"
              />
            </div>
            <div className="aboutDonationRight">
              <h1>
                If you didn't know, Here's a bit{" "}
                <span className="aboutDonationRight-span">about us.</span>
              </h1>
              <p>
                The Donate Happiness network is the nation’s largest domestic
                poverty-relief organization, working to connect people with food
                & other things and end poverty. Donors, staff, and volunteers
                all play an important role in our efforts to end poverty in all
                over the world.
              </p>
              <button className="aboutDonationBtn">
                <a
                  className="aboutDonationBtn-1"
                  href="https://en.wikipedia.org/wiki/Donation"
                  target={"_blank"}
                >
                  For More
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="row-3">
          <div className="countDoantion">
            <div className="countDonationBox-1">
              <div className="donoCountLogo">
                <FontAwesomeIcon icon={faInstagram} />
                <br></br>
                <span>Donated {donors.getTotalDonors} </span>
              </div>
            </div>
            <div className="countDonationBox-2">
              <div className="donoCountLogo">
                <span>Charity {charityDonors.numberCharityDonors} </span>
              </div>
            </div>
            <div className="countDonationBox-3">
              <div className="donoCountLogo">Helped {counter}</div>
            </div>
            <div className="countDonationBox-4">
              <div className="donoCountLogo">
                Users {totalRegisterUser.gettotalUsers}
              </div>
            </div>
          </div>
        </div>
        <div id="donate-Sec">
          <div className="donateSec-Conatiner" id="donate-Sec">
            <div className="donateSec-btns">
              <h1>Here we are </h1>
              <p id="donateSec-Para">
                Here you can donate or request for a blood and if you want to
                give Charity you can also give us for poor or needy.
              </p>
              <HashLink to="/requestblood#main-requestBloodForm">
                {" "}
                <button id="donateSec-RequestBloodBtn">Request Blood</button>
              </HashLink>
              <HashLink to="/donateblood#main-donateBloodForm">
                <button id="donateSec-donateBloodBtn">Donate Blood</button>
              </HashLink>
              <p>If any one want to gives Charity for Child Click here:</p>
              <HashLink to="/charity#donationAmountForm">
                {" "}
                <button id="donateSec-CharityBtn">Give Charity</button>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="row-4">
          <div className="recentCauses">
            <h1>Recent Causes</h1>
            <p>
              "There could be no definition of a successful life that does not
              include service to others."
            </p>
            <OwlCarousel
              items={3}
              className="owl-theme"
              id="owl-theme-recentCause"
              loop={true}
              autoplay={true}
              autoplayTimeout={2000}
              autoplayHoverPause={true}
              margin={40}
            >
              <div className="recentCausesBoxes">
                <div className="recentCausesImg">
                  <img
                    id="recentCausesImg"
                    src="/assets/sliderimgs/recent-cause-needy-img.jpg"
                    alt="recentCausesImgs"
                  />
                </div>
                <div className="recentCausesBoxDetails">
                  <h3>Donate for Needy</h3>
                  <p>Donate or Help out the needy in whatever way you can.</p>
                </div>
              </div>
              <div className="recentCausesBoxes">
                <div className="recentCausesImg">
                  <img
                    id="recentCausesImg"
                    src="/assets/sliderimgs/recent-cause-edu-img.jpg"
                    alt="recentCausesImgs"
                  />
                </div>
                <div className="recentCausesBoxDetails">
                  <h3>Donate for Education</h3>
                  <p>
                    Education is the key to unlock the golden door of freedom.
                  </p>
                </div>
              </div>
              <div className="recentCausesBoxes">
                <div className="recentCausesImg">
                  <img
                    id="recentCausesImg"
                    src="/assets/sliderimgs/recent-cause-poorfamily-img.jpg"
                    alt="recentCausesImgs"
                  />
                </div>
                <div className="recentCausesBoxDetails">
                  <h3>Donate for Poor Family</h3>
                  <p>When fate hands us money, let's help poor people.</p>
                </div>
              </div>
              <div className="recentCausesBoxes">
                <div className="recentCausesImg">
                  <img
                    id="recentCausesImg"
                    src="/assets/sliderimgs/Dclothe.jpg"
                    alt="recentCausesImgs"
                  />
                </div>
                <div className="recentCausesBoxDetails">
                  <h3>Donate for Clothes</h3>
                  <p>
                    Your old clothes don't fit you, but will surely fit for
                    someone else.
                  </p>
                </div>
              </div>
              <div className="recentCausesBoxes">
                <div className="recentCausesImg">
                  <img
                    id="recentCausesImg"
                    src="/assets/sliderimgs/Dfood.jpg"
                    alt="recentCausesImgs"
                  />
                </div>
                <div className="recentCausesBoxDetails">
                  <h3>Donate for Food</h3>
                  <p>
                    If you cannnat feed a hundred people,then feed just one.
                  </p>
                </div>
              </div>
              <div className="recentCausesBoxes">
                <div className="recentCausesImg">
                  <img
                    id="recentCausesImg"
                    src="/assets/sliderimgs/Dwater.jpg"
                    alt="recentCausesImgs"
                  />
                </div>
                <div className="recentCausesBoxDetails">
                  <h3>Donate for Water</h3>
                  <p>
                    Water is life, and clean water means healthy Life So its a
                    Blessing.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="row-5">
          <div className="companiesOrg">
            <h1>Companies Serving Us</h1>
            <p>
              At the end of the day it's not about what you have or even what
              you've accomplished. It's about who you've lifted up, who you've
              made better. It's about what you've given back.
            </p>
            <div className="companiesOrgContent">
              <OwlCarousel
                items={1}
                className="owl-theme"
                id="owl-theme-companiesOrg"
                nav={true}
                loop={true}
                margin={0}
              >
                <div className="companiesOrgDiv">
                  <div className="companiesOrgDetails">
                    <p>
                      The Edhi Foundation is a non-profit social welfare
                      organization based in Pakistan. It was founded by Abdul
                      Sattar Edhi in 1951, who served as the head of the
                      organization until his death on 8 July 2016. Bilquis Edhi,
                      a nurse by profession, used to oversee the maternity and
                      adoption services of the foundation.
                    </p>
                    <div className="companiesOrgOwnersImg">
                      <img
                        src="/assets/sliderimgs/Edhi pic.png"
                        alt="edhipic"
                      />
                    </div>
                  </div>
                </div>
                <div className="companiesOrgDiv">
                  <div className="companiesOrgDetails">
                    <p>
                      Transparent Hands is a nonprofit organization for online
                      crowdfunding in the healthcare sector of Pakistan. It was
                      founded by Rameeza Mueen and Established in August, 2014
                      in Lahore, Pakistan, the organization provides free
                      medical and surgical care to the underprivileged.
                    </p>
                    <div className="companiesOrgOwnersImg">
                      <img
                        src="/assets/sliderimgs/Transparent pic.png"
                        alt="transparentpic"
                      />
                    </div>
                  </div>
                </div>
                <div className="companiesOrgDiv">
                  <div className="companiesOrgDetails">
                    <p>
                      Chhipa Welfare Association, commonly known as Chhipa, is a
                      Pakistani non-profit welfare organization founded in 2007
                      by Ramzan Chhipa. It is headquartered in Karachi,
                      Pakistan. The 1987 Karachi car bombing at Bohri Bazaar led
                      Ramzan Chhipa to found Chhipa Welfare Association.
                    </p>
                    <div className="companiesOrgOwnersImg">
                      <img
                        src="/assets/sliderimgs/Chippa pic.png"
                        alt="chippapic"
                      />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
