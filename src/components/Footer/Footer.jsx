import React from "react";
import "./Footer.scss";
import instagram from "./../../img/socials/inst.svg";
import facebook from "./../../img/socials/fb.svg";
import twitter from "./../../img/socials/tw.svg";
import linkedIn from "./../../img/socials/in.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <a href="#!" className="footer__logo">
              FASHION
            </a>
            <div className="footer__text">
              Complete your style with awesome clothes from us.
            </div>
            <div className="footer__soc1als soc1al">
              <a href="#!" className="soc1al__link">
                <img src={facebook} alt="facebook" className="soc1al__img" />
              </a>
              <a href="#!" className="soc1al__link">
                <img src={instagram} alt="instagram" className="soc1al__img" />
              </a>
              <a href="#!" className="soc1al__link">
                <img src={twitter} alt="twitter" className="soc1al__img" />
              </a>
              <a href="#!" className="soc1al__link">
                <img src={linkedIn} alt="linkedIn" className="soc1al__img" />
              </a>
            </div>
          </div>
          <div className="footer__navigation">
            <ul className="footer__column">
              <li className="footer__name">Company</li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Support
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Careers
                </a>
              </li>
            </ul>

            <ul className="footer__column">
              <li className="footer__name">Quick Link</li>
              <li className="footer__item">

                <a href="#!" className="footer__link">
                  Share Location
                </a>
              </li>
              <li className="footer__item">

                <a href="#!" className="footer__link">
                  Orders Tracking
                </a>
              </li>
              <li className="footer__item">

                <a href="#!" className="footer__link">
                  Size Guide
                </a>
              </li>
              <li className="footer__item">

                <a href="#!" className="footer__link">
                  FAQs
                </a>
              </li>
            </ul>

            <ul className="footer__column">
              <li className="footer__name">Legal</li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Terms & conditions
                </a>
              </li>
              <li className="footer__item">

                <a href="#!" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
