import React, { useState } from "react";

import "./Update.css";
import UpdateForm from "../../components/doctor/updateForm/UpdateForm";
import ReadForm from "../../components/doctor/readForm/ReadForm";

const Update = () => {
  const [data, setData] = useState(null);
  const onRequest = (values) => {
    setData(values);
  };
  return (
    <>
      <ReadForm onRequest={onRequest} />
      {data ? <UpdateForm data={data} /> : <></>}
    </>
  );
};

export default Update;
