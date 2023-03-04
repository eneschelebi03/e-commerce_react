import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Borcelle</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon f_flex">
              <div className="img">
                <i className="fa-brands fa-google-play"></i>
              </div>
              <div className="img">
                <i className="fa-brands fa-app-store-ios"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>
                <span>Careers</span>
              </li>
              <li>
                <span>Our Stores</span>
              </li>
              <li>
                <span>Our Cares</span>
              </li>
              <li>
                <span>Terms & Conditions</span>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>
                <span>Help Center</span>
              </li>
              <li>
                <span>How to Buy</span>
              </li>
              <li>
                <span>Track Your Order</span>
              </li>
              <li>
                <span>Corporate & Bulk Purchasing </span>
              </li>
              <li>
                <span>Returns & Refunds</span>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
