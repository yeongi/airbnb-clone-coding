import React from "react";
import classes from "./LoginAndSignUpForm.module.css";
import { Button, Input } from "antd";
import "antd/dist/antd.css";

const SignUpForm = (props) => {
  return (
    <form>
      <div className={classes["signup-wrapper"]}>
        <header>
          <span onClick={props.toBack}>{"< 이전페이지"}</span>
          <h2> 회원 가입 완료하기 </h2>
        </header>

        <hr />
        <Input placeholder="이름" type="text" />
        <p>정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</p>
        <Input placeholder="ex)19980928" type="text" />
        <p>
          만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의
          다른 회원에게 공개되지 않습니다.
        </p>
        <Input placeholder="이메일" type="email" />
        <p>예약 확인과 영수증을 이메일로 보내드립니다.</p>
        <Input placeholder="전화번호" />
        <p>전화번호를 입력해주세요.</p>
        <Input placeholder="비밀번호" type="password" />
        <p>비밀번호를 신중하게 입력해주세요.</p>
        <hr />
        <p>
          아래의 <b>동의 및 계속하기</b>버튼을 선택하면,{" "}
          <b>에어비엔비의 서비스 약관</b>,<b>결제 서비스 약관</b>,{" "}
          <b>개인정보처리방침</b>, <b>차별 금지 정책</b>에 동의 하는 것입니다.
        </p>
        <Button type="primary" block onClick={props.signUpComplete}>
          동의 및 계속하기
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
