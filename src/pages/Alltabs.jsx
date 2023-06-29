/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const Data = {
  traceId: "cf0294982ae42e429a4084ffb5fe460a",
  spanId: "47d26bd0c4b125f2",
  operationName: "/purchase-order",
  links: [],
  events: [],
  startTime: "2023-06-06T14:45:59.486000128Z",
  duration: 1848000000,
  attrs: {
    "aspecto.org": "80364a99-632b-49f0-83a7-8ba040c2de1b",
    "aspecto.token": "00000000-0000-0000-0000-000000000000",
    "aspecto.workspace": "10000000-0000-0000-0000-000000000000",
    "deployment.environment": "production",
    "host.name": "demo.aspecto.io",
    "http.client_ip": "1.1.1.1",
    "http.flavor": "1.1",
    "http.host": "demo.aspecto.io",
    "http.method": "DELETE",
    "http.route": "/purchase-order",
    "http.status_code": 200,
    "http.status_text": "OK",
    "http.target": "/purchase-order",
    "http.url": "https://demo.aspecto.io/purchase-order",
    "http.user_agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36",
    "net.host.name": "demo.aspecto.io",
    "otel.library.name": "@opentelemetry/instrumentation-http",
    "service.name": "orders-service",
    "span.kind": "server",
    "status.code": 0,
    "status.message": "",
    "telemetry.sdk.language": "nodejs",
    "telemetry.sdk.name": "opentelemetry",
    "telemetry.sdk.version": "1.9.0",
    "vcs.branch.name": "main",
    "aspecto.calc.class": "http",
    "http.calc.route_or_path": "/purchase-order",
    "http.calc.url": "https://demo.aspecto.io/purchase-order",
    "http.calc.path": "/purchase-order",
    "http.calc.hostname": "demo.aspecto.io",
    "http.calc.host": "demo.aspecto.io",
    "http.calc.scheme": "https",
    "http.calc.query": "{}",
    "http.calc.route": "/purchase-order",
  },
};

const attributes = [
  "deployment",
  "host",
  "http",
  "net",
  "service",
  "telemetry",
  "vcs",
  "db",
  "express",
];

const filteredAttrs = {};
const setvalue = (name, value) => {
  filteredAttrs[name] = [...(filteredAttrs[name] || []), value];
};

Object.keys(Data.attrs)
  .forEach((key) => {
    const aa = attributes.find(
      (att) => key.includes(att) && !key.includes("calc")
    );
    if (aa) {
      setvalue(aa, { [key]: Data.attrs[key] });
    }
  })
  ?.filter((a) => !!a);

export const Alltabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="REQUEST" {...a11yProps(0)} />
          <Tab label="RESPONSE" {...a11yProps(1)} />
          <Tab label="ATTRIBUTES" {...a11yProps(2)} />
          <Tab label="RAW DATA" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
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
                <p>{key}</p>
              </AccordionSummary>
              <AccordionDetails>
                {filteredAttrs[key]?.map((e, i) => {
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
        Item four
      </TabPanel>
    </Box>
  );
};
