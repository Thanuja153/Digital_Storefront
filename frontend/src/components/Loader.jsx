import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      status={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
