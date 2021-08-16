import React from "react";

const LoginForm = (props) => {
  return (
    <div>
      <h1>로그인 하기</h1>
      <button onClick={props.toBack}>돌아가기</button>
    </div>
  );
};

export default LoginForm;
