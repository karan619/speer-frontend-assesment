import React from "react";
import "../style/Footer.css";
import RadarIcon from "@mui/icons-material/Radar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row primary">
          <div className="column about">
            <h3>EPICON</h3>
            <p>
              Epicon is a web based platform that gives fans access to exclusive
              digital experiences within the music space. Primarily live concert
              experiences.
            </p>

            <div className="social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="column links">
            <h3>Some Links</h3>
            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="column links">
            <h3>Some Links</h3>
            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3>Newsletter</h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
