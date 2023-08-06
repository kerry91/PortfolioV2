import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Home from "../pages/Home";

function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar " onClick={(e) => e.stopPropagation()}>
        <div className="nav-container ">
          <NavLink exact to="/" className="nav-logo">
            <FontAwesomeIcon icon={faCode} />
            KAW Inc.
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                activeclassname="active"
                class="nav-links"
                href="https://github.com/kerry91"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <hr />
        <div className="pages">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
