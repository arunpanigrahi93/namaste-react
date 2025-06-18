import React from "react";
import ReactDOM from "react-dom/client"; // use correct import for React 18+

//react element to convert functional component
//const heading = <h1>Hello</h1>

// component
const Heading = () => <h1>Hello </h1>;

//component

const HeadingComponent = () => {
  return (
    <div>
      <Heading />
      <h1>Hello from functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

//component inside other component is called Component Composition
