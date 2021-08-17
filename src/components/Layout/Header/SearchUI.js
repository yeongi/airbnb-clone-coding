import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import classes from "./SearchUI.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PersonnelPicker from "./PersonnelPicker";

const PersonnelOverlay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};

const SearchUI = () => {
  const [isPickerCliked, setPersennelpickerClicked] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [personnel, setPersonnel] = useState();

  const personnelPickerClickHandler = () => {
    if (isPickerCliked) {
      setPersennelpickerClicked(false);
      return;
    }
    if (!isPickerCliked) {
      setPersennelpickerClicked(true);
      return;
    }
  };

  const protalElements = document.getElementById("overlay");

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const refContainer = useRef(null);

  const onCountChange = (pickerObj, allCounts) => {
    setPersonnel(pickerObj);
    if (refContainer.current !== null) {
      const content = `총 ${allCounts} 명`;
      refContainer.current.value = content;
    }
  };

  return (
    <>
      {isPickerCliked &&
        ReactDom.createPortal(
          <PersonnelOverlay>
            <PersonnelPicker onCountChange={onCountChange} />
          </PersonnelOverlay>,
          protalElements
        )}
      <div className={classes.wrapper}>
        <div className={classes.type}>
          숙소
          <hr />
        </div>
        <form>
          <div className={classes.container}>
            <div className={classes.edge}>
              <b>위치</b>
              <input type="text" placeholder="어디로 여행가세요?" />
            </div>
            <div className={classes.check}>
              <b>체크인</b>
              <DatePicker
                showDisabledMonthNavigation
                minDate={new Date()}
                onChange={onDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="날짜를 선택해 주세요."
                monthsShown={2}
                calendarClassName={classes["date-picker"]}
              />
            </div>
            <div className={classes.check}>
              <b>체크아웃</b>
              <input type="text" readOnly />
            </div>
            <div className={classes.edge} onClick={personnelPickerClickHandler}>
              <b>인원</b>
              <input
                type="text"
                placeholder="게스트 추가"
                readOnly
                ref={refContainer}
              />
            </div>
            <div className={classes.search}>
              <button type="submit">검색</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchUI;
