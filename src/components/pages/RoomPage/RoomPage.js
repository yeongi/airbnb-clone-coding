import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import classes from "./RoomPage.module.css";
import RoomPageHeader from "./RoomPageHeader";
import RoomPageMain from "./RoomPageMain";
import queryString from "query-string";

const RoomPage = () => {
  const params = useParams();
  const roomnumber = params.roomnumber;
  const location = useLocation();

  //검색어 쿼리
  const query = queryString.parse(location.search);

  let imgContent;

  const [stempsrc, settempsrc] = useState();

  let roomJson = null;
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
        <RoomPageHeader />
        <RoomPageMain
          guests={tempOB.guests}
          checkIn={tempOB.checkInDate}
          checkOut={tempOB.checkOutDate}
          adult={tempOB.adult}
          child={tempOB.child}
        />
      </div>
      {stempsrc}
    </div>
  );
};

export default RoomPage;
