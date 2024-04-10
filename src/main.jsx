// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";
import "./main.css";
import { MainInformation } from "./assets/jsx/MainInformation";
import { Nav } from "./assets/jsx/Nav";
import { Projects } from "./assets/jsx/Projects";
import { ChangeModeProvider } from "./assets/jsx/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChangeModeProvider>
    <div className={"Container"}>
      <Nav />
      <MainInformation />
    </div>
  </ChangeModeProvider>
);
