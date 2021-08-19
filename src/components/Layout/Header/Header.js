/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import classes from "./Header.module.css";
import logo from "../../../asset/logo.jpg";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import AnonymousMenu from "../../profileMenu/AnonymousMenu";
import UserMenu from "../../profileMenu/UserMenu";
import ProfileModal from "../../UI/ProfileModal";
import { Link } from "react-router-dom";
import SearchUI from "./SearchUI";
import AuthContext from "../../../store/auth-context";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const portalElements = document.getElementById("modal");

const Header = (props) => {
  const [isUserMenuClicked, setUserMenuClicked] = useState(false);

  const [isSearchClicked, setSearchClicked] = useState(false);

  const authCtx = useContext(AuthContext);

  const menuClickHandler = () => {
    setUserMenuClicked(true);
  };

  const menuCloseHandler = () => {
    setUserMenuClicked(false);
  };

  const searchClickHandler = () => {
    setSearchClicked(true);
  };

  const searchClosedHandler = () => {
    setSearchClicked(false);
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={logo} className={classes.img} />
      </Link>
      {isSearchClicked &&
        ReactDom.createPortal(
          <Backdrop onClose={searchClosedHandler} />,
          portalElements
        )}
      {isSearchClicked ? (
        <SearchUI />
      ) : (
        <div className={classes.wrapper} onClick={searchClickHandler}>
          <div className={classes.search}>검색 시작하기</div>
          <FaSearch className={classes["search-icon"]} />
        </div>
      )}

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
      {isUserMenuClicked &&
        (authCtx.isLoggedIn ? (
          <ProfileModal onClose={menuCloseHandler}>
            <UserMenu
              onClose={menuCloseHandler}
              onHostClick={props.onHostClick}
              onLoginFormClick={props.onLoginFormClick}
            />
          </ProfileModal>
        ) : (
          <ProfileModal onClose={menuCloseHandler}>
            <AnonymousMenu
              onClose={menuCloseHandler}
              onHostClick={props.onLoginFormClick}
              onLoginFormClick={props.onLoginFormClick}
            />
          </ProfileModal>
        ))}
    </header>
  );
};

export default Header;
