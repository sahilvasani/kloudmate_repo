/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Navbar } from "./pages/Navbar";
import { Alltabs } from "./pages/Alltabs";
import { Tree } from "./pages/Tree";
import "./App.css";
import { Chart } from "./pages/chart";
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
export const App = () => {
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

          <Chart sizes={sizes}/>
          <div style={{  background: '#fff' ,height:"100%" ,overflow:"auto" }}>

          <Tree  />
          </div>
        </SplitPane></div>
    </div>
  );
};
