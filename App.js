import React from "react";
import ReactDOM from "react-dom/client"; // use correct import for React 18+

//core react
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I'm from h1"),
    React.createElement("h2", { key: "h2" }, "I'm from h2"),
  ])
);

//jsx
const jsxHeading = <h1 id="heading">Namste from jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
