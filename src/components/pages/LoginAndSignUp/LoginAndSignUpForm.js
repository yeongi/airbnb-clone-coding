import React from "react";

const LoginAndSignUpForm = (props) => {
  return (
    <>
      <button onClick={props.onClose}>나가기</button>
      <h3>로그인 또는 회원가입</h3>
      <hr />
      <h1>에어비엔비에 오신 것을 환영합니다.</h1>
      <button onClick={props.toLogin}>로그인 하기</button>
      <p>로그인 페이지로 이동</p>
      <button onClick={props.toSignUp}>회원가입 하기</button>
      <p>회원가입 페이지로 이동</p>
    </>
  );
};

export default LoginAndSignUpForm;
