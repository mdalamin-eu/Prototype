import React from "react";
import img from "../img/loading.gif";

export default function Spinner() {
  return (
    <div>
      {" "}
      <img
        src={img}
        style={{
          width: "200px",
          margin: "auto",
          display: "block"
        }}
        alt=""
      />
    </div>
  );
}