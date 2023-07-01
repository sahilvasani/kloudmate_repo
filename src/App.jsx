/* eslint-disable array-callback-return */
import "./App.css";
import { Tree } from "./pages/Tree";
import { Chart } from "./pages/chart";
import React, { useState } from "react";
import { Navbar } from "./pages/Navbar";
import SplitPane from "split-pane-react";
import mainData from "./Constant/analyticsData.json";
import { Box, Button } from "@mui/material";
import "split-pane-react/esm/themes/default.css";

export const App = () => {
  //*------------- FOR DETAILS ATTRIBUTS AND ROWDATA ----------*//
  const [spanId, setSpanId] = useState(
    mainData?.spans?.find((data) => !data.parentSpanId)?.spanId
  );

  //*------------- FOR TREE AND BAR DEFAULT EXPANDED ----------*//
  const [sizes, setSizes] = useState(["60%", "40%", "auto"]);

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ height: "90%" }}>
        <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
          <Chart sizes={sizes} spanId={spanId} />
          <div style={{ background: "#fff", height: "100%", overflow: "auto" }}>
            <Box sx={{ mb: 1 }}>
              <Button sx={{ color: "black", textTransform: "capitalize" }}>
                Timeline
              </Button>
            </Box>
            <Tree setSpanId={setSpanId} />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};
