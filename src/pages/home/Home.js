import React from "react";
import Header from "../../Component/Header/Header";
import About from "../../pages/about/About";
import Hero from "../../pages/hero/Hero";
import Work from "../../pages/works/Work";
import Contact from "../../pages/contact/Contact";

export default function Home() {
    return (
        <div>
          <Header />
          <About />
          <Hero />
          <Work />
          <Contact />
        </div>
    );
}