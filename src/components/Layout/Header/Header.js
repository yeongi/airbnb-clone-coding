/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../../asset/logo.jpg";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import AnonymousMenu from "../../profileMenu/AnonymousMenu";
import ProfileModal from "../../UI/ProfileModal";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isUserMenuClicked, setUserMenuClicked] = useState(false);

  const menuClickHandler = () => {
    setUserMenuClicked(true);
  };

  const menuCloseHandler = () => {
    setUserMenuClicked(false);
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={logo} className={classes.img} />
      </Link>
      <div className={classes.wrapper}>
        <div className={classes.search}>검색 시작하기</div>
        <FaSearch className={classes["search-icon"]} />
      </div>

      <nav className={classes.nav}>
        <div className={classes["host-enroll"]} onClick={props.onHostClick}>
          호스트 되기
        </div>
        <MdLanguage
          className={classes["menu-icon"]}
          onClick={() => {
            console.log("한국어만 지원합니다..");
          }}
        />
        <HiOutlineUserCircle
          className={classes["menu-icon"]}
          onClick={menuClickHandler}
        />
      </nav>
      {isUserMenuClicked && (
        <ProfileModal onClose={menuCloseHandler}>
          <AnonymousMenu
            onClose={menuCloseHandler}
            onHostClick={props.onHostClick}
            onLoginFormClick={props.onLoginFormClick}
          />
        </ProfileModal>
      )}
    </header>
  );
};

export default Header;
