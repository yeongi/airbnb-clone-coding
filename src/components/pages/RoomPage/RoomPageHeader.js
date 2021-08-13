import React from "react";
import classes from "./RoomPageHeader.module.css";
import src from "../../../asset/category/category1.jpg";
import { AiTwotoneStar, AiFillHome } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";
const RoomPageHeader = () => {
  return (
    <>
      <h2 className={classes["room-name"]}>
        [3]NEW!!야외 테라스 느낌
        원목테이블#이태리감성#셀프체크인#무료넷플릭스[살균소독]
      </h2>
      <nav className={classes["room-features"]}>
        <div className={classes["flex-item"]}>
          <item>
            <AiTwotoneStar className={classes["header-icon"]} />
            후기
          </item>

          <item>
            <ImLocation className={classes["header-icon"]} />
            주소 지역
          </item>
          <item>
            <AiFillHome className={classes["header-icon"]} />
            편의 시설
          </item>
        </div>
        <div className={classes["flex-modal-item"]}>
          <item>
            <FiShare />
            공유
          </item>
          <item>
            <GiSaveArrow />
            저장
          </item>
        </div>
      </nav>
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
