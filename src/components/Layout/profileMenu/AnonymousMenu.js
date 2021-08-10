import classes from "./menu.module.css";

const AnonymousMenu = () => {
  return (
    <div>
      <nav className={classes.items}>
        <div>로그인</div>
        <div>회원가입</div>
        <hr />
        <div>숙소 호스팅 하기</div>
        <div>도움말</div>
      </nav>
    </div>
  );
};

export default AnonymousMenu;
