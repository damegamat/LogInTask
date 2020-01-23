import React from "react";
import Btn from "../../common/btn/Btn";
import SearchBar from "../searchBar/SearchBar";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    sessionStorage.setItem("auth", false);
  };
  return (
    <div className="header">
      <NavLink to="/signin">
        <Btn text={`logout`} handleClick={handleClick} />
      </NavLink>
      <SearchBar />
    </div>
  );
};

export default Header;
