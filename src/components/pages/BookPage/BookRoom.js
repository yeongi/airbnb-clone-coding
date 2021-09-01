import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./BookRoom.module.css";

const BookRoom = () => {
  const history = useHistory();

  const onBackClick = () => {
    history.goBack();
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes["header-wrapper"]}>
          <span onClick={onBackClick}>{"<"}</span>
          <h1>예약요청하기</h1>
        </div>
        <div className={classes["main-wrapper"]}>
          <section>
            <article>
              <h1>예약 정보</h1>
              <div>
                <h2>날짜</h2>
                <p>체크인 체크아웃 날짜</p>
              </div>
              <div>
                <h2>게스트</h2>
                <p>게스트 몇명 (총몇명) </p>
              </div>
            </article>
            <hr />
            <article>
              <h1>결제 수단</h1>
              <div>결제 정보 입력</div>
              <div>하는 창을 만들 예정</div>
            </article>
            <hr />
            <article>
              <h1>필수 입력 정보</h1>
              <div>날짜</div>
              <div>게스트</div>
            </article>
            <hr />
            <article>
              <h1>환불 정책</h1>
              <div>
                예약을 취소하면 총 숙박 요금의 50% 및 서비스 수수료 전액이
                환불됩니다.<b>자세히 알아보기</b>
              </div>
              <div>
                코로나19로 인한 여행 문제에는 정상 침작이 가능한 상황 정책이
                적용되지 않습니다.<b>자세히 알아보기</b>
              </div>
            </article>
            <hr />
            <article>
              <div>이미지</div>
              <div>
                <b>
                  호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직
                  확정된 것이 아닙니다.
                </b>
                예약 확정 전까지는 요금이 청구되지 않습니다.
              </div>
            </article>
            <article>
              <button>예약 요청</button>
            </article>
          </section>
          <aside className={classes.summary}>
            <div>
              <section>
                <div>이미지</div>
                <div>숙소 정보</div>
              </section>
              <hr />
              <section>
                <h1>요금 세부 정보</h1>
                <p>1박 요금</p>
                <p>서비스 수수료 </p>
                <p>숙박세와 수수료</p>
                <p>
                  <strong>총 합계(KRW) ￦요금</strong>
                </p>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookRoom;
