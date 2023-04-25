import React, { useState } from "react";
import ReadForm from "../../components/doctor/readForm/ReadForm";
import ReadTable from "../../components/doctor/readTable/ReadTable";

const Read = () => {
  const [data, setData] = useState([]);
  const onRequest = (values) => {
    setData([values]);
  };
  return (
    <>
      <ReadForm onRequest={onRequest} />
      {data.length ? <ReadTable data={data} /> : <></>}
    </>
  );
};

export default Read;
