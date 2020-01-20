import React, { useEffect } from "react";
import Btn from "../../../common/btn/Btn";
import "./UserDetails.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as usersDet from "../../../store";

const UserDetails = ({ details, match, fetchUsersDetails }) => {
  const id = match.params.id;

  useEffect(() => {
    fetchUsersDetails(id);
  }, []);

  if (details) {
    return (
      <div className="userDetails">
        <h1 className="userDetails__header">details</h1>
        <div className="userDetails__userId">
          <span>user_id:</span>
          <p>{details.id}</p>
        </div>
        <div className="userDetails__name">
          <span>name:</span>
          <p>{details.name}</p>
        </div>
        <div className="userDetails__username">
          <span>username:</span>
          <p>{details.username}</p>
        </div>
        <div className="userDetails__email">
          <span>email:</span>
          <p>{details.email}</p>
        </div>
        <div className="userDetails__phone">
          <span>phone:</span>
          <p>{details.phone}</p>
        </div>
        <div className="userDetails__website">
          <span>website:</span>
          <p>{details.website}</p>
        </div>
        <NavLink to="/">
          <Btn className="userDetails__btn" text={`home`} />
        </NavLink>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    details: state.users.details
  };
};

export default connect(mapStateToProps, usersDet)(UserDetails);
