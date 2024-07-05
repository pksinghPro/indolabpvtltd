import React from "react";
import Loader from "react-js-loader";
export default function DataLoader() {
  return (
    <div>
      <Loader
        type="bubble-spin"
        bgColor={"rgb(168, 27, 45)"}
        title={"Loading..."}
        color={"rgb(168, 27, 45)"}
        size={60}
      />
    </div>
  );
}
