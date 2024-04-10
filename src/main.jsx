// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { MainInformation } from "./assets/jsx/MainInformation";
import { Nav } from "./assets/jsx/Nav";
import { Projects } from "./assets/jsx/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="Container">
    <MainInformation />
  </div>
);
