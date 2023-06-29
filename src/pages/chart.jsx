import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { Alltabs } from "./Alltabs";

const edges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "straight",
    markerEnd: { type: "arrow" },
    style: {
      strokeWidth: 2,
      stroke: "rgb(155, 161, 175)",
    },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "straight",
    style: {
      strokeWidth: 2,
      stroke: "rgb(155, 161, 175)",
    },
    markerEnd: { type: "arrow" },
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    type: "straight",
    style: {
      strokeWidth: 2,
      stroke: "rgb(155, 161, 175)",
    },
    markerEnd: { type: "arrow" },
  },
  {
    id: "2-5",
    source: "2",
    target: "5",
    style: {
      strokeWidth: 2,
      stroke: "rgb(155, 161, 175)",
    },
    type: "straight",
    markerEnd: { type: "arrow" },
    label: 20,
    labelStyle: {
      stroke: "rgb(155, 161, 175)",
    },
    labelBgStyle: {
      fill: "#fff",
      strokeWidth: "2",
      stroke: "rgb(155, 161, 175)",
    },
    labelBgPadding: [8, 4],
  },
  {
    id: "3-6",
    style: {
      strokeWidth: 2,
      stroke: "rgb(155, 161, 175)",
    },
    source: "3",
    target: "6",
    type: "straight",
    markerEnd: { type: "arrow" },
  },
  {
    id: "4-7",
    source: "4",
    style: {
      strokeWidth: 2,
      stroke: "rgb(155, 161, 175)",
    },
    target: "7",
    type: "straight",
    markerEnd: { type: "arrow" },
  },
];

const serviceIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path>
    </svg>
  );
};
const databaseIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z"></path>
      <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"></path>
      <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"></path>
      <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"></path>
    </svg>
  );
};
const httpClientIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 35 35"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12.5 0c-6.88 0-12.5 5.62-12.5 12.5 0 6.92 5.62 12.5 12.5 12.5 1.74 0 3.38-.347 4.9-.979l-8.24-8.24c-.916-.916-1.39-2.11-1.39-3.31 0-1.2.475-2.4 1.39-3.32 1.83-1.83 4.8-1.83 6.63 0l8.21 8.21c.632-1.52.979-3.16.979-4.89.0316-6.92-5.59-12.5-12.5-12.5zm.00195 10.9c-.403 0-.805.151-1.11.451-.316.316-.475.695-.475 1.11 0 .41.159.79.475 1.11l13.2 13.2h-4.33c-.853 0-1.58.694-1.58 1.58 0 .884.694 1.58 1.58 1.58h8.08c.884 0 1.58-.695 1.58-1.58v-.00195-8.08c0-.853-.694-1.58-1.58-1.58-.884 0-1.58.694-1.58 1.58v4.33l-13.2-13.3c-.3-.3-.703-.451-1.11-.451z"
        transform="%0A translate(11.5, 11.5)%0A scale(0.7666666666666667) %0A %0A"
        fill="#000000"
      />
    </svg>
  );
};

const labelOfNode = (name, service) => {
  return (
    <div style={{ display: "flex", height: "20px", gap: "10px" }}>
      <p className="label-of-node">
        {name.toLowerCase().includes("http")
          ? httpClientIcon()
          : name.toLowerCase().includes("mongodb")
          ? databaseIcon()
          : serviceIcon()}
      </p>
      <div className="label-div-node">
        <p className="label-of-node">{name}</p>
        <p className="label-of-node">{service}</p>
      </div>
    </div>
  );
};

const nodes = [
  {
    id: "1",
    data: { label: labelOfNode("Http Client", "Mozilla") },
    position: { x: 0, y: 0 },
    style: {
      border: "2px solid rgb(255, 149, 31)",
      borderRadius: "7px",
    },
  },
  {
    id: "2",
    data: { label: labelOfNode("Service", "orders-service") },
    position: { x: 0, y: 100 },
    style: {
      border: "2px solid rgb(255, 149, 31)",
      borderRight: "8px solid rgb(255, 149, 31)",
      borderRadius: "7px",
    },
  },
  {
    id: "3",
    data: { label: labelOfNode("Service", "authentication-s..") },
    position: { x: -200, y: 200 },
    style: {
      border: "2px solid rgb(204, 118, 0)",
      borderRight: "8px solid rgb(204, 118, 0)",
      borderRadius: "7px",
    },
  },
  {
    id: "4",
    data: { label: labelOfNode("Service", "stock-service") },
    position: { x: 0, y: 200 },
    style: {
      border: "2px solid rgb(206, 146, 216)",
      borderRight: "8px solid rgb(206, 146, 216)",
      borderRadius: "7px",
    },
  },
  {
    id: "5",
    data: { label: labelOfNode("mongodb", "order-db") },
    position: { x: 200, y: 200 },
    style: { border: "2px solid rgb(255, 149, 31)" },
    borderRadius: "7px",
  },
  {
    id: "6",
    data: { label: labelOfNode("HTTP", "aspecto.us.auth0...") },
    position: { x: -200, y: 300 },
    style: { border: "2px solid rgb(204, 118, 0)" },
    borderRadius: "7px",
  },
  {
    id: "7",
    data: { label: labelOfNode("mongodb", "stock-db") },
    position: { x: 0, y: 300 },
    style: { border: "2px solid rgb(206, 146, 216)" },
    borderRadius: "7px",
  },
];

export const Chart = () => {
  return (
    <div
      style={{
        height: "450px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ height: "100%", width: "50%" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background color="#fff" />
          <Controls
            showInteractive={false}
            position="top-left"
            style={{ display: "flex" }}
          />
        </ReactFlow>
      </div>
      <Alltabs />
    </div>
  );
};
