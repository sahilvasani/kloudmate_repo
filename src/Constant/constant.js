//*------------- ALL NODE'S ID OF TREE ----------*//
export const allIds = [
  "3edea42213b29b31",
  "47d26bd0c4b125f2",
  "bca15f230eff5f43",
  "408b1be595636db6",
  "5c39dd133f3727ec",
  "6d08401ce3e28363",
  "0f3dc8731d0eeb7d",
  "9a5aed6fac8d590a",
  "9e7b1e21b3c47d9c",
  "d0ce868ff36600a4",
  "829bc34242d0d066",
  "8777528ec1074609",
  "cb357b1ae796b3db",
  "c78025d6dd74fffa",
  "3a40d241400a334e",
  "3c407c8ca30489be",
  "2a661d6a4f35578c",
  "b858a5bab435ec86",
  "d11883ba9d33c3f0",
  "33a552ffc48bd4d4",
  "de4d82527ff7521d",
  "d7e236ccdad708e5",
  "81265d18f911e745",
  "42b81e750413dd7f",
  "aea4edd074827bbc",
  "6318ff7226214c63",
  "7c121e7282d775b1",
  "793cdf0f8638d8fb",
  "b78a729123f9de24",
  "9ab01a1d3acda507",
];

//*------------- BAR COLUMN ----------*//
export const columns = [
  { type: "string", id: "pre" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

//*------------- SERVICE ICON ----------*//
export const serviceIcon = (color = "rgb(255, 149, 31)") => {
  return (
    <svg
      stroke={color}
      fill={color}
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

//*------------- DATABSE ICON ----------*//
export const databaseIcon = (color = "rgb(255, 149, 31)") => {
  return (
    <svg
      stroke={color}
      fill={color}
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

//*------------- HTTP CLIENT ICON ----------*//
export const httpClientIcon = (color = "rgb(255, 149, 31)") => {
  return (
    <svg
      stroke={color}
      fill={color}
      stroke-width="0"
      viewBox="0 0 35 35"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12.5 0c-6.88 0-12.5 5.62-12.5 12.5 0 6.92 5.62 12.5 12.5 12.5 1.74 0 3.38-.347 4.9-.979l-8.24-8.24c-.916-.916-1.39-2.11-1.39-3.31 0-1.2.475-2.4 1.39-3.32 1.83-1.83 4.8-1.83 6.63 0l8.21 8.21c.632-1.52.979-3.16.979-4.89.0316-6.92-5.59-12.5-12.5-12.5zm.00195 10.9c-.403 0-.805.151-1.11.451-.316.316-.475.695-.475 1.11 0 .41.159.79.475 1.11l13.2 13.2h-4.33c-.853 0-1.58.694-1.58 1.58 0 .884.694 1.58 1.58 1.58h8.08c.884 0 1.58-.695 1.58-1.58v-.00195-8.08c0-.853-.694-1.58-1.58-1.58-.884 0-1.58.694-1.58 1.58v4.33l-13.2-13.3c-.3-.3-.703-.451-1.11-.451z"
        transform="%0A translate(11.5, 11.5)%0A scale(0.7666666666666667) %0A %0A"
        fill={color}
      />
    </svg>
  );
};

//*------------- CHART EDGE ----------*//
export const edges = [
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

//*------------- CHART BACKGROUND STYlE ----------*//
export const reactFlowStyle = {
  background: "rgb(243, 245, 252)",
};

//*------------- ATTRIBUTES TYPE ----------*//
export const attributes = [
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

//*------------- CHART PROPS FOR CSS OR OTHER ----------*//
export const options = {
  timeline: {
    showRowLabels: false, // DO NOT SHOW LABELS
    colorByRowLabel: true,
    rowLabelStyle: { fontSize: 12 }, // FOR REDUCE HEIGHT OF BAR
    barLabelStyle: { fontSize: 6.6 }, // FOR REDUCE HEIGHT OF BAR
  },
  avoidOverlappingGridLines: false,
  colors: ["rgb(255, 149, 31)"], // FOR BAR COLOR
  backgroundColor: "#ffffff", // FOR BAR BACKGROUND COLOR
  alternatingRowStyle: false,
};

//*------------- LEFT ARROW ICON ----------*//
export const leftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      transform="rotate(180)"
      color="#65748b"
    >
      <g fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <path d="M10 1.515L18.485 10 10 18.485l-1.414-1.414L14.656 11H2V9h12.656l-6.07-6.071L10 1.515z"></path>
        </g>
      </g>
    </svg>
  );
};

//*------------- SEARCH ICON ----------*//
export const searchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      color="#9ba1af"
    >
      <g fill="currentColor">
        <path
          d="M7 0c3.866 0 7 3.134 7 7 0 1.572-.518 3.024-1.394 4.192l3.308 3.308-1.414 1.414-3.308-3.308C10.024 13.482 8.572 14 7 14c-3.866 0-7-3.134-7-7s3.134-7 7-7zm0 2C4.239 2 2 4.239 2 7s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"
          transform="translate(-90 -86) translate(82 77) translate(8 9)"
        ></path>
      </g>
    </svg>
  );
};

//*------------- DETAILS ICON ----------*//
export const detailsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <path d="M4 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 1.99-.9 1.99-2L18 3c0-1.1-.9-2-2-2H4zm0 16V3h12v14H4zM6 5v2h8V5H6zm0 4v2h8V9H6zm0 4v2h5v-2H6z"></path>
        </g>
      </g>
    </svg>
  );
};

//*------------- TIMELINE ICON ----------*//
export const timelineIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      color="rgb(0, 161, 253)"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M17 11H3V9h14v2zm2 4H5v-2h14v2zM15 5v2H1V5h14z"
      ></path>
    </svg>
  );
};

//*------------- SHARE ICON ----------*//
export const shareIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width="25px"
      height="30px"
      fill-rule="nonzero"
    >
      <g
        fill="#00a1fd"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
      >
        <g transform="scale(8.53333,8.53333)">
          <path d="M23,3c-2.20914,0 -4,1.79086 -4,4c0.00178,0.28117 0.03321,0.56136 0.09375,0.83594l-9.08203,4.54102c-0.75785,-0.87251 -1.85604,-1.3746 -3.01172,-1.37695c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c1.15606,-0.0013 2.25501,-0.5027 3.01367,-1.375l9.07617,4.53906c-0.05923,0.27472 -0.08934,0.55491 -0.08984,0.83594c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4c-1.15606,0.0013 -2.25501,0.5027 -3.01367,1.375l-9.07617,-4.53906c0.05923,-0.27472 0.08934,-0.55491 0.08984,-0.83594c-0.00192,-0.28051 -0.03334,-0.56005 -0.09375,-0.83398l9.08203,-4.54102c0.75821,0.87178 1.85635,1.37313 3.01172,1.375c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z" />
        </g>
      </g>
    </svg>
  );
};
