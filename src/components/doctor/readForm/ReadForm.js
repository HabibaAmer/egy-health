import React from "react";

import "./ReadForm.css";
import { Button, Form, Input } from "antd";

const ReadForm = ({ onRequest }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // request data from BE
    onRequest({
      key: "1",
      name: "Mike",
      age: 32,
      gender: "Male",
      bloodType: "O+",
      allergies: "test",
    });
  };

  return (
    <Form
      name="read"
      className="read-form"
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      requiredMark={false}
    >
      <Form.Item
        name="patientId"
        label="Patient Id:"
        rules={[
          {
            required: true,
            message: "Please input Patient Id!",
          },
        ]}
      >
        <Input placeholder="Patient Id" />
      </Form.Item>

      <Form.Item
        name="organization"
        label="Organization"
        rules={[
          {
            required: true,
            message: "Please input organization!",
          },
        ]}
      >
        <Input placeholder="Organization" />
      </Form.Item>

      <Form.Item
        name="otp"
        label="OTP"
        rules={[
          {
            required: true,
            message: "Please input your OTP!",
          },
        ]}
      >
        <Input placeholder="OTP" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type="primary" htmlType="submit" className="read-form-button">
          Request
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReadForm;
