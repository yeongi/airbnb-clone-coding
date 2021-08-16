import React from "react";

const SignUpForm = (props) => {
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <div>대충 회원가입 창</div>
      <button onClick={props.toBack}>돌아가기</button>
      <button onClick={props.signUpComplete}>회원가입 완료</button>
    </div>
  );
};

export default SignUpForm;
