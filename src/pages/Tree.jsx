import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Button } from "@mui/material";
import mainData from "../analyticsData.json";
import { Bar } from "./Bar";

const MainName = ({ e }) => {
  return (
    <span style={{ overflow: "hidden" }}>
      <span
        style={{
          fontSize: "13px",
          color: "rgb(66, 82, 110)",
          overflow: "hidden",
        }}
      >
        {e.attrs["service.name"]}{" "}
      </span>
      <span
        style={{
          textTransform: "uppercase",
          fontSize: "13px",
          color: "rgb(66, 82, 110)",
          overflow: "hidden",
        }}
      >
        {e.attrs["aspecto.calc.class"]}
      </span>{" "}
      <span
        style={{
          fontSize: "12px",
          color: "rgb(66, 82, 110)",
          fontWeight: 500,
          overflow: "hidden",
        }}
      >
        {e.attrs["http.method"]}
      </span>{" "}
      <span
        style={{
          fontSize: "12px",
          color: "rgb(155, 161, 175)",
          fontWeight: 500,
          fontStyle: "italic",
          overflow: "hidden",
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

  spans.sort((a, b) => {
    const aHasChild = data.some((span) => span.parentSpanId === a.spanId);
    const bHasChild = data.some((span) => span.parentSpanId === b.spanId);

    if (aHasChild && !bHasChild) {
      return -1; // a has child spans, so it comes before b
    } else if (!aHasChild && bHasChild) {
      return 1; // b has child spans, so it comes before a
    }

    return a.spanId.localeCompare(b.spanId); // sort alphabetically when both have or don't have child spans
  });

  return spans.map((span) => {
    return (
      <TreeItem nodeId={span.spanId} label={<MainName e={span} />}>
        {renderSpanTree(data, span.spanId)}
      </TreeItem>
    );
  });
}

export const Tree = ({setSpanId}) => {
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const [newids, setNewids] = useState([]);
  const spanTree = renderSpanTree(mainData.spans, undefined);
  const idArray = mainData?.spans.map((e, i) => {
    return e.spanId;
  });

  function removeElementsWithParentSpanId(arr, spanId) {
    const filteredArray = [];
  
    function removeDescendants(parentSpanId) {
      const children = arr.filter((element) => element.parentSpanId === parentSpanId);
      for (const child of children) {
        removeDescendants(child.spanId);
      }
      arr = arr.filter((element) => element.parentSpanId !== parentSpanId);
    }
  
    removeDescendants(spanId);
  
    for (const element of arr) {
      if (element.spanId === spanId || element.parentSpanId !== spanId) {
        filteredArray.push(element);
      }
    }
  
    return filteredArray;
  }

  const handleExpandClick = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? idArray : []));
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSpanId(nodeIds[0])
    const temp = removeElementsWithParentSpanId(mainData.spans, nodeIds[0])
setNewids(temp.map((data)=> data.spanId))
    setSelected(nodeIds);
  };

  return (
    <>
      <div>
          <Box sx={{ mb: 1 }}>
            <Button onClick={handleExpandClick}>
              {expanded.length === 0 ? "Expand all" : "Collapse all"}
            </Button>
          </Box>
          <div style={{ display: "flex", width: "100%", overflow:"auto" ,height:"680px" }}>
            <div
              style={{
                height: "680px",
                width: "607px",
                display: "flex",
                flexDirection: "row",
                // overflowY: "auto",
              }}
            >
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
            <Bar newids={newids} />
          </div>
      </div>
    </>
  );
};
