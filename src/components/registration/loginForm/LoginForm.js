import {
  LockOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LoginForm.css";

const LoginPatient = ({ doctor }) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (doctor) {
      navigate("/doctor", { state: { username: values.username } });
    }
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
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
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
