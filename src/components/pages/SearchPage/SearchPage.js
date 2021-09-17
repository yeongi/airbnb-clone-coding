import { useLocation, useParams } from "react-router-dom";
import KaKaoMap from "../../KaKaoMap/KaKaoMap";
import classes from "./SearchPage.module.css";
import SearchedRoom from "./SearchedRoom";
import { useEffect, useState } from "react";
import { getRoomAxios } from "../../../API/roomAxios";
import EXsrc from "../../../asset/exampleHome.jpg";
import queryString from "query-string";

const DUMMY_ROOMS = [
  {
    addressIndex: 43,
    categoryIndex: 40,
    cleanPrice: 123123,
    content: "123123",
    maxPerson: 1,
    name: "123",
    price: 123,
    roomIndex: 82,
    userIndex: 10,
  },
];

const SearchPage = (props) => {
  const param = useParams();
  const [roomList, setRoom] = useState(DUMMY_ROOMS);

  const location = useLocation();

  const query = queryString.parse(location.search);
  const [page, setPage] = useState(1);
  console.log(query);

  useEffect(() => {
    //프로미스 객체
    const RoomPromise = getRoomAxios(page);
    RoomPromise.then((response) => {
      // 성공 시 데이터를 가져옴
      // data를 배열로 작업하는 함수
      console.log("응답", response);
      const list = response.data;
      setRoom(list);
      console.log(list);
    });
  }, [page]);

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

  const pageClickHandler = (e) => {
    // console.log(e.target.innerHTML);
    setPage(e.target.innerHTML);
    document.body.scrollTop = 0;
  };

  const SearchedRoomContent = roomList.map((room) => {
    return (
      <SearchedRoom
        key={room.roomIndex}
        id={room.roomIndex}
        categoryIndex={room.categoryIndex}
        roomTitle={room.name}
        addressIndex={room.addressIndex}
        imgPath={EXsrc}
        category={room.category}
        Headcount={room.maxPerson}
        // rating={room.rating}
        // NumOfReview={room.NumOfReview}
        rating="3.11"
        NumOfReview="100"
        onLogin={props.onLogin}
        getCurAddr={curFocusAddrHandler}
        guests={query.headCount}
        checkInDate={query.checkInDate}
        checkOutDate={query.checkOutDate}
        numOfChild={query.numOfAdults}
        numOfAdults={query.numOfChild}
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
          <div className={classes.footer}>
            <nav>
              <li onClick={pageClickHandler}>1</li>
              <li onClick={pageClickHandler}>2</li>
            </nav>
          </div>
        </div>
      </div>
      <KaKaoMap className={classes.map} addr={curFocusingAddr} />
    </div>
  );
};

export default SearchPage;
