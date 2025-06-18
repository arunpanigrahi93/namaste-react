import React from "react";
import ReactDOM from "react-dom/client"; // use correct import for React 18+

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I'm from h1"),
    React.createElement("h2", { key: "h2" }, "I'm from h2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
