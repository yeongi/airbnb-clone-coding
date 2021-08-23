import React, { useContext } from "react";
import classes from "./SearchedRoom.module.css";
import { AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import AuthContext from "../store/auth-context";

const SearchedRoom = (props) => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const MoveToRoomDetailHandler = () => {
    history.push(`/rooms/${props.id}`);
  };

  const wishlistAddHandler = () => {
    if (AuthCtx.isLoggedIn) {
      console.log(props.roomname + "숙소가 위시리스트에 추가되었어요!!");
      return;
    } else {
      props.onLogin();
      return;
    }
  };

  const onFocusAndChangeMapPosHandler = () => {
    props.getCurAddr(props.address);
    console.log(props.address);
  };

  return (
    <>
      <hr />
      <div
        className={classes.wrapper}
        onMouseUpCapture={onFocusAndChangeMapPosHandler}
      >
        <img alt=" " src={props.imgPath} onClick={MoveToRoomDetailHandler} />
        <div className={classes.container} onClick={MoveToRoomDetailHandler}>
          <div className={classes.location}>
            {props.gugunmyen} ,{props.sido} 의 {props.category}전체
          </div>
          <div className={classes["room-title"]}>{props.roomTitle}</div>
          <hr />
          <div className={classes["people-facility"]}>
            최대 인원 {props.Headcount}명ㆍ 침실 {props.NumOfBedroom}개 ㆍ 침대{" "}
            {props.NumOfBed}개 ㆍ 욕실 {props.NumOfBathroom}개
          </div>
          <div className={classes["people-facility"]}>{props.facility}</div>
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
        <FiHeart className={classes.wish} onClick={wishlistAddHandler} />
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
