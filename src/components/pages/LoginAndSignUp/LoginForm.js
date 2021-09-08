import React, { useContext, useRef } from "react";
import classes from "./LoginAndSignUpForm.module.css";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import AuthContext from "../../../store/auth-context";
import { signInPostAxios } from "../../../API/userAxios";
import { getLog } from "../../../API/temp";
import { setCookie } from "../../../Lib/cookies";

const LoginForm = (props) => {
  const userId = useRef("");
  const userPw = useRef("");
  const AuthCtx = useContext(AuthContext);

  const loginHandler = () => {
    console.log("로그인 검사중...");
    //로그인 함수

    signInPostAxios(userId.current.state.value, userPw.current.state.value)
      .then((res) => {
        console.log(res);
        if (
          res.status === 200 &&
          res.data.email === userId.current.state.value
        ) {
          console.log(AuthCtx.email);

          //쿠키로 토큰 저장
          setCookie("JSESSIONID", res.data.token, {
            Domain: "192.168.64.1",
            Path: "/",
            Expires: "Session",
            HttpOnly: true,
            Secure: false,
          });

          AuthCtx.onLogIn(userId.current.state.value);
          props.onClose();
          alert("로그인 성공..!");
        } else {
          alert("로그인 실패...");
        }
      })
      .then((error) => {
        // console.log("에러" + error);
      });
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
      <Button type="primary" block onClick={loginHandler}>
        로그인 하기
      </Button>
      <Button block onClick={props.toBack}>
        돌아가기
      </Button>
    </div>
  );
};

export default LoginForm;
