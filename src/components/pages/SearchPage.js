import { useParams } from "react-router-dom";
import KaKaoMap from "../KaKaoMap/KaKaoMap";
import classes from "./SearchPage.module.css";
import SearchedRoom from "../SearchedRoom";
import { useState } from "react";
import { getRoomAxios } from "../../API/userAxios";
import EXsrc from "../../asset/exampleHome.jpg";
const SearchPage = (props) => {
  const param = useParams();
  const [roomList, setRoom] = useState();

  const DUMMY_ROOMS = [
    {
      id: "r1",
      location: param.keyword,
      imgPath: EXsrc,
      roomname: "용소통나무집",
      sido: "남해시",
      gugunmyen: "이동면",
      address: "부산광역시 강서구 입소정관길 203",
      category: "통나무집",
      Headcount: 10,
      NumOfBed: 2,
      NumOfBathroom: 2,
      rating: 4.99,
      NumOfReview: 71,
      facility: "에어컨ㆍ주방ㆍ무선 인터넷ㆍ헤어드라이어",
    },
  ];

  const axiosGetHandler = () => {
    //프로미스 객체
    const RoomList = getRoomAxios();
    RoomList.then((data) => {
      //성공 시 데이터를 가져옴
      setRoom(data);
      console.log(roomList);
    });
  };

  const [curFocusingAddr, setFocusAddr] = useState(DUMMY_ROOMS[0].address);

  const curFocusAddrHandler = (address) => {
    setFocusAddr(address);
  };

  const SearchedRoomContent = DUMMY_ROOMS.map((room) => {
    return (
      <SearchedRoom
        key={room.id}
        id={room.id}
        imgPath={room.imgPath}
        location={room.location}
        roomTitle={room.title}
        sido={room.sido}
        address={room.address}
        gugunmyen={room.gugunmyen}
        category={room.category}
        Headcount={room.Headcount}
        NumOfBed={room.NumOfBed}
        NumOfBathroom={room.NumOfBathroom}
        rating={room.rating}
        NumOfReview={room.NumOfReview}
        facility={room.facility}
        onLogin={props.onLogin}
        getCurAddr={curFocusAddrHandler}
      />
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes["scroll-box"]}>
        <div className={classes["room-container"]}>
          <span className={classes["search-result-text"]}>
            검색결과는 {DUMMY_ROOMS.length}건 입니다.
          </span>
          <button onClick={axiosGetHandler}>데이터 요청하기</button>
          <h1>{param.keyword} 에서 찾은 숙소</h1>
          {SearchedRoomContent}
          <hr />
          <div className={classes.footer}>발</div>
        </div>
      </div>
      <KaKaoMap className={classes.map} addr={curFocusingAddr} />
    </div>
  );
};

export default SearchPage;
