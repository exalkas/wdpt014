import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import TodosNoCustom from "./components/Todos-no-custom-hook";
import ToggleMe from "./components/ToggleMe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodosNoCustom />);
