import React from "react";
import classes from "./SearchedRoom.module.css";
import EXsrc from "../asset/exampleHome.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

const SearchedRoom = (props) => {
  const history = useHistory();
  const MoveToRoomDetailHandler = () => {
    history.push(`/rooms/${props.id}`);
  };

  return (
    <>
      <div className={classes.wrapper} onClick={MoveToRoomDetailHandler}>
        <img alt=" " src={EXsrc} />
        <div className={classes.container}>
          <div className={classes.location}>
            {props.gugunmyen} ,{props.sido} 의 {props.category}전체
          </div>
          <div className={classes["room-name"]}>{props.roomname}</div>
          <hr />
          <div className={classes["people-facility"]}>
            최대 인원 {props.Headcount}명ㆍ 침실 {props.NumOfBedroom}개 ㆍ 침대{" "}
            {props.NumOfBed}개 ㆍ 욕실 {props.NumOfBathroom}개
          </div>
          <br />
          <br />
          <br />
          <div>
            <AiFillStar className={classes["review-star"]} />
            <span className={classes["review-rating"]}>{props.rating}</span>
            <span className={classes["review-counting"]}>
              (후기{props.NumOfReview} 개)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedRoom;
//  <div className={props.className}>
//    {props.id} 의 컴포넌트
//    <br />
//    지역은{props.location} 입니다.
//    <br />
//    넣어야 할 것,
//    <br />
//    이미지,제목,위시리스트,방정보,후기,평점
//
//  </div>;
