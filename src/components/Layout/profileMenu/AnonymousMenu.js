import classes from "./menu.module.css";

const AnonymousMenu = (props) => {
  const HostAndCloseHandler = () => {
    props.onClose();
    props.onHostClick();
  };

  const LoginAndSignUpFormCloseHandler = () => {
    props.onClose();
    props.onLoginFormClick();
  };

  return (
    <div>
      <nav className={classes.items}>
        <div onClick={LoginAndSignUpFormCloseHandler}>로그인</div>
        <div onClick={LoginAndSignUpFormCloseHandler}>회원가입</div>
        <hr />
        <div onClick={HostAndCloseHandler}>숙소 호스팅 하기</div>
        <div>도움말</div>
      </nav>
    </div>
  );
};

export default AnonymousMenu;
