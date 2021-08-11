import React from "react";
import { Link } from "react-router-dom";
import classes from "./Local.module.css";

const Local = (props) => {
  return (
    <div className={classes.local}>
      <Link to={`/search/${props.local}`}>
        <img src={props.src} alt=" " className={classes.image} />
      </Link>
      <div className={classes.list}>
        <li>{props.local}</li>
        <li>차로 {props.distance} 거리</li>
      </div>
    </div>
  );
};

export default Local;
