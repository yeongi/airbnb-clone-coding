import React from "react";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const params = useParams();
  const roomnumber = params.roomnumber;
  return (
    <div>
      <h1>방정보</h1>
      <h1>방 번호는 {roomnumber}입니다.</h1>
    </div>
  );
};

export default RoomPage;
