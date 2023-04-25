import React, { useState } from "react";
import ReadForm from "../../components/doctor/readForm/ReadForm";
import ReadTable from "../../components/doctor/readTable/ReadTable";

const Read = () => {
  const [data, setData] = useState([]);
  const onRequest = (values) => {
    setData([
      {
        key: "1",
        name: "Mike",
        age: 32,
        gender: "Male",
        bloodType: "O+",
        allergies: "test",
      },
    ]);
  };
  return (
    <>
      <ReadForm onRequest={onRequest} />
      {data.length ? <ReadTable data={data} /> : <></>}
    </>
  );
};

export default Read;
