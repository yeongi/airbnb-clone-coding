import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./menu.module.css";

const UserMenu = (props) => {
  const authCtx = useContext(AuthContext);
  const histroy = useHistory();
  const onLogOutHandler = () => {
    authCtx.onLogOut();
    alert("로그아웃 되었습니다.");
    props.onClose();
  };

  const hostModalClickHandler = () => {
    props.onHostClick();
    props.onClose();
  };

  const toTrips = () => {
    histroy.push("/trips");
    props.onClose();
  };

  const toWish = () => {
    histroy.push("/wishlists");
    props.onClose();
  };

  const toAccount = () => {
    histroy.push("/account-settings");
    props.onClose();
  };

  return (
    <div>
      <nav className={classes.items}>
        <div>메세지</div>
        <div>알림</div>
        <div onClick={toTrips}>여행</div>
        <div onClick={toWish}>위시리스트</div>
        <hr />
        <div onClick={hostModalClickHandler}>숙소 호스팅 하기</div>
        <div onClick={toAccount}>계정</div>
        <div>도움말</div>
        <hr />
        <div onClick={onLogOutHandler}>로그 아웃</div>
      </nav>
    </div>
  );
};

export default UserMenu;
