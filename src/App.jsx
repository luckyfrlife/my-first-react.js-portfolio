import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import About from "./pages/about/About";
import Hero from "./pages/hero/Hero";
import Work from "./pages/works/Work";
import Contact from "./pages/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const pages = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Hero />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/works",
      element: <Work />,
    },
  ]);

  return (
    <div className="Header">
      <RouterProvider router={pages} />
    </div>
  );
}

export default App;
