import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import classes from "./RoomPage.module.css";
import RoomPageHeader from "./RoomPageHeader";
import RoomPageMain from "./RoomPageMain";
import queryString from "query-string";
import { roomIndexAxios } from "../../../API/roomAxios";

const DUMMY_ROOM = {
  addressIndex: 43,
  categoryIndex: 40,
  cleanPrice: 123123,
  content: "123123",
  maxPerson: 1,
  name: "123",
  price: 123,
  roomIndex: 82,
  userIndex: 10,
};

const RoomPage = () => {
  const params = useParams();
  const roomnumber = params.roomnumber;
  const location = useLocation();
  const [room, setRooms] = useState(DUMMY_ROOM);
  const [roomnum, setRoomNum] = useState(roomnumber);

  //검색어 쿼리
  const query = queryString.parse(location.search);

  //api로 불러올 데이터들
  const [infoState, setInfo] = useState({
    bed: 0,
    bath: 0,
    sido: "",
    sigungu: "",
    category: "",
    content: "",
    hostStartDate: "",
  });

  const [imgArray, setImg] = useState([]);

  //방페이지 로드
  useEffect(() => {
    const timer = setTimeout(() => {
      roomIndexAxios(`/rooms/${roomnum}`).then((res) => {
        setRooms(res.data);
      });

      roomIndexAxios(`/rooms/${room.roomIndex}/facility`).then((res) => {
        setInfo((prev) => {
          return { ...prev, bed: res.data.bed, bath: res.data.bath };
        });
      });
      roomIndexAxios(`/rooms/addresses/${room.addressIndex}`).then((res) => {
        setInfo((prev) => {
          return { ...prev, sido: res.data.siDo, sigungu: res.data.siGunGu };
        });
      });
      roomIndexAxios(`/categories/${room.categoryIndex}`).then((res) => {
        setInfo((prev) => {
          return { ...prev, category: res.data.kind };
        });
      });
      roomIndexAxios(`/users/${room.userIndex}/start-date`).then((res) => {
        setInfo((prev) => {
          return { ...prev, hostStartDate: res.data.toString() };
        });
      });
      roomIndexAxios(`/rooms/${room.roomIndex}/images`).then((res) => {
        setImg(res.data);
      });
    }, 400);

    return () => {
      clearTimeout(timer);
    };

    //의존성 값은 변하는값 모두를 넣어야함.
  }, [roomIndexAxios]);

  //room header
  //제목

  //room main
  //후기
  //호스트
  //숙소정보
  //숙박장소
  //편의 시설
  //방 비용 , 청소 비용
  //알아두어야 할 사항

  let tempOB = {};

  if (query.guests === "1") {
    tempOB = {
      guests: 1,
      adult: 1,
      child: 0,
      checkIn: query.checkInDate,
      checkOut: query.checkOutDate,
    };
  } else {
    tempOB = {
      guests: query.guests,
      checkIn: query.checkInDate,
      checkOut: query.checkOutDate,
      adult: query.numOfAdults,
      child: query.numOfChild === undefined ? 0 : query.numOfChild,
    };
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <RoomPageHeader
          name={room.name}
          addressIndex={room.addressIndex}
          img={imgArray}
        />
        <RoomPageMain
          guests={tempOB.guests}
          checkIn={tempOB.checkInDate}
          checkOut={tempOB.checkOutDate}
          adult={tempOB.adult}
          child={tempOB.child}
          // api
          roomnum={room.roomnum}
          host={room.userIndex}
          basicCost={room.price}
          cleanUpCost={room.cleanPrice}
          headCount={room.maxPerson}
          sido={infoState.sido}
          sigungu={infoState.sigungu}
          content={room.content}
          categoryIndex={infoState.category}
          bed={infoState.bed}
          bath={infoState.bath}
          hostStartDate={infoState.hostStartDate}
        />
      </div>
    </div>
  );
};

export default RoomPage;
