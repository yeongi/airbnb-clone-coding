import { Input } from "antd";
import React, { useRef, useState } from "react";
import AdressSearch from "./AdressSearch";
import classes from "./HostringForm.module.css";
import KaKaoSearchAdress from "../../KaKaoMap/KaKaoSearchAdress";

const HostingForm = () => {
  const roadAddressRef = useRef("");
  const detailAddressRef = useRef("");
  const [roadAddress, setRoadAdress] = useState("");

  const onAdressChangeHandler = (address) => {
    roadAddressRef.current.state.value = address;
    setRoadAdress(address);
  };

  return (
    <div>
      <h1>호스팅 신청하기</h1>
      <hr />
      <div>호스팅 폼 제작 예정</div>

      <div>
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
      </div>
    </div>
  );
};

export default HostingForm;
