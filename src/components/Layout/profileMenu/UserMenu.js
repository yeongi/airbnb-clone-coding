import classes from "./menu.module.css";

const UserMenu = () => {
  return (
    <div>
      <nav className={classes.items}>
        <div>메세지</div>
        <div>알림</div>
        <div>여행</div>
        <div>위시리스트</div>
        <hr />
        <div>숙소 호스팅 하기</div>
        <div>계정</div>
        <div>도움말</div>
        <hr />
        <div>로그 아웃</div>
      </nav>
    </div>
  );
};

export default UserMenu;
