import { useParams } from "react-router-dom";
import classes from "./RoomPage.module.css";
import RoomPageFooter from "./RoomPageFooter";
import RoomPageHeader from "./RoomPageHeader";
import RoomPageMain from "./RoomPageMain";

const RoomPage = () => {
  const params = useParams();
  const roomnumber = params.roomnumber;

  // const url = "http://192.168.64.9:8080/reservation/si_dos/123123";

  // let roomJson = null;

  // const AxiosGetHandler = async () => {
  //   //api 요청
  //   const axios = require("axios");
  //   console.log(axios);

  //   try {
  //     const response = await axios.get(url);
  //     let roomJson = await response.data;
  //     console.log(roomJson);

  //     //데이터를 이용한 로직
  //   } catch (e) {
  //     // 오류처리
  //     console.log(e);
  //   }
  // };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <RoomPageHeader />
        <RoomPageMain />
        <RoomPageFooter />
      </div>

      {/* <button onClick={AxiosGetHandler}> 데이터 요청하기</button> */}
    </div>
  );
};

export default RoomPage;
