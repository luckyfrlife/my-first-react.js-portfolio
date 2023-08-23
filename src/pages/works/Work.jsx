import React from "react";
import "./work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Work() {
  const location = useLocation();
  return (
    <div className="work">
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
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <h2>My Works</h2>
          <p>Some of my Distinguished Works</p>
        </div>
        <div className="portfolio-content">
          <div className="rows">
            <img src="/images/work-1.png" alt="Works" />
            <div className="main-row">
              <div className="row-text">
                <h6>Development</h6>
              </div>
              <div className="row-icons">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3>Mobile app landing design & services</h3>
          </div>
          <div className="rows">
            <img src="/images/work-2.png" alt="Works" />
            <div className="main-row">
              <div className="row-text">
                <h6>Designs</h6>
              </div>
              <div className="row-icons">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3>Website designs & Mobile App designs</h3>
          </div>
          <div className="rows">
            <img src="/images/work-3.png" alt="Works" />
            <div className="main-row">
              <div className="row-text">
                <h6>Branding</h6>
              </div>
              <div className="row-icons">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3>Make up your own brands & We design it</h3>
          </div>
          <div className="rows">
            <img src="/images/work-2.png" alt="Works" />
            <div className="main-row">
              <div className="row-text">
                <h6>Projects</h6>
              </div>
              <div className="row-icons">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3>Lots of Website designs amd mobile app designs </h3>
          </div>
          <div className="rows">
            <img src="/images/work-1.png" alt="Works" />
            <div className="main-row">
              <div className="row-text">
                <h6>Scheme & Plan</h6>
              </div>
              <div className="row-icons">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3>Good planning and well structured Schemes</h3>
          </div>
          <div className="rows">
            <img src="/images/work-3.png" alt="Works" />
            <div className="main-row">
              <div className="row-text">
                <h6>Strategies</h6>
              </div>
              <div className="row-icons">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3>The art of well design websites operations</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
