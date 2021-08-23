import React, { useContext, useRef } from "react";
import classes from "./LoginAndSignUpForm.module.css";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import AuthContext from "../../../store/auth-context";
import { Link } from "react-router-dom";
import { userGetAxios } from "../../../API/userAxios";

const LoginForm = (props) => {
  const userId = useRef("");
  const userPw = useRef("");
  const AuthCtx = useContext(AuthContext);

  const loginCheckHandler = () => {
    console.log("로그인 검사중...");
    //로그인 함수
    userGetAxios(userId.current.state.value, userPw.current.state.value);
    AuthCtx.onLogIn();
    props.onClose();
    alert("로그인 성공..!");
  };
  return (
    <div className={classes.wrapper}>
      <header>
        <span onClick={props.toBack}>{"< 이전페이지"}</span>
        <h2> 로그인 하기 </h2>
      </header>
      <hr />
      <Input placeholder="이메일을 입력하세요." ref={userId} />
      <Input placeholder="비밀번호를 입력하세요." ref={userPw} />
      <Button type="primary" block onClick={loginCheckHandler}>
        로그인 하기
      </Button>
      <Button block onClick={props.toBack}>
        돌아가기
      </Button>
    </div>
  );
};

export default LoginForm;
