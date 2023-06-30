import React, { useEffect, useState } from "react";
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

export const Bar = ({ newids }) => {
  const data = [columns, ...dataArray];
  const [newData, setDewData] = useState(data);

  useEffect(() => {
    var set1 = new Set(newids);
    const commonValues = dataArray.filter((element) => set1.has(element[0]));
    setDewData ([columns, ...commonValues])
  }, [dataArray, newids]);

  const options = {
    timeline: {
      showRowLabels: false, // do not show label
      colorByRowLabel: true,
      rowLabelStyle: { fontSize: 13 }, // For reduce height of bar
      barLabelStyle: { fontSize: 7 }, // For reduce height of bar
    },
    avoidOverlappingGridLines: false,
    colors: ["black"], // For bar color
    backgroundColor: "#ffffff", // For bar background color
    alternatingRowStyle: false,
  };

  return (
    <>
      <div style={{ width: "calc(100vw - 616px)" ,height:"700px",overflow:"hidden" }}>
        <Chart
          chartType="Timeline"
          data={newData}
          width="100%"
          height="740px"
          options={options}
        />
      </div>
    </>
  );
};
