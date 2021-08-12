import classes from "./RoomPageMain.module.css";

const RoomPageMain = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes["room-detail"]}>
        <div className={classes["room-title"]}>
          <div>
            <span> May님이 호스팅하는 공동 주택 전체</span>
            <br />
            <label>최대 인원 4명, · 침실 1개, · 침대 1개, · 욕실 1개</label>
          </div>
          <div>프로필 사진</div>
        </div>
        <hr />
        <body>
          <div>
            <div>집 전체</div>
            <div>청결 강화 </div>
            <div>수퍼호스트 입니다</div>
            <div>순조로운 체크인 과정</div>
          </div>
          <hr />
          <div>
            <p>
              내집처럼 편안하고 아늑하게 힐링 하세요 :) ※코로나19에 대비하여
              매번 깨끗이 '살균소독 방역' 하고 있습니다 - 제 프로필을 눌러서
              다른 숙소도 구경하세요^^ - 얼리체크인(오후 2시 이후 가능) 원하실
              경우 미리 말씀해 주세요
            </p>
          </div>
          <hr />
          <div>숙박 장소</div>
          <hr />
          <div>숙소 편의 시설</div>
          <hr />
          <div>
            <h2>체크인 날짜를 선택해 주세요.</h2>
            <form>
              <input type="date" />
              <input type="date" />
            </form>
          </div>
        </body>
      </div>
      <div className={classes["rate-form"]}>요금 확인 폼 (sticky) </div>
    </div>
  );
};

export default RoomPageMain;
