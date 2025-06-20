import React from "react";
import ReactDOM from "react-dom/client"; // use correct import for React 18+
import Header from "./componets/Header";
import Body from "./componets/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//component inside other component is called Component Composition
