import React from "react";
import classes from "./Local.module.css";

const Local = (props) => {
  return (
    <div className={classes.local}>
      <img src={props.src} alt=" " className={classes.image} />
      <div className={classes.list}>
        <li>{props.local}</li>
        <li>차로 {props.distance} 거리</li>
      </div>
    </div>
  );
};

export default Local;
