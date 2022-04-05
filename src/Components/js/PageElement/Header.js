import React, { useState, useMemo } from "react";
import { InputContext } from "../Hooks/InputContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Head.css";
import "./Input.css";
import Account from "../Page/Account";
import Home from "../Page/Home";
import Popular from "../Page/Popular";
import Watching from "../Page/Watching";
import SearchInput from "./SearchInput";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBars, faX);

export default function Header() {
  const [value, setValue] = useState("");
  const [bars, setBars] = useState(true);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  const handleBars = () => {
    setBars(!bars);
  };

  return (
    <div>
      <BrowserRouter>
        <header>
          <div className="menu-toggle">
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              onClick={handleBars}
              className={bars ? "hide" : "show"}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-x"
              onClick={handleBars}
              className={!bars ? "hide" : "show"}
            />
          </div>
          <nav className={bars ? "show-navbar" : "navbar"}>
            <ul className="nav-items">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/popular" className="nav-link">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/watching" className="nav-link">
                  Watching
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/account" className="nav-link">
                  Account
                </Link>
              </li>
            </ul>
          </nav>
          <SearchInput value={value} change={handleValue} />
        </header>

        <InputContext.Provider value={providerValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/watching" element={<Watching />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </InputContext.Provider>
      </BrowserRouter>
    </div>
  );
}
