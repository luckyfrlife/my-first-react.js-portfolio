import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPinLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  return (
    <div className="contacts">
      <header>
        <div className="container">
          <div className="logo">
            <h1>
              <a href="/">lucky.</a>
            </h1>
          </div>
          <ul className="navbar">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/works">Works</Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="contact-me">
        <p>Let Me Get You a Beautiful Website</p>
        <a className="button-two" href="#">
          Hire Me
        </a>
      </div>
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            dolorum itaque laborum, perferendis consequuntur ipsam ipsum
            reprehenderit, aperiam magni recusandae voluptate delectus debitis
            magnam mollitia.
          </p>
        </div>
        <div className="contain">
          <div className="contactInfo">
            <div className="boost">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationPinLock} />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  98, Governor's Road,
                  <br />
                  Ikotun,Lagos,
                  <br />
                  55060
                </p>
              </div>
            </div>
            <div className="boost">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>0806-855-0015</p>
              </div>
            </div>
            <div className="boost">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>luckyagboola@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form action="">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
