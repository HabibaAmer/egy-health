import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import "./SignupForm.css";

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="signup"
      className="signup-form"
      initialValues={{
        doctor: false,
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
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
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
      <Form.Item
        name="repeat-password"
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item name="doctor" dependencies={["password"]}>
        <Radio.Group>
          <Radio value={false}>Patient</Radio>
          <Radio value={true}>Doctor</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Register
        </Button>
        Or <Link to={"/login"}>login now!</Link>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
