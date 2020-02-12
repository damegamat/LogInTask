import React from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { searchValueAction } from "../../redux/actions/searchAction";

const SearchBar = props => {
  const handleSearchChange = e => {
    props.searchValueAction(e.currentTarget.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={props.contactsSearch}
        onChange={e => handleSearchChange(e)}
      />
    </div>
  );
};

const mapDispatchToProps = { searchValueAction };

export default connect(null, mapDispatchToProps)(SearchBar);
