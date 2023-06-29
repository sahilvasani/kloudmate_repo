/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Navbar } from "./pages/Navbar";
import { Alltabs } from "./pages/Alltabs";
import { Tree } from "./pages/Tree";
import "./App.css";
import { Chart } from "./pages/chart";
export const App = () => {
  const [height, setHeight] = useState();
  return (
    <div>
      <Navbar />
      <Chart height={height} />
      <Tree setHeight={setHeight} />
    </div>
  );
};
