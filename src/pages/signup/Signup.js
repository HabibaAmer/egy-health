import React, { useState } from "react";
import SignupForm from "../../components/registration/signupForm/SignupForm";

import "./Signup.css";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isDone, setIsDone] = useState(false);
  const onSignup = () => {
    setIsDone(true);
  };
  return (
    <div className="signup-container">
      <div className="form">
        {!isDone ? (
          <>
            <h1 className="form__title">Please fill this form</h1>
            <SignupForm onSignup={onSignup} />
          </>
        ) : (
          <Result
            status="success"
            title="Account created successfully"
            extra={[
              <Link to="/login">
                <Button type="primary" key="console">
                  Login
                </Button>
              </Link>,
            ]}
          />
        )}
      </div>
      <div
        className="signup__image"
        style={{ backgroundImage: "url(images/login.jpg)" }}
      ></div>
    </div>
  );
};

export default Signup;
