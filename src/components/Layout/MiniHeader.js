import React from "react";
import classes from "./Header/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.jpg";

const MiniHeader = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} className={classes.img} alt=" " />
        </Link>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default MiniHeader;
