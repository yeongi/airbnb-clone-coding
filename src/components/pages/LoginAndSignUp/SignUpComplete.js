import React from "react";

const SignUpComplete = (props) => {
  return (
    <div>
      <h1>가입완료 페이지</h1>
      <button onClick={props.toLogin}>로그인 하러가기</button>
    </div>
  );
};

export default SignUpComplete;
