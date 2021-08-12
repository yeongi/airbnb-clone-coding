import { useParams } from "react-router-dom";
import KaKaoMap from "../KaKaoMap/KaKaoMap";
import classes from "./SearchPage.module.css";
import SearchedRoom from "../SearchedRoom";
import { useState } from "react";

const SearchPage = () => {
  const param = useParams();

  const DUMMY_ROOMS = [
    {
      id: "r1",
      location: param.keyword,
      roomname: "용소통나무집",
      sido: "남해시",
      gugunmyen: "이동면",
      category: "통나무집",
      Headcount: 10,
      NumOfBedroom: 4,
      NumOfBed: 2,
      NumOfBathroom: 2,
      rating: 4.99,
      NumOfReview: 71,
      pos: { Lat: 33.450701, Lng: 126.570667 },
    },
    {
      id: "r2",
      location: param.keyword,
      roomname: "광안리파노라마뷰#광안리 10초#",
      sido: "광안2동",
      gugunmyen: "수영구",
      category: "공동주택",
      Headcount: 3,
      NumOfBedroom: 1,
      NumOfBed: 2,
      NumOfBathroom: 1,
      rating: 4.97,
      NumOfReview: 165,
      pos: { Lat: 35.166454, Lng: 128.977302 },
    },
    {
      id: "r3",
      location: param.keyword,
      roomname: "문을열고 들어오면:낭만실조자를 위한 집",
      sido: "광안동",
      gugunmyen: "수영구",
      category: "공동주택",
      Headcount: 4,
      NumOfBedroom: 1,
      NumOfBed: 1,
      NumOfBathroom: 1,
      rating: 4.93,
      NumOfReview: 14,
      pos: { Lat: 37.456532, Lng: 126.950046 },
    },
    {
      id: "r4",
      location: param.keyword,
      roomname: "용소통나무집",
      sido: "남해시",
      gugunmyen: "이동면",
      category: "통나무집",
      Headcount: 10,
      NumOfBedroom: 4,
      NumOfBed: 2,
      NumOfBathroom: 2,
      rating: 4.99,
      NumOfReview: 71,
      pos: { Lat: 37.4854670592348, Lng: 126.95433073369959 },
    },
    {
      id: "r5",
      location: param.keyword,
      roomname: "광안리파노라마뷰#광안리 10초#",
      sido: "광안2동",
      gugunmyen: "수영구",
      category: "공동주택",
      Headcount: 3,
      NumOfBedroom: 1,
      NumOfBed: 2,
      NumOfBathroom: 1,
      rating: 4.97,
      NumOfReview: 165,
      pos: { Lat: 35.233599265755394, Lng: 129.08097886224715 },
    },
    {
      id: "r6",
      location: param.keyword,
      roomname: "문을열고 들어오면:낭만실조자를 위한 집",
      sido: "광안동",
      gugunmyen: "수영구",
      category: "공동주택",
      Headcount: 4,
      NumOfBedroom: 1,
      NumOfBed: 1,
      NumOfBathroom: 1,
      rating: 4.93,
      NumOfReview: 14,
      pos: { Lat: 35.14407349530702, Lng: 129.0105916845338 },
    },
    {
      id: "r7",
      location: param.keyword,
      roomname: "용소통나무집",
      sido: "남해시",
      gugunmyen: "이동면",
      category: "통나무집",
      Headcount: 10,
      NumOfBedroom: 4,
      NumOfBed: 2,
      NumOfBathroom: 2,
      rating: 4.99,
      NumOfReview: 71,
      pos: { Lat: 35.1679753193991, Lng: 128.92589711152226 },
    },
    {
      id: "r8",
      location: param.keyword,
      roomname: "광안리파노라마뷰#광안리 10초#",
      sido: "광안2동",
      gugunmyen: "수영구",
      category: "공동주택",
      Headcount: 3,
      NumOfBedroom: 1,
      NumOfBed: 2,
      NumOfBathroom: 1,
      rating: 4.97,
      NumOfReview: 165,
      pos: { Lat: 35.16685297475039, Lng: 129.15742965385155 },
    },
    {
      id: "r9",
      location: param.keyword,
      roomname: "문을열고 들어오면:낭만실조자를 위한 집",
      sido: "광안동",
      gugunmyen: "수영구",
      category: "공동주택",
      Headcount: 4,
      NumOfBedroom: 1,
      NumOfBed: 1,
      NumOfBathroom: 1,
      rating: 4.93,
      NumOfReview: 14,
      pos: { Lat: 34.651663828747765, Lng: 125.4203233531888 },
    },
  ];

  const [curFocusingPos, setFocusPos] = useState(DUMMY_ROOMS[0].pos);

  const curFocusPosHandler = (pos) => {
    setFocusPos(pos);
  };

  const SearchedRoomContent = DUMMY_ROOMS.map((room) => {
    return (
      <SearchedRoom
        key={room.id}
        id={room.id}
        location={room.location}
        roomnum={room.id}
        roomname={room.roomname}
        sido={room.sido}
        gugunmyen={room.gugunmyen}
        category={room.category}
        Headcount={room.Headcount}
        NumOfBedroom={room.NumOfBedroom}
        NumOfBed={room.NumOfBed}
        NumOfBathroom={room.NumOfBathroom}
        rating={room.rating}
        NumOfReview={room.NumOfReview}
        pos={room.pos}
        getCurPos={curFocusPosHandler}
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
          <h1>{param.keyword} 에서 찾은 숙소</h1>
          {SearchedRoomContent}
          <hr />
          <div className={classes.footer}>발</div>
        </div>
      </div>
      <KaKaoMap className={classes.map} pos={curFocusingPos} />
    </div>
  );
};

export default SearchPage;
