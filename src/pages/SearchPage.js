import { useParams } from "react-router-dom";
import KaKaoMap from "../components/KaKaoMap/KaKaoMap";
import classes from "./SearchPage.module.css";
import SearchedRoom from "../components/SearchedRoom";
const DUMMY_POS = [
  { Lat: 33.450701, Lng: 126.570667 },
  { Lat: 33.450701, Lng: 126.570667 },
];

const SearchPage = () => {
  const param = useParams();

  const DUMMY_ROOMS = [
    { id: "r1", location: param.keyword },
    { id: "r2", location: param.keyword },
    { id: "r3", location: param.keyword },
    { id: "r4", location: param.keyword },
    { id: "r5", location: param.keyword },
    { id: "r6", location: param.keyword },
    { id: "r7", location: param.keyword },
    { id: "r8", location: param.keyword },
    { id: "r9", location: param.keyword },
    { id: "r10", location: param.keyword },
  ];

  const SearchedRoomContent = DUMMY_ROOMS.map((room) => {
    return (
      <SearchedRoom
        key={room.id}
        id={room.id}
        location={room.location}
        roomnum={room.id}
        className={classes.room}
      />
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes["scroll-box"]}>
        <div className={classes["room-container"]}>
          <h1>{param.keyword} 에서 찾은 숙소</h1>
          <hr />
          {SearchedRoomContent}
          <div className={classes.footer}>발</div>
        </div>
      </div>
      <KaKaoMap className={classes.map} pos={DUMMY_POS[1]} />
    </div>
  );
};

export default SearchPage;
