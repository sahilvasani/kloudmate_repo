/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Navbar } from "./pages/Navbar";
import { Alltabs } from "./pages/Alltabs";
import { Tree } from "./pages/Tree";
import "./App.css";
import mainData from "./analyticsData.json";
import { Chart } from "./pages/chart";
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
export const App = () => {
  const [spanId, setSpanId] = useState(mainData?.spans?.find((data)=>  !data.parentSpanId)?.spanId);

  const [sizes, setSizes] = useState([
    "60%",
    '40%',
    'auto',
  ]);
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ height: "90%" }}>
        <SplitPane
          split='horizontal'
          sizes={sizes}
          onChange={setSizes}
        >

          <Chart sizes={sizes} spanId={spanId}/>
          <div style={{  background: '#fff' ,height:"100%" ,overflow:"auto" }}>

          <Tree setSpanId={setSpanId}  />
          </div>
        </SplitPane></div>
    </div>
  );
};
