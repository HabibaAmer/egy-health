import { Table } from "antd";
import React from "react";

const ReadTable = ({ data }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Blood Type",
      dataIndex: "bloodType",
      key: "bloodType",
    },
    {
      title: "Allergies",
      dataIndex: "allergies",
      key: "allergies",
    },
  ];

  return <Table dataSource={data} columns={columns} pagination={false} />;
};

export default ReadTable;
