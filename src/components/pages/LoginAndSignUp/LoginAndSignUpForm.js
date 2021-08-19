import React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import classes from "./LoginAndSignUpForm.module.css";

const LoginAndSignUpForm = (props) => {
  return (
    <div className={classes.wrapper}>
      <header>
        <span onClick={props.onClose}>나가기</span>
        <h2>로그인 또는 회원가입</h2>
        <div> </div>
      </header>
      <hr />
      <h1>에어비엔비에 오신 것을 환영합니다.</h1>
      <Input placeholder="이메일을 입력하세요." />
      <hr />
      <Button type="primary" block onClick={props.toLogin}>
        로그인 하기
      </Button>
      <Button block onClick={props.toSignUp}>
        회원가입 하기
      </Button>
    </div>
  );
};

export default LoginAndSignUpForm;
