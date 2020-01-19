import React from "react";
import Btn from "../btn/Btn";
import SearchBar from "../searchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Btn />
      <SearchBar />
    </div>
  );
};

export default Header;
