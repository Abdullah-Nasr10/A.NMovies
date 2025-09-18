import { useState } from "react";
import { IoMenuSharp as MenuIcon } from "react-icons/io5";
import { IoSearch as SearchIcon } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux"; //====
import { fetchSearchResults } from "../../src/store/slices/searchSlice"; //=====

import "./Navbar.css";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const [type, setType] = useState("movie"); //======

  const dispatch = useDispatch(); //======
  const navigate = useNavigate(); //=========

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(fetchSearchResults({ query: inputValue }));
      navigate("/search");
      setInputValue("");
    }
  };

  // ########################################################################
  return (
    <nav className="headerNavBar">
      <div className="container">
        <div className="Links">
          <NavLink to="/">
            <div className="logo">A.N</div>
          </NavLink>
          <ul className={`navLinks ${!showNav ? "hide" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "pageLink active" : "pageLink"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "pageLink active" : "pageLink"
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? "pageLink active" : "pageLink"
                }
              >
                Favorite
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ============================================== */}

        <input
          className={`inputSearch ${!showSearch ? "hide" : ""}`}
          type="search"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* ---------------------------------------- */}
        <div className="icons">
          <SearchIcon
            className="navIcon"
            onClick={() => {
              setShowSearch(!showSearch);
              setShowNav(false);
            }}
          />
          <MenuIcon
            className="navIcon"
            onClick={() => {
              setShowNav(!showNav);
              setShowSearch(false);
            }}
          />
        </div>

        {/* ================================== */}
      </div>
    </nav>
  );
}

export default Navbar;
