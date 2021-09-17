import classes from "./RoomPageMain.module.css";
import tempprofile from "../../../asset/tempprofile.jpg";
import { FaMedal } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { VscKey } from "react-icons/vsc";
import { BiBed } from "react-icons/bi";
import KaKaoSearchAdress from "../../KaKaoMap/KaKaoSearchAdress";
import { Button, Input, DatePicker } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import React, { useState } from "react";
import moment from "moment";
import queryString from "query-string";
import { enumerateDaysBetweenDates } from "../../../Lib/momentLib";
import PersonnelPicker from "../../Layout/Header/PersonnelPicker";
import { postBookAxios } from "../../../API/bookAxios";
import { getCookie } from "../../../Lib/cookies";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";

//날짜 선택 검사
let dateSelected = false;

const RoomPageMain = (props) => {
  const [isCounterClicked, setClicked] = useState(false);
  const [guests, setGuests] = useState(props.guests);
  const [usingDate, setDate] = useState([]);
  const [personnel, setPersonnel] = useState({
    adult: props.adult,
    child: props.child,
    toddler: 0,
  });

  let initailState = {
    checkIn: moment(new Date(), dateFormat),
    checkOut: moment(new Date(), dateFormat),
  };

  if (props.checkIn !== undefined) {
    initailState = {
      checkIn: moment(props.checkIn, dateFormat),
      checkOut: moment(props.checkOut, dateFormat),
    };

    dateSelected = true;
  }

  const [bookingState, setState] = useState(initailState);

  const history = useHistory();

  const onSubmitHandler = (e) => {
    //결재페이지로 이동.
    e.preventDefault();
    //postBookAxios(roomIndex,data);
    postBookAxios(2, {
      checkinDate: bookingState.checkIn,
      checkoutDate: bookingState.checkOut,
      adult: "2",
      child: "1",
    });
  };

  const pickerChangeHandler = (e) => {
    console.log(e);
    dateSelected = true;
    setState({
      checkIn: e[0],
      checkOut: e[1],
    });

    setDate(
      enumerateDaysBetweenDates(bookingState.checkIn, bookingState.checkOut)
    );
  };

  //카운터 함수
  const onCountChange = (state, allCounts) => {
    setPersonnel(state);
    setGuests(allCounts);
  };

  const onCounterClicked = () => {
    if (isCounterClicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };
  const content = `총 ${guests} 명`;
  const formContent = (
    <>
      <div className={classes["rate-wrapper"]}>
        <span>1박 비용</span>
        <p>
          ￦<strong>{props.basicCost} </strong>
          (원)
        </p>
      </div>
      <div className={classes["rate-wrapper"]}>
        <span>청소비</span>
        <p>￦{props.cleanUpCost} (원)</p>
      </div>
      <span className={classes.rate}>
        <b>총 금액 : </b> ￦
        <strong>
          {props.cleanUpCost + props.basicCost * usingDate.length}
        </strong>
        (원)
      </span>
    </>
  );

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes["room-detail"]}>
          <section className={classes["room-title"]}>
            <article>
              <span>
                호스트번호{props.host}님이 호스팅하는 {props.categoryIndex} 전체
              </span>
              <br />
              <label>
                최대 인원 {props.headCount}명, · 침실 1개, · 침대 {props.bed}개,
                · 욕실 {props.bath}개
              </label>
            </article>
            <img src={tempprofile} alt=" " />
          </section>
          <hr />
          <section className={classes["room-feature"]}>
            <article>
              <h1>숙소의 장점</h1>
              <div className={classes["flex-icon"]}>
                <FaMedal className={classes.icon} />
                <div>
                  <h3>슈퍼호스트입니다.</h3>
                  <p>
                    슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                    숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트
                    입니다.
                  </p>
                </div>
              </div>
              <div className={classes["flex-icon"]}>
                <GrLocation className={classes.icon} />
                <div>
                  <h3>훌룡한 숙소 위치</h3>
                  <p>
                    최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.
                  </p>
                </div>
              </div>
              <div className={classes["flex-icon"]}>
                <VscKey className={classes.icon} />
                <div>
                  <h3>순조로운 체크인 과정</h3>
                  <p>
                    최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준
                    숙소입니다.
                  </p>
                </div>
              </div>
            </article>
            <hr />
            <article>
              <h1>알아두면 좋은 정보</h1>
              <ul>
                <li>공동 주택 전체를 단독으로 사용</li>
                <li>청결 강화 기준에 따른 철저한 철소</li>
              </ul>
            </article>
            <hr />
            <article>
              <h1>숙소 정보</h1>
              {props.content}
            </article>
            <hr />
            <article>
              <h1>숙박 장소</h1>
              <div className={classes.bedroom}>
                <BiBed />
                <h3>침실</h3>
                <span>퀸사이즈 침대 {props.bed}개</span>
              </div>
            </article>
            <hr />
          </section>
        </div>
        <aside className={classes["rate-form"]}>
          <form onSubmit={onSubmitHandler}>
            {dateSelected ? (
              <h2>요금을 확인하세요.</h2>
            ) : (
              <h2>요금을 확인하려면 날짜를 입력하세요.</h2>
            )}
            <span>별 별점, 후기개수</span>
            <div className={classes["form-wrapper"]}>
              <RangePicker
                format={dateFormat}
                placeholder={["체크인 날짜", "체크아웃 날짜"]}
                order
                value={
                  dateSelected && [bookingState.checkIn, bookingState.checkOut]
                }
                disabledDate={(currnet) => {
                  return currnet & (currnet < moment().endOf("day"));
                }}
                onChange={pickerChangeHandler}
              />
              <Input
                type="text"
                placeholder="게스트 1명"
                value={content}
                onClick={onCounterClicked}
              />
            </div>
            {dateSelected && formContent}
            {dateSelected && (
              <Button type="primary" block htmlType="submit">
                a{/* <Link to={`/book/stays/s`}>예약하기</Link> */}
              </Button>
            )}
          </form>
          {isCounterClicked && (
            <PersonnelPicker
              onCountChange={onCountChange}
              adult={props.adult}
              child={props.child}
              closeClickHandler={onCounterClicked}
            />
          )}
        </aside>
      </div>
      <section className={classes["footer"]}>
        <hr />
        <article>
          <h1>후기 블록</h1>
          <div>
            <div>이미지</div>
            <p>이 호스트의 숙소에 대한 후기가 아직 없습니다.</p>
          </div>
          <div>
            <div>이미지</div>
            <p>
              여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은{" "}
              <b>에어비엔비의 게스트 환불 정책</b>에 따라 보호를 받습니다.
            </p>
          </div>
        </article>
        <hr />
        <article>
          <h1>호스팅 지역</h1>
          <b>
            {props.sido},{props.sigungu}
          </b>

          <p>
            대략적인 위치만 나타납니다. 상세 주소는 예약을 하시면 알 수
            있습니다.
          </p>
          <KaKaoSearchAdress
            className={classes.map}
            addr={`${props.sido} ${props.sigungu}`}
          />
          {props.address}
        </article>
        <hr />
        <article>
          <h1>호스트 정보</h1>
          <h1>
            <b>호스트 시작 날짜</b>
          </h1>
          <p>{props.hostStartDate}</p>
          부터 시작 했습니다.
        </article>
        <hr />
        <article>
          <h1>알아두어야 할 사항</h1>
          <p>이 호스트를 후원해 주세요.</p>
        </article>
        <hr />
      </section>
    </>
  );
};

export default RoomPageMain;
