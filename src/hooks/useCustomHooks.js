import React, { useState } from "react";

export const useCustomHooks = () => {
  const [height, setHeight] = useState("450px");
  return { height, setHeight };
};
