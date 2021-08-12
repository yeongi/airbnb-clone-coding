import React from "react";
import classes from "./RoomPageFooter.module.css";

const RoomPageFooter = () => {
  return (
    <div className={classes.wrapper}>
      <hr />
      <div>후기 블록</div>
      <hr />
      <div>호스팅 지역</div>
      <hr />
      <div>호스트 정보</div>
      <hr />
      <div>알아두어야 할 사항</div>
      <hr />
    </div>
  );
};

export default RoomPageFooter;
