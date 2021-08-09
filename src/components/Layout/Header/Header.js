/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "../../UI/Card";
import classes from "./Header.module.css";
import logo from "../../../asset/logo.jpg";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} />
      <input className={classes.search} type="text" placeholder="Serch" />
      <nav className={classes.nav}>
        <Card>host</Card>
        <Card>lan</Card>
        <Card>user menu</Card>
      </nav>
    </header>
  );
};

export default Header;
