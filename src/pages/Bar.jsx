import React from "react";
import mainData from "../analyticsData.json";
import { Chart } from "react-google-charts";

const dataArray = mainData.spans
  .sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
  .map(({ spanId, startTime, duration }) => {
    const date = new Date(startTime);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const mseconds = date.getMilliseconds();
    return [
      spanId,
      new Date(year, month, day, hours, minutes, seconds, mseconds),
      new Date(
        year,
        month,
        day,
        hours,
        minutes,
        seconds,
        mseconds + duration / 1000000
      ),
    ];
  });

const columns = [
  { type: "string", id: "pre" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

export const data = [columns, ...dataArray];

export const Bar = () => {
  const options = {
    timeline: {
      showRowLabels: false, // do not show label
      colorByRowLabel: true,
      rowLabelStyle: { fontSize: 11 }, // For reduce height of bar
      barLabelStyle: { fontSize: 6 }, // For reduce height of bar
    },
    avoidOverlappingGridLines: false,
    colors: ["#ff951f"], // For bar color
    backgroundColor: "#ffffff", // For bar background color
    alternatingRowStyle: false,
  };

  return (
    <>
      <div>
        <Chart
          chartType="Timeline"
          data={data}
          width="100%"
          height="400px"
          options={options}
        />
      </div>
    </>
  );
};
