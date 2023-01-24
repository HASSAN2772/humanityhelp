import React from "react";
import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function () {
  return (
    <div>
      <div className="main-slider">
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop={true}
          autoplay={true}
          autoplayTimeout={2000}
          autoplayHoverPause={true}
          margin={0}
        >
          <div>
            <img className="img" src={"assets/sliderimgs/Bnr1.jpg"} alt="Bnr-pic"/>
            <div className="bnr-Img1">
              <p className="bnr-Img1Para">
                GIVE A <span className="bnr-Img1Paraspan">HELPING HAND</span> TO
                THOSE WHO NEED IT!
              </p>
              <p className="bnr-Img1Para2">
                Volunteers do not Necessarily have the Time,They Just have the
                Heart.
              </p>
            </div>
          </div>
          <div>
            <img className="img" src={"assets/sliderimgs/Bnr2.jpg"} alt="Bnr-pic"/>
            <div className="bnr-Img2">
              <p className="bnr-Img2Para">
                You Help people<span className="bnr-Img2Paraspan">?</span>
              </p>
              <p className="bnr-Img2Para2">Become a Volunteer</p>
              <p className="bnr-Img2Para3">
                Volunteering is at the very core of being a human. No one has
                made it through life without someone else’s help.
              </p>
            </div>
          </div>
          <div className="Slider-Bnr-2-Img">
            <img className="img" src={"assets/sliderimgs/Bnr3.jpg"} alt="Bnr-pic"/>
            <div className="bnr-Img3">
              <p className="bnr-Img3Para">Save The Children</p>
              <p className="bnr-Img3Para2">
                Children and poor people are at high risk of severe malnutrition
                & no education.
              </p>
            </div>
          </div>
          <div>
            <img className="img" src={"assets/sliderimgs/Bnr4.jpg"} alt="Bnr-pic" />
            <div className="bnr-Img4">
              <p className="bnr-Img4Para">
                Need Changes<span className="bnr-Img4Paraspan">?</span>
              </p>
              <p className="bnr-Img4Para2">Make a donation</p>
              <p className="bnr-Img4Para3">
                Change will not come if we wait for some other person or some
                other time. We are the ones we’ve been waiting for. We are the
                change that we seek.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
