import { useState } from "react";

const Viewer = ({ count }) => {
  return (
    <div>
      <div>Current Count: </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
