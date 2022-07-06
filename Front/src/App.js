import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const Time = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(Time);
  }, [loading]);

  return (
    <>
      {!loading ? (
        <div class="spinner-wrapper">
          <div class="spinner">
            <div class="sk-folding-cube">
              <div class="sk-cube1 sk-cube"></div>
              <div class="sk-cube2 sk-cube"></div>
              <div class="sk-cube4 sk-cube"></div>
              <div class="sk-cube3 sk-cube"></div>
            </div>
          </div>
        </div>
      ) : (
        <Fade>
          <div className="App">
            <Navbar />
            <Home />
            <Footer />
          </div>
        </Fade>
      )}
    </>
  );
}

export default App;
