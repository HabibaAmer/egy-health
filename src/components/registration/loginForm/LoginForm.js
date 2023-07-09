import {
  LockOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LoginForm.css";
import axiosInstance from "../../../axios";

const LoginPatient = ({ doctor }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onFinish = (values) => {
    setError(false);
    console.log("Received values of form: ", values);
    axiosInstance.post(`/user/signin/${doctor ? 'doctor' : 'patient'}`, values)
      .then(function (response) {
        console.log(response);

        if (doctor) {
          navigate("/doctor", { state: response.data.data });
        } else {
          if(response.data.data.IsCreationComplete) {
          navigate("/patient", { state: response.data.data });
          } else {
            navigate("/complete-data", { state: response.data.data });
          }
        }

      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  };

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {error ? <p>Failed to login, check UserID and Password</p> : <></>}
      <Form.Item
        name="id"
        rules={[
          {
            required: true,
            message: "Please input your UserID!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="UserID" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginPatient;
