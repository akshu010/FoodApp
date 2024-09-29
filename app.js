import React from "react";
import ReactDOM from "react-dom/client";
const Elem =()=> (<p> Hello Everyone I am a p </p>)

const HeadingComponent = () => (
  <div id="container">
    <h1>Namaste React by functional component</h1>
  </div>
);
const title = (<h1>
  {Elem()}
  <Elem/>
  <Elem></Elem>
  Namaste React by first component
  < HeadingComponent/>
  </h1>)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
