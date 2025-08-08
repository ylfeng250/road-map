import React from "react";
import { createRoot } from "react-dom/client";
import RoadMap from "./RoadMap";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<RoadMap />);
}