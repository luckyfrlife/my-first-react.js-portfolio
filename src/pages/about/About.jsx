import React from "react";
import "./about.css";
import { Link, useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  return (
    <div className="about-page">
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
      <section className="about">
        <div className="main">
          <img src="/images/pexels.jpg" alt="About Me" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>Developer & Designer</h5>
            <p>
              I am a front-end web developer. I can provide clean code and pixel
              perfect designs. I also make the website more and more interactive
              with web animations. A responsive design makes your website
              accessible to all users, regardless of their device.
            </p>
            <div className="about-gri">
              <div className="about-in">
                <h5>1.Problem Solving</h5>
              </div>
              <div className="about-in">
                <h5>2.Creative Idea</h5>
              </div>
              <div className="about-in">
                <h5>3.Search a lot</h5>
              </div>
              <div className="about-in">
                <h5>4.High Quality</h5>
              </div>
            </div>
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section>
    </div>
  );
}
