import React from "react";

import "./Doctor.css";
import { Link, useLocation } from "react-router-dom";

const Doctor = ({ username }) => {
  const location = useLocation();
  return (
    <div className="doctor">
      <h1>Welcome Doctor {location.state.username}</h1>
      <div className="buttons">
        <Link to="/read" state={{ ...location.state }}>
          Read Patient Data
        </Link>
        <Link to="/doctor" state={{ ...location.state }}>
          Update Patient Data
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
