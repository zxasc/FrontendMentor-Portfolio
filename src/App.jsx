import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skillset from "./Components/Skillset";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowWidthEffect = useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToContact = () => {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
    console.log("lole")
  }

  return (
    <>
      <div className="background--top">
        <div className="container">

        <Navbar />
        <Hero 
          handleScrollToContact={handleScrollToContact}
          windowWidth={windowWidth}
        />
        <Skillset />
        <Projects 
          handleScrollToContact={handleScrollToContact}
          windowWidth={windowWidth}
        />
        </div>
      </div>
      <div className="background--bottom">
        <div className="container">
        <Contact />
        <Footer />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
