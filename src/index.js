import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

const Card = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>{props.name}</p>
    </div>
  );
};

function withName(name = "") {
  return function (WrappedComponent) {
    return function WrappedComponentWithName(props) {
      return (
        <>
          <WrappedComponent name={name} {...props} />
        </>
      );
    };
  };
}

const CardWithName = withName("Miguel")(Card);

ReactDOM.render(<CardWithName />, document.getElementById("root"));
