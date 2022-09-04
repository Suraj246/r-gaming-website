import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
import Contact from "./Components/Footer/Contact";
import Games from "./Components/Games";
import FirstGame from "./Components/GamesInfo/FirstGame";
import SecondGame from "./Components/GamesInfo/SecondGame";
import ErrorPage from "./ErrorPage";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <h2>Ps5</h2>
        </div>
        <div className=" menu-link ">
          <ul>
            <li>
              <NavLink to="" className="a">
                Home
              </NavLink>
            </li>
            {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
            {/* <li><NavLink to="/about">About</NavLink></li> */}
            <li>
              <NavLink to="/games" className="a">
                Games
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="icons">
          <i className="bx bxs-download"></i>
        </div> */}
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
        <Route path="/firstgame" element={<FirstGame />} />
        <Route path="/secondgame" element={<SecondGame />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
