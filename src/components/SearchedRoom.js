import React from "react";
import { Link } from "react-router-dom";

const SearchedRoom = (props) => {
  return (
    <>
      <hr />
      <div className={props.className}>
        {props.id} 의 컴포넌트
        <br />
        지역은{props.location} 입니다.
        <br />
        넣어야 할 것,
        <br />
        이미지,제목,위시리스트,방정보,후기,평점
        <br />
        <Link to={`/rooms/${props.roomnum}`}>방 상세 페이지</Link>
      </div>
      <hr />
    </>
  );
};

export default SearchedRoom;
