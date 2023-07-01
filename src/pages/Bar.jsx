import React from "react";
import { Chart } from "react-google-charts";
import mainData from "../analyticsData.json";
import { columns, options } from "../Constant/constant";

//*------------- ROW DATA --------------*//
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

export const Bar = () => {
  const data = [columns, ...dataArray];

  return (
    <>
      <div
        style={{
          width: "calc(100vw - 492px)",
          height: "677px",
          overflow: "hidden",
        }}
        className="chart-main-div"
      >
        <div className="vertical-line-main">
          <div class="vl"></div>
          <div class="vl"></div>
          <div class="vl"></div>
          <div class="vl"></div>
        </div>
        <div style={{ zIndex: "1", position: "relative" }}>
          <Chart
            chartType="Timeline"
            data={data}
            width="100%"
            height="740px"
            options={options}
          />
        </div>
      </div>
    </>
  );
};
