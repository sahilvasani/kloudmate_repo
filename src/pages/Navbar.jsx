import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="name-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 20"
          color="#65748b"
          style={{ transform: " rotate(180deg)" }}
          class="st-current"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="currentColor">
              <path
                d="M10 1.515L18.485 10 10 18.485l-1.414-1.414L14.656 11H2V9h12.656l-6.07-6.071L10 1.515z"
                class=""
              ></path>
            </g>
          </g>
        </svg>
        <span className=" name ">
          <span>
            <span
              style={{
                color: "rgb(251, 49, 87)",
                fontWeight: 500,
                fontSize: "0.85em",
              }}
            >
              DELETE
            </span>
          </span>
          <span>
            <span style={{ color: "rgb(56, 66, 84)", fontWeight: "normal" }}>
              {" "}
            </span>
          </span>
          <span>
            <span style={{ color: "rgb(56, 66, 84)", fontWeight: "normal" }}>
              /purchase-order
            </span>
          </span>
        </span>
      </div>
      <div class="searchbar">
        <div className="icon">
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
        </div>
        <input type="text" placeholder="Search in trace" />
      </div>
      <div class="logsbutton">
        <span class="logtext">No logs found</span>
      </div>
      <button
        title="Details"
        class="details-btn"
        style={{ marginRight: "10px" }}
      >
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
      </button>
      <button
        title="Timeline"
        class="details-btn"
        style={{ marginRight: "10px" }}
      >
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
      </button>
      <button class="details-btn">
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
      </button>
    </div>
  );
};
