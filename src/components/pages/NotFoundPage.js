import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={classes.content}>
      <Link to="/">홈페이지로 이동..</Link>
    </div>
  );
};

export default NotFoundPage;
