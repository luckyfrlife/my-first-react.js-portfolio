import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="app">
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
      <section className="home">
        <div className="home-content">
          <h1>Hey, I'm Lucky</h1>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            laborum eligendi molestias labore, ipsum autem cum, veniam natus
            molestiae, ducimus quibusdam. Corporis placeat impedit beatae earum
            laborum?
          </p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a href="#">Let's Talk</a>
          </div>
          <div className="latter">
            <form action="">
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Enter Your Email"
              />
              <input type="submit" name="submit" value="Let's Start" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
