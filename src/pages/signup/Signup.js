import React from "react";
import SignupForm from "../../components/registration/signupForm/SignupForm";

import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="form">
        <h1 className="form__title">Please fill this form</h1>
        <SignupForm />
      </div>
      <div
        className="signup__image"
        style={{ backgroundImage: "url(images/login.jpg)" }}
      ></div>
    </div>
  );
};

export default Signup;
