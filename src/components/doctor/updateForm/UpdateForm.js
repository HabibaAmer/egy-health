import React, { useState } from "react";

import "./UpdateForm.css";
import { Button, Form, Input, Result } from "antd";
import { Link, useLocation } from "react-router-dom";

const inputs = [
  {
    title: "Name",
    key: "name",
    readOnly: true,
  },
  {
    title: "Age",
    key: "age",
    readOnly: true,
  },
  {
    title: "Gender",
    key: "gender",
    readOnly: true,
  },
  {
    title: "Blood Type",
    key: "bloodType",
  },
  {
    title: "Allergies",
    key: "allergies",
  },
];

const UpdateForm = ({ data }) => {
  const location = useLocation();

  const [showResult, setShowResult] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setShowResult(true);
  };

  return (
    <>
      {!showResult ? (
        <Form
          name="update"
          className="update-form"
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          requiredMark={false}
        >
          {inputs.map((input) => (
            <Form.Item
              name={input.key}
              label={input.title}
              key={input.key}
              initialValue={data[input.key]}
            >
              <Input
                placeholder={input.title}
                readOnly={input.readOnly}
                disabled={input.readOnly}
              />
            </Form.Item>
          ))}

          <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="update-form-button"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Result
          status="success"
          title="Successfully Updated Patient Data"
          extra={[
            <Link to="/doctor" state={{ ...location.state }}>
              <Button type="primary" key="console">
                Go to Home
              </Button>
            </Link>,
          ]}
        />
      )}
    </>
  );
};

export default UpdateForm;
