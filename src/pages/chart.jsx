import React from "react";
import "reactflow/dist/style.css";
import { Alltabs } from "./Alltabs";
import ReactFlow, { Controls, Background } from "reactflow";
import {
  edges,
  serviceIcon,
  databaseIcon,
  httpClientIcon,
  reactFlowStyle,
} from "../Constant/constant";

//*------------- CHART NODES LABEL ----------*//
const labelOfNode = (name, service) => {
  return (
    <div style={{ display: "flex", height: "20px", gap: "10px" }}>
      <p className="label-of-node">
        {name.toLowerCase().includes("http")
          ? httpClientIcon("black")
          : name.toLowerCase().includes("mongodb")
          ? databaseIcon("black")
          : serviceIcon("black")}
      </p>
      <div className="label-div-node">
        <p className="label-of-node">{name}</p>
        <p className="label-of-node">{service}</p>
      </div>
    </div>
  );
};

//*------------- CHART NODES ----------*//
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

export const Chart = ({ spanId }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ height: "100%", width: "50%" }}>
        {nodes && edges && (
          <ReactFlow nodes={nodes} edges={edges} fitView style={reactFlowStyle}>
            <Background />
            <Controls
              showInteractive={false}
              position="top-left"
              style={{ display: "flex" }}
            />
          </ReactFlow>
        )}
      </div>
      <Alltabs spanId={spanId} />
    </div>
  );
};
