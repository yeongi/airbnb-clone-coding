import React, { useEffect, useState } from "react";
import classes from "./RoomPageHeader.module.css";
import temp from "../../../asset/loading.gif";
import { AiTwotoneStar, AiFillHome } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";

const RoomPageHeader = (props) => {
  console.log(props.img);
  const [imgsrc, setSrc] = useState([]);

  useEffect(() => {
    if (props.img.length) {
      setSrc(props.img);
    }
  }, [props.img]);

  return (
    <>
      <h2 className={classes["room-name"]}>{props.name}</h2>
      <nav className={classes["room-features"]}>
        <div className={classes["flex-item"]}>
          <div>
            <AiTwotoneStar className={classes["header-icon"]} />
            후기
          </div>

          <div>
            <ImLocation className={classes["header-icon"]} />
            {props.addressIndex}
          </div>
          <div>
            <AiFillHome className={classes["header-icon"]} />
            편의 시설
          </div>
        </div>
        <div className={classes["flex-modal-item"]}>
          <div>
            <FiShare />
            공유
          </div>
          <div>
            <GiSaveArrow />
            저장
          </div>
        </div>
      </nav>
      <div className={classes["room-img"]}>
        <img
          src={imgsrc.length ? imgsrc[0].imagePath : temp}
          alt=""
          className={classes["main-img"]}
        />
      </div>
    </>
  );
};

export default RoomPageHeader;
