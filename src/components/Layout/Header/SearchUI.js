import React, { useReducer, useRef, useState } from "react";
import ReactDom from "react-dom";
import classes from "./SearchUI.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PersonnelPicker from "./PersonnelPicker";
import SearchKeyword from "./SearchKeyword";

const Overlay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};

const clickedReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return {
        isPickerClicked: false,
        isLocationClicked: true,
        isDatePickerClicked: false,
      };
    case "calander":
      return {
        isPickerClicked: false,
        isLocationClicked: false,
        isDatePickerClicked: true,
      };
    case "picker":
      return {
        isPickerClicked: true,
        isLocationClicked: false,
        isDatePickerClicked: false,
      };
    case "close":
      return {
        isPickerClicked: false,
        isLocationClicked: false,
        isDatePickerClicked: false,
      };
    default:
      return;
  }
};

const SearchUI = () => {
  const [isClickState, dispatchClick] = useReducer(clickedReducer, {
    isPickerClicked: false,
    isSearchClicked: false,
    isDatePickerClicked: false,
  });

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  // const [personnel, setPersonnel] = useState();
  const [locationKeyword, setLocationKeyword] = useState(" ");

  const locationSearchHandler = () => {
    dispatchClick({ type: "search" });
  };

  //검색창에서 키보드를 칠 때
  const onChangeKewordHandler = (e) => {
    if (e.target) {
      setLocationKeyword(e.target.value);
    }
    dispatchClick({ type: "search" });
  };

  //검색창에서 검색어를 골랐을때
  const setKeywordHandler = (keyword) => {
    setLocationKeyword(keyword);
    dispatchClick({ type: "calander" });
  };

  const personnelPickerClickHandler = () => {
    if (!isClickState.isPickerClicked) {
      dispatchClick({ type: "picker" });
    } else {
      dispatchClick({ type: "close" });
    }
  };

  const protalElements = document.getElementById("overlay");

  const onClickCalander = () => {
    dispatchClick({ type: "calander" });
  };

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const refCounterContainer = useRef(null);

  const onCountChange = (pickerObj, allCounts) => {
    if (refCounterContainer.current !== null) {
      const content = `총 ${allCounts} 명`;
      refCounterContainer.current.value = content;
    }
    // setPersonnel(pickerObj);
  };

  return (
    <>
      {isClickState.isPickerClicked &&
        ReactDom.createPortal(
          <Overlay>
            <PersonnelPicker
              onCountChange={onCountChange}
              closeClickHandler={personnelPickerClickHandler}
            />
          </Overlay>,
          protalElements
        )}
      {isClickState.isLocationClicked &&
        ReactDom.createPortal(
          <Overlay>
            <SearchKeyword
              keyword={locationKeyword}
              selected={setKeywordHandler}
            />
          </Overlay>,
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
              <input
                type="text"
                placeholder="어디로 여행가세요?"
                onChange={onChangeKewordHandler}
                onClick={locationSearchHandler}
                value={locationKeyword}
              />
            </div>
            <div className={classes.check} onClick={onClickCalander}>
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
                onClick={personnelPickerClickHandler}
                ref={refCounterContainer}
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
