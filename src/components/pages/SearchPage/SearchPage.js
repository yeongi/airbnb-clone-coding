import { useLocation, useParams } from "react-router-dom";
import KaKaoMap from "../../KaKaoMap/KaKaoMap";
import classes from "./SearchPage.module.css";
import SearchedRoom from "./SearchedRoom";
import { useEffect, useState } from "react";
import { getRoomAxios } from "../../../API/roomAxios";
import EXsrc from "../../../asset/exampleHome.jpg";
import queryString from "query-string";
const SearchPage = (props) => {
  const param = useParams();
  const [roomList, setRoom] = useState([]);

  const location = useLocation();

  const query = queryString.parse(location.search);
  console.log(query);

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

  useEffect(() => {
    //프로미스 객체
    const RoomPromise = getRoomAxios();
    RoomPromise.then((response) => {
      //성공 시 데이터를 가져옴
      //data를 배열로 작업하는 함수
      const list = Object.values(response.data).reduce((acc, cur) => {
        return acc.concat(cur);
      });
      setRoom(list);
      console.log(list);
    });
  }, []);

  // const axiosGetHandler = () => {
  //   //프로미스 객체
  //   const RoomPromise = getRoomAxios();
  //   RoomPromise.then((response) => {
  //     //성공 시 데이터를 가져옴
  //     //data를 배열로 작업하는 함수
  //     const list = Object.values(response.data).reduce((acc, cur) => {
  //       return acc.concat(cur);
  //     });
  //     setRoom(list);
  //     console.log(list);
  //   });
  // };

  const [curFocusingAddr, setFocusAddr] = useState(DUMMY_ROOMS[0].address);

  const curFocusAddrHandler = (address) => {
    setFocusAddr(address);
  };

  let title = <h1>{param.keyword} 에서 찾은 숙소</h1>;

  switch (query.searchType) {
    case "default":
      title = <h1>{param.keyword} 에서 찾은 숙소</h1>;
      console.log(query);
      break;
    case "local":
      title = <h1>{param.keyword} 지역에 있는 숙소</h1>;
      break;
    case "category":
      title = <h1>{param.keyword} </h1>;
      break;
    default:
      break;
  }

  const SearchedRoomContent = roomList.map((room) => {
    return (
      <SearchedRoom
        key={room.id}
        id={room.id}
        imgPath={EXsrc}
        location={room.location}
        roomTitle={room.title}
        sido={room.sido}
        address={room.address}
        gugunmyen={room.gugunmyen}
        category={room.category}
        Headcount={room.headCount}
        NumOfBed={room.numOfBath}
        NumOfBathroom={room.numOfBed}
        // rating={room.rating}
        // NumOfReview={room.NumOfReview}
        rating="3.11"
        NumOfReview="100"
        facility={room.facility}
        onLogin={props.onLogin}
        getCurAddr={curFocusAddrHandler}
        guests={query.headCount}
        checkInDate={query.checkInDate}
        checkOutDate={query.checkOutDate}
      />
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes["scroll-box"]}>
        <div className={classes["room-container"]}>
          <span className={classes["search-result-text"]}>
            검색결과는 {roomList.length}건 입니다.
          </span>
          {title}
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
