/* eslint-disable array-callback-return */
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import mainData from "../Constant/analyticsData.json";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { attributes, leftArrow } from "../Constant/constant";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Alltabs = ({ spanId }) => {
  const [value, setValue] = useState(0);

  //*------------- CHANGE TAB ----------*//
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //*------- FIND ATTRIBUTES IN DATA OF SELECTED TREE NODE-------*//
  const rowdata = mainData?.spans?.find((data) => data.spanId === spanId);
  const filteredAttrs = {};
  const setvalue = (name, value) => {
    filteredAttrs[name] = [...(filteredAttrs[name] || []), value];
  };
  Object.keys(rowdata.attrs)
    .forEach((key) => {
      const aa = attributes.find(
        (att) => key.includes(att) && !key.includes("calc")
      );
      if (aa) {
        setvalue(aa, { [key]: rowdata.attrs[key] });
      }
    })
    ?.filter((a) => !!a);

  return (
    <Box sx={{ width: "50%", height: "100%", padding: "20px" }}>
      <div className="tabs-label-main-div">
        {leftArrow()}
        <span
          className="tabs-top-label-one"
          style={{
            color:
              rowdata.attrs["http.method"] === "DELETE"
                ? "rgb(251, 49, 87)"
                : rowdata.attrs["http.method"] === "POST"
                ? "rgb(255, 148, 29)"
                : "black",
          }}
        >
          {rowdata.attrs["aspecto.calc.class"] === "database"
            ? rowdata.attrs["db.operation"]
            : rowdata.attrs["http.method"]}
        </span>
        <span className="tabs-top-label-second">
          {rowdata.attrs["aspecto.calc.class"] === "database"
            ? `on collection "${rowdata.attrs["db.mongodb.collection"]}"`
            : rowdata.attrs["http.method"] === "GET"
            ? rowdata.attrs["host.name"]
            : rowdata.operationName}
        </span>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="REQUEST"
            {...a11yProps(0)}
            style={{
              color: "#65748b",
              fontWeight: "600",
              fontSize: "12px",
              marginRight: "32px",
            }}
          />
          <Tab
            label="RESPONSE"
            {...a11yProps(1)}
            style={{
              color: "#65748b",
              fontWeight: "600",
              fontSize: "12px",
              marginRight: "32px",
            }}
          />
          <Tab
            label="ATTRIBUTES"
            {...a11yProps(2)}
            style={{
              color: "#65748b",
              fontWeight: "600",
              fontSize: "12px",
              marginRight: "32px",
            }}
          />
          <Tab
            label="RAW DATA"
            {...a11yProps(3)}
            style={{
              color: "#65748b",
              fontWeight: "600",
              fontSize: "12px",
              marginRight: "32px",
            }}
          />
        </Tabs>
      </Box>
      <div
        style={{
          position: "absolute",
          height: "100%",
          overflow: "auto",
        }}
      >
        <TabPanel value={value} index={0}>
          <p className="response-first-p-tag">
            <span style={{ fontWeight: "700" }}>URL:</span>{" "}
            <span>https://demo.aspecto.io/purchase-order</span>
          </p>
          <p className="response-second-p-tag">HEADERS</p>
          <p>empty</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className="response-first-p-tag">
            <span style={{ fontWeight: "700" }}>Status Code</span>{" "}
            <span style={{ color: "rgb(5, 205, 104)", fontWeight: "600" }}>
              200
            </span>
          </p>
          <p className="response-second-p-tag">HEADERS</p>
          <p>empty</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          {Object.keys(filteredAttrs).map((key, index) => {
            return (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                  key={key}
                >
                  <p
                    style={{
                      margin: "0",
                      color: "rgb(155, 161, 175)",
                      fontWeight: "600",
                    }}
                  >
                    {key}
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  {filteredAttrs[key]?.map((e) => {
                    for (var i in e) {
                      return (
                        <>
                          <Typography>
                            <span style={{ color: "black", fontWeight: "600" }}>
                              {i}
                            </span>{" "}
                            : {e[i]}
                          </Typography>
                        </>
                      );
                    }
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={{ marginTop: "10px" }}>
            <ReactJson src={rowdata} theme="summerfruit:inverted" />
          </div>
        </TabPanel>
      </div>
    </Box>
  );
};
