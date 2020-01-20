import React from "react";
import Btn from "../btn/Btn";
import SearchBar from "../searchBar/SearchBar";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/signin">
        <Btn text={`logout`} />
      </NavLink>
      <SearchBar />
    </div>
  );
};

export default Header;
