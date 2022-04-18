import React from "react";
import { connect } from "react-redux";

const Count = (props) => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
);

export default Count;
