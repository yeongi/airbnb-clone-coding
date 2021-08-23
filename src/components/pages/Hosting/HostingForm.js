import { Input, Button } from "antd";
import React, { useRef, useState } from "react";
import AdressSearch from "./AdressSearch";
import classes from "./HostringForm.module.css";
import KaKaoSearchAdress from "../../KaKaoMap/KaKaoSearchAdress";
import RoomInfoCount from "./RoomInfoCount";

const HostingForm = () => {
  const roadAddressRef = useRef("");
  const detailAddressRef = useRef("");
  const [roadAddress, setRoadAdress] = useState("");

  const onAdressChangeHandler = (address) => {
    roadAddressRef.current.state.value = address;
    setRoadAdress(address);
  };

  return (
    <div className={classes.wrapper}>
      <h1>호스팅 신청하기</h1>
      <hr />
      <section>
        <h1>주소를 선택하세요.</h1>
        <Input
          ref={roadAddressRef}
          value={roadAddress}
          placeholder="주소를 검색하세요."
        />
        <Input ref={detailAddressRef} placeholder="상세주소를 입력하세요." />
        <AdressSearch result={onAdressChangeHandler} />
        <div className={classes.container}>
          <KaKaoSearchAdress className={classes.map} addr={roadAddress} />
        </div>
      </section>
      <hr />
      <section>
        <h1>카테고리</h1>
      </section>
      <hr />
      <section>
        <h1>숙소이름</h1>
      </section>
      <hr />
      <section>
        <h1>기본요금,청소비용</h1>
      </section>
      <hr />
      <section>
        <h1>숙소 기본 정보</h1>
        <RoomInfoCount />
      </section>
      <hr />
      <section>
        <h1>숙소 부가 정보</h1>알아두면 좋은 정보
      </section>
      <hr />
      <section>
        <h1>본문내용</h1>간단한 설명/제목/이미지/달력(어느날 부터 시작)
      </section>
      <hr />
      <Button type="primary" block>
        제출 하기
      </Button>
    </div>
  );
};

export default HostingForm;
