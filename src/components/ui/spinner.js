import React from "react";
import Spinn from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={Spinn}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="loading"
    />
  );
};
export default Spinner;
