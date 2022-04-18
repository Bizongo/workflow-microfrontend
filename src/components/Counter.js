import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'ui-infra';

const Counter = (props) => (
  <div>
    The count is {props.count}
    <Button onClick={props.increment}>increment</Button>
    <Button onClick={props.incrementAsync}>incrementAsync</Button>
  </div>
);

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
};

export default Counter;
