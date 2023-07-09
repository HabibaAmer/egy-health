import React, { useState } from "react";

import "./CreatePatient.css";
import { Button, Form, Input, Result, Select } from "antd";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../../axios";

const CreatePatient = () => {
  const location = useLocation();

  const [showResult, setShowResult] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axiosInstance.post(`/patient/createPatient`, { ...values, access: JSON.stringify({ [values.access]: true }), diagnoseHistory: "[]", medicationHistory: "[]" })
      .then(function (response) {
        console.log(response);
        // setData(response.data.data);
        setShowResult(true);
      })
      .catch(function (error) {
        console.log(error);
        // setError(true);
      });

  };

  return (
    <>

      {!showResult ? (
        <>
          <h1 className="create-patient-form-title">Fill form to complete your data</h1>
          <Form
            name="createPatient"
            className="create-patient-form"
            onFinish={onFinish}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14, offset: 4 }}
            requiredMark={false}
          >
            <Form.Item
              name="patientId"
              initialValue={location.state.UserID}
            >
              <Input placeholder="UserID" readOnly={true}
                disabled={true} />
            </Form.Item>

            <Form.Item
              name="name"
              initialValue={location.state.Username}
            >
              <Input placeholder="Name" readOnly={true}
                disabled={true} />
            </Form.Item>

            <Form.Item
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your Age!",
                },
              ]}
            >
              <Input placeholder="Age" />
            </Form.Item>

            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please se;ect your Gender!",
                },
              ]}
            >
              <Select placeholder="Gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>

            </Form.Item>

            <Form.Item
              name="bloodType"
              rules={[
                {
                  required: true,
                  message: "Please select your BloodType!",
                },
              ]}
            >
              <Select placeholder="BloodType">
                <Select.Option value="A-">A-</Select.Option>
                <Select.Option value="A+">A+</Select.Option>
                <Select.Option value="B-">B-</Select.Option>
                <Select.Option value="B+">B+</Select.Option>
                <Select.Option value="O-">O-</Select.Option>
                <Select.Option value="O+">O+</Select.Option>
                <Select.Option value="AB-">AB-</Select.Option>
                <Select.Option value="AB+">AB+</Select.Option>
              </Select>

            </Form.Item>

            <Form.Item
              name="allergies"
              rules={[
                {
                  required: true,
                  message: "Please input your Allergies!",
                },
              ]}
            >
              <Input placeholder="Allergies" />
            </Form.Item>


            <Form.Item
              name="access"
              rules={[
                {
                  required: true,
                  message: "Please select your Doctor!",
                },
              ]}
            >
              <Select placeholder="Doctor">
                <Select.Option value="Doctor1">Doctor1</Select.Option>
                <Select.Option value="Doctor2">Doctor2</Select.Option>
              </Select>

            </Form.Item>


            <Form.Item
              name="diagnose"
              rules={[
                {
                  required: true,
                  message: "Please input your Diagnose!",
                },
              ]}
            >
              <Input placeholder="Diagnose" />
            </Form.Item>

            <Form.Item
              name="medication"
              rules={[
                {
                  required: true,
                  message: "Please input your Medications!",
                },
              ]}
            >
              <Input placeholder="Medications" />
            </Form.Item>


            <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="create-patient-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : (
        <Result
          status="success"
          title="Successfully Updated Data"
          extra={[
            <Link to="/patient" state={{ ...location.state }}>
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

export default CreatePatient;
