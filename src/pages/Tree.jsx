import { Bar } from "./Bar";
import React, { useState } from "react";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import mainData from "../Constant/analyticsData.json";
import { allIds } from "../Constant/constant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import {
  serviceIcon,
  databaseIcon,
  httpClientIcon,
} from "../Constant/constant";

//*------------- CHECKING CONDITION ICON COLOR ----------*//
const condition = (e) => {
  return e === "authentication-service"
    ? "rgb(204, 118, 0)"
    : e === "stock-service"
    ? "rgb(206, 146, 216)"
    : "rgb(255, 149, 31)";
};

//*------------- TREE LABEL DETAILS ----------*//
const MainName = ({ e }) => {
  return (
    <span style={{ overflow: "hidden" }}>
      <span className="svg-icon-tree">
        {e.attrs["aspecto.calc.class"] === "database"
          ? databaseIcon(condition(e.attrs["service.name"]))
          : (e.attrs["service.name"] === "orders-service" ||
              e.attrs["service.name"] === "authentication-service") &&
            e.attrs["http.method"] === "GET"
          ? httpClientIcon(condition(e.attrs["service.name"]))
          : serviceIcon(condition(e.attrs["service.name"]))}
      </span>
      <span
        style={{
          fontSize: "13px",
          color: "rgb(66, 82, 110)",
          overflow: "hidden",
          fontWeight: "600",
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
        {e.attrs["aspecto.calc.class"] === "database"
          ? ""
          : e.attrs["aspecto.calc.class"]}
      </span>{" "}
      <span
        style={{
          fontSize: "12px",
          color: "rgb(66, 82, 110)",
          fontWeight: 500,
          overflow: "hidden",
        }}
      >
        {e.attrs["http.method"] ? e.attrs["http.method"] : e.attrs["db.system"]}
      </span>{" "}
      <span
        style={{
          fontSize: "12px",
          color:
            e.attrs["aspecto.calc.class"] === "database"
              ? "black"
              : "rgb(155, 161, 175)",
          fontWeight: 600,
          fontStyle: "italic",
          overflow: "hidden",
        }}
      >
        {e.attrs["service.name"] === "stock-service" &&
        e.attrs["aspecto.calc.class"] !== "database"
          ? e.operationName
          : e.attrs["http.method"] === "GET"
          ? e.attrs["host.name"]
          : e.attrs["aspecto.calc.class"] === "database"
          ? e.attrs["db.operation"]
          : e.operationName}
      </span>
      <span
        style={{
          fontSize: "12px",
          color: "rgb(155, 161, 175)",
          fontWeight: 600,
          overflow: "hidden",
        }}
      >
        {" "}
        {e.attrs["aspecto.calc.class"] === "database" ? e.attrs["db.name"] : ""}
      </span>
    </span>
  );
};

const StyledTreeItem = styled(TreeItem)(() => ({
  [`& .${treeItemClasses.label}`]: {
    fontSize: "15px !important",
  },
}));

//*------------- RECURSION FUNCTION FOR RENDERING TREE ----------*//
function renderSpanTree(data, parentSpanId) {
  const spans =
    data?.filter((span) => span.parentSpanId === parentSpanId) || [];

  spans.sort((a, b) => {
    const aHasChild = data.some((span) => span.parentSpanId === a.spanId);
    const bHasChild = data.some((span) => span.parentSpanId === b.spanId);

    if (aHasChild && !bHasChild) {
      return -1; // A HAS CHILD SPANS, SO IT COMES BEFORE B
    } else if (!aHasChild && bHasChild) {
      return 1; // B HAS CHILD SPANS, SO IT COMES BEFORE A
    }

    return a.attrs["host.name"].localeCompare(b.spanId); // SORT ALPHABETICALLY WHEN BOTH HAVE OR DON'T HAVE CHILD SPANS
  });

  return spans.map((span, index) => {
    return (
      <StyledTreeItem
        nodeId={span.spanId}
        label={<MainName e={span} index={index} />}
      >
        {renderSpanTree(data, span.spanId)}
      </StyledTreeItem>
    );
  });
}

export const Tree = ({ setSpanId }) => {
  const [selected, setSelected] = useState([]);
  const spanTree = renderSpanTree(mainData.spans, undefined);

  //*------------- SELECT TREE ROW ----------*//
  const handleSelect = (event, nodeIds) => {
    setSpanId(nodeIds[0]);
    setSelected(nodeIds);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: "656px",
            width: "493px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TreeView
            aria-label="controlled"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={allIds}
            selected={selected}
            onNodeSelect={handleSelect}
            multiSelect
          >
            {spanTree}
          </TreeView>
        </div>
        <Bar />
      </div>
    </>
  );
};
