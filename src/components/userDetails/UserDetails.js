import React from "react";
import Btn from "../btn/Btn";
import "./UserDetails.css";

const UserDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="userDetails">
      <h1 className="userDetails__header">details</h1>
      <div className="userDetails__userId">
        <span>user-id:</span>
        <p>{id}</p>
      </div>
      <div className="userDetails__id">
        <span>id:</span>
        <p>31</p>
      </div>
      <div className="userDetails__title">
        <span>title:</span>
        <p>lorem ipsum</p>
      </div>
      <div className="userDetails__body">
        <span>body:</span>
        <p>lorem ipsum mega nowa non qubis conquesta sed unt int quidem</p>
      </div>
      <Btn className="userDetails__btn" text={`home`} />
    </div>
  );
};

export default UserDetails;
