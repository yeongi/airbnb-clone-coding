import React from "react";
import classes from "./RoomPageHeader.module.css";
import src from "../../../asset/category/category1.jpg";

const RoomPageHeader = () => {
  return (
    <>
      <h2 className={classes["room-name"]}>
        [3]NEW!!야외 테라스 느낌
        원목테이블#이태리감성#셀프체크인#무료넷플릭스[살균소독]
      </h2>
      <div className={classes["room-features"]}>
        <div className={classes["flex-item"]}>
          <div>후기 </div>
          <div>슈퍼호스트 </div>
          <div>주소 지역</div>
        </div>
        <div className={classes["flex-modal-item"]}>
          <div>공유</div>
          <div>저장</div>
        </div>
      </div>
      <div className={classes["room-img"]}>
        <img src={src} alt="" className={classes["main-img"]} />
        <div className={classes["side-img"]}>
          <img src={src} alt="" />
          <img src={src} alt="" />
        </div>
        <div className={classes["side-img"]}>
          <img src={src} alt="" />
          <img src={src} alt="" />
        </div>
      </div>
    </>
  );
};

export default RoomPageHeader;
