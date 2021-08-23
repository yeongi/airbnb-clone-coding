import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./menu.module.css";

const UserMenu = () => {
  const authCtx = useContext(AuthContext);

  const onLogOutHandler = () => {
    authCtx.onLogOut();
    alert("로그아웃 되었습니다.");
  };

  return (
    <div>
      <nav className={classes.items}>
        <div>메세지</div>
        <div>알림</div>
        <div>여행</div>
        <Link to="/wishlists">위시리스트</Link>
        <hr />
        <div>숙소 호스팅 하기</div>
        <div>계정</div>
        <div>도움말</div>
        <hr />
        <div onClick={onLogOutHandler}>로그 아웃</div>
      </nav>
    </div>
  );
};

export default UserMenu;
