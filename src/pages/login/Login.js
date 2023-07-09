import { Collapse } from "antd";
import React from "react";
import LoginForm from "../../components/registration/loginForm/LoginForm";

import "./Login.css";

const { Panel } = Collapse;

const Login = () => {
  return (
    <div className="login-container">
      <div className="form">
        <Collapse accordion defaultActiveKey={"1"} size="large">
          <Panel header="Login as a patient" key="1">
            <LoginForm />
          </Panel>
          <Panel header="Login as a doctor/institute" key="2">
            <LoginForm doctor />
          </Panel>
        </Collapse>
      </div>
      <div
        className="login__image"
        style={{ backgroundImage: "url(images/login.jpg)" }}
      ></div>
    </div>
  );
};

export default Login;
