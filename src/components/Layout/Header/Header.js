/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../../asset/logo.jpg";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import AnonymousMenu from "../profileMenu/AnonymousMenu";
import ProfileModal from "../../UI/ProfileModal";
import UserMenu from "../profileMenu/UserMenu";

const Header = () => {
  const [isUserMenuClicked, setUserMenuClicked] = useState(false);

  const menuClickHandler = () => {
    setUserMenuClicked(true);
  };

  const menuCloseHandler = () => {
    setUserMenuClicked(false);
  };

  return (
    <header className={classes.header}>
      <img src={logo} />
      <div className={classes.wrapper}>
        <div className={classes.search}>
          검색 시작하기 <BiSearchAlt2 className={classes["search-icon"]} />
        </div>
      </div>

      <nav className={classes.nav}>
        <AiTwotoneHome
          className={classes["menu-icon"]}
          onClick={() => {
            console.log("호스팅 메뉴..");
          }}
        />
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
          <AnonymousMenu onClose={menuCloseHandler} />
        </ProfileModal>
      )}
    </header>
  );
};

export default Header;
