import React from "react";
import classes from "./Counter.module.css";

const Counter = (props) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <b>{props.label}</b>
        <br />
        <span>{props.detail}</span>
      </div>
      <div className={classes.counter}>
        <button onClick={props.onMinus}>-</button>
        <div>{props.value}</div>
        <button onClick={props.onPlus}>+</button>
      </div>
    </div>
  );
};

export default Counter;
