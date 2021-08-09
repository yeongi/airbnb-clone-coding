import classes from "./Footer.module.css";

const introNavArray = [
  "에어비엔비 이용방법",
  "뉴스룸",
  "에어비엔비 2021",
  "투자자 정보",
  "에어비앤비 플러스",
  "호텔 투나잇",
  "에어비엔비 비즈니스 프로그램",
  "호스트 분들이 있기에 가능합니다.",
  "채용정보",
  "창립자 편지",
];

const communityNavArray = [
  "다양성 및 소속감",
  "접근성",
  "에어비엔비 어소시에이트",
  "구호 인력을 위한 숙소",
  "게스트 추천",
  "Airbnb.org",
];

const hostingNavArray = [
  "숙소 호스팅",
  "온라인 체험 호스팅하기",
  "체험 호스팅하기",
  "책임감 있는 호스팅",
  "자료 센터",
  "커뮤니티 센터",
];

const helpAirbnbNavArray = [
  "에어비앤비의 코로나 19 대응 방안",
  "도움말 센터",
  "예약 취소 옵션",
  "에어비엔비 이웃 민원 지원",
  "신뢰와 안전",
];

const footerNavArray = [
  "ⓒ2021 Airbnb.inc",
  "개인정보 처리방침",
  "이용약관",
  "사이트맵",
  "한국의 변경된 환불 정책",
  "회사 세부정보",
];

const Footer = () => {
  const introContent = introNavArray.map((item) => {
    return <div>{item}</div>;
  });

  const communityContent = communityNavArray.map((item) => {
    return <div>{item}</div>;
  });

  const hostingContent = hostingNavArray.map((item) => {
    return <div>{item}</div>;
  });

  const helpAirbnbContent = helpAirbnbNavArray.map((item) => {
    return <div>{item}</div>;
  });

  const footerNavContent = footerNavArray.map((item) => {
    return <div>{item}</div>;
  });
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div>
          <div className={classes.span}>소개</div>
          <div className={classes.container}>{introContent}</div>
        </div>
        <div>
          <div className={classes.span}>커뮤니티</div>
          <div className={classes.container}>{communityContent}</div>
        </div>
        <div>
          <div className={classes.span}>호스팅하기</div>
          <div className={classes.container}>{hostingContent}</div>
        </div>
        <div>
          <div className={classes.span}>에어비엔비 지원</div>
          <div className={classes.container}>{helpAirbnbContent}</div>
        </div>
      </div>
      <hr />
      <div className={classes["footer-container"]}>{footerNavContent}</div>
    </footer>
  );
};

export default Footer;
