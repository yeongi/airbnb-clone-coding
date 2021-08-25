import classes from "./RoomPageMain.module.css";
import tempprofile from "../../../asset/tempprofile.jpg";
import { FaMedal } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { VscKey } from "react-icons/vsc";
import { BiBed } from "react-icons/bi";
import KaKaoSearchAdress from "../../KaKaoMap/KaKaoSearchAdress";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";

const RoomPageMain = (props) => {
  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(history);
    history.push(`/book/stays/123`);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes["room-detail"]}>
          <section className={classes["room-title"]}>
            <article>
              <span> May님이 호스팅하는 공동 주택 전체</span>
              <br />
              <label>최대 인원 4명, · 침실 1개, · 침대 1개, · 욕실 1개</label>
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
              <p>내집처럼 편안하고 아늑하게 힐링 하세요 :)</p>
              <b>
                ※코로나19에 대비하여 매번 깨끗이 '살균소독 방역' 하고 있습니다
              </b>
              <p>- 제 프로필을 눌러서 다른 숙소도 구경하세요^^</p>
              <p>
                - 얼리체크인(오후 2시 이후 가능) 원하실 경우 미리 말씀해 주세요
              </p>
            </article>
            <hr />
            <article>
              <h1>숙박 장소</h1>
              <div className={classes.bedroom}>
                <BiBed />
                <h3>침실</h3>
                <span>퀸사이즈 침대 1개</span>
              </div>
            </article>
            <hr />
            <article>
              <h1>숙소 편의 시설</h1>
            </article>
            <hr />
            <article>
              <h2>체크인 날짜를 선택해 주세요.</h2>
              <form>
                <input type="date" />
                <input type="date" />
              </form>
            </article>
          </section>
        </div>
        <aside className={classes["rate-form"]}>
          <form onSubmit={onSubmitHandler}>
            <span>요금을 확인하려면 날짜를 입력하세요.</span>
            <p>별 별점, 후기개수</p>
            <Input type="date" placeholder="날짜추가" />
            <Input type="text" placeholder="게스트 1명" />
            <Button type="primary" block htmlType="submit">
              예약하기
            </Button>
          </form>
        </aside>
      </div>
      <section className={classes["footer"]}>
        <hr />
        <article>
          <h1>후기 블록</h1>
        </article>
        <hr />
        <article>
          <h1>호스팅 지역</h1>
          <KaKaoSearchAdress
            className={classes.map}
            addr={"부산광역시 강서구 입소정관길 203"}
          />
        </article>
        <hr />
        <article>
          <h1>호스트 정보</h1>
        </article>
        <hr />
        <article>
          <h1>알아두어야 할 사항</h1>
        </article>
        <hr />
      </section>
    </>
  );
};

export default RoomPageMain;
