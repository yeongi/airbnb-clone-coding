import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./RoomPage.module.css";
import RoomPageHeader from "./RoomPageHeader";
import RoomPageMain from "./RoomPageMain";

const RoomPage = () => {
  const params = useParams();
  const roomnumber = params.roomnumber;

  let imgContent;

  const [stempsrc, settempsrc] = useState();

  const url = "http://192.168.64.9/si-dos/ss";

  let roomJson = null;

  const AxiosGetHandler = async () => {
    //api 요청
    const axios = require("axios");

    try {
      const response = await axios.get(url);
      let roomJson = await response.data;
      console.log(roomJson[0].image_path);
      const tempsrc = roomJson[0].image_path;
      imgContent = tempsrc.map((imgUrl) => {
        return <img src={imgUrl} alt="" />;
      });

      settempsrc(imgContent);

      //데이터를 이용한 로직
    } catch (e) {
      // 오류처리
      console.log(e);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <RoomPageHeader />
        <RoomPageMain />
      </div>

      <button onClick={AxiosGetHandler}> 데이터 요청하기</button>
      {stempsrc}
    </div>
  );
};

export default RoomPage;
