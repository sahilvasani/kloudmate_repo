import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Button } from "@mui/material";
import mainData from "../analyticsData.json";
import { Rnd } from "react-rnd";

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

export const Tree = () => {
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

  // height - 316 \\ 617 px

  return (
    <>
      <div
        style={{
          background: "yellow",
        }}
      >
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: "100%",
            height: 190,
          }}
          minWidth={500}
          minHeight={136}
          bounds="window"
          style={{
            background: "whitesmoke",
            overflow: "auto",
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Button onClick={handleExpandClick}>
              {expanded.length === 0 ? "Expand all" : "Collapse all"}
            </Button>
          </Box>
          <div style={{ display: "flex" }}>
            <div style={{ height: "100%", width: "617px", overflow: "hidden" }}>
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
          </div>
        </Rnd>
      </div>
    </>
  );
};
