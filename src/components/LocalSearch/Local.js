import React from "react";
import { Link } from "react-router-dom";
import classes from "./Local.module.css";

const Local = (props) => {
  return (
    <div className={classes.local}>
      <Link to={`/search/${props.local}?searchType=local`}>
        <img src={props.src} alt=" " className={classes.image} />
      </Link>
      <div className={classes.list}>
        <span>{props.local}</span>
        <p>차로 {props.distance} 거리</p>
      </div>
    </div>
  );
};

export default Local;
