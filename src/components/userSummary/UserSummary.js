import React from "react";
import "./UserSummary.css";

const UserSummary = () => {
  return (
    <div className="userSummary">
      <div className="userSummary__id">
        <span>user_id:</span>
        <p>10</p>
      </div>
      <div className="userSummary__title">
        <span>title:</span>
        <p>new project memory</p>
      </div>

      <button className="userSummary__btn">details</button>
    </div>
  );
};

export default UserSummary;
