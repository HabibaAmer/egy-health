import React from "react";

import "./Patient.css";
import { Link, useLocation } from "react-router-dom";

const Patient = () => {
  const location = useLocation();
  return (
    <div className="Patient">
      <h1>Welcome Patient {location.state.Username}</h1>
      <div className="buttons">
        {/* <Link to="/read" state={{ ...location.state }}>
          Read Data
        </Link> */}
      </div>
    </div>
  );
};

export default Patient;
