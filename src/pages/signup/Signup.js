import React, { useState } from "react";
import SignupForm from "../../components/registration/signupForm/SignupForm";

import "./Signup.css";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";

const Signup = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const onSignup = (values) => {
    axiosInstance.post(`/user/signup/${values.doctor ? 'doctor' : 'patient'}`, values)
      .then(function (response) {
        console.log(response);

        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  };

  if (error) {
    return (<Result
      status="error"
      title={`Failed to create user`}
      extra={[
        <Link to="/signup">
          <Button type="primary" key="console">
            Try Again
          </Button>
        </Link>,
      ]}
    />)
  }

  return (
    <div className="signup-container">
      <div className="form">
        {!data ? (
          <>
            <h1 className="form__title">Please fill this form</h1>
            <SignupForm onSignup={onSignup} />
          </>
        ) : (
          <Result
            status="success"
            title={`Account created successfully, UserID: ${data.UserID}`}
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
