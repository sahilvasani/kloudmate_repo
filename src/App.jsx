/* eslint-disable array-callback-return */
import React from "react";
import { Navbar } from "./pages/Navbar";
import { Alltabs } from "./pages/Alltabs";
import { Tree } from "./pages/Tree";

export const App = () => {
  return (
    <>
      <Navbar />
      <Tree />
    </>
  );
};
