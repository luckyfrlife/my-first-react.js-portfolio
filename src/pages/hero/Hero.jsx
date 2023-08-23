import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUsers, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();
  return (
    <div className="hero">
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
      <div className="title">
        <h2>Our Services</h2>
        <div className="box">
          <div className="card">
            <FontAwesomeIcon className="icons" icon={faBars} />
            <h5>Web Development</h5>
            <div className="pra">
              <p>
                Need a stunning website? Look no further! I offer custom web
                Development services using the latest technologies with any
                language. From responsive design to seamless user Experience,
                i'll bring your vision to life. Let's collabrate and create
                something amazing!
              </p>
              <a className="button" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icons" icon={faUsers} />
            <h5>Programming</h5>
            <div className="pra">
              <p>
                Looking for top-notch Programming solutions? I've got you
                covered! With expertise in languages like HTML and CSS and
                JAVASCRIPT, I can develop robust and efficient software tailored
                to your needs. Ler's turn your ideas into reality with clean and
                scalabe code!
              </p>
              <a className="button" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icons" icon={faBell} />
            <h5>Coding</h5>
            <div className="pra">
              <p>
                If you're looking for top-notch coding solutions, you've come to
                the right place! I can help you with coding tasks, whether it's
                debugging, optimizing performance, or implementing complex
                algorithms.I bring ideas to life through clean and efficient
                code.
              </p>
              <a className="button" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
