/* eslint-disable array-callback-return */
import React, { useState } from "react";
import mainData from "./analyticsData.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Button } from "@mui/material";
import Chart from "react-apexcharts";

const MainName = ({ e }) => {
  return (
    <span>
      <span
        style={{
          fontSize: "13px",
          color: "rgb(66, 82, 110)",
        }}
      >
        {e.attrs["service.name"]}{" "}
      </span>
      <span
        style={{
          textTransform: "uppercase",
          fontSize: "13px",
          color: "rgb(66, 82, 110)",
        }}
      >
        {e.attrs["aspecto.calc.class"]}
      </span>{" "}
      <span
        style={{ fontSize: "12px", color: "rgb(66, 82, 110)", fontWeight: 500 }}
      >
        {e.attrs["http.method"]}
      </span>{" "}
      <span
        style={{
          fontSize: "12px",
          color: "rgb(155, 161, 175)",
          fontWeight: 500,
          fontStyle: "italic",
        }}
      >
        {e.attrs["http.method"] === "GET"
          ? e.attrs["host.name"]
          : e.operationName}
      </span>
    </span>
  );
};

function renderSpanTree(data, parentSpanId) {
  const spans =
    data?.filter((span) => span.parentSpanId === parentSpanId) || [];

  return spans.map((span) => {
    return (
      <TreeItem nodeId={span.spanId} label={<MainName e={span} />}>
        {renderSpanTree(data, span.spanId)}
      </TreeItem>
    );
  });
}

export const App = () => {
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const spanTree = renderSpanTree(mainData.spans, undefined);
  const idArray = mainData?.spans.map((e, i) => {
    return e.spanId;
  });

  const handleExpandClick = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? idArray : []));
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const abc = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    },
  };

  return (
    <>
      <div>
        <Box sx={{ mb: 1 }}>
          <Button onClick={handleExpandClick}>
            {expanded.length === 0 ? "Expand all" : "Collapse all"}
          </Button>
        </Box>

        <div style={{ display: "flex" }}>
          <div style={{ height: "300px", width: "650px", overflow: "auto" }}>
            <TreeView
              aria-label="controlled"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              expanded={expanded}
              selected={selected}
              onNodeToggle={handleToggle}
              onNodeSelect={handleSelect}
              multiSelect
            >
              {spanTree}
            </TreeView>
          </div>
          <Chart
            options={abc.options}
            series={abc.series}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </>
  );
};
