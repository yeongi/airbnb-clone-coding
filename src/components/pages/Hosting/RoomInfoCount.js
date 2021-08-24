import React, { useReducer } from "react";
import Counter from "../../UI/Counter";
import classes from "./RoomInfoCount.module.css";

const initialState = {
  headCount: 1,
  numOfBed: 1,
  numOfBath: 1,
};

const pickerReducer = (state, action) => {
  switch (action.type) {
    case "headCount_increment":
      return { ...state, headCount: state.headCount + 1 };
    case "headCount_decrement":
      return { ...state, headCount: state.headCount - 1 };
    case "numOfBed_increment":
      return { ...state, numOfBed: state.numOfBed + 1 };
    case "numOfBed_decrement":
      return { ...state, numOfBed: state.numOfBed - 1 };
    case "numOfBath_increment":
      return { ...state, numOfBath: state.numOfBath + 1 };
    case "numOfBath_decrement":
      return { ...state, numOfBath: state.numOfBath - 1 };
    case "reset":
      return { headCount: 1, numOfBed: 1, numOfBath: 1 };
    default:
  }
};

const RoomInfoCount = (props) => {
  const [countState, dispatchPicker] = useReducer(pickerReducer, initialState);

  const headCountPlusClickHandler = (e) => {
    e.preventDefault();
    dispatchPicker({ type: "headCount_increment" });
  };

  const headCountMinusClickHandler = (e) => {
    e.preventDefault();
    if (countState.headCount > 0) {
      dispatchPicker({ type: "headCount_decrement" });
    }
  };

  const bedPlusClickHandler = (e) => {
    e.preventDefault();
    dispatchPicker({ type: "numOfBed_increment" });
  };

  const bedMinusClickHandler = (e) => {
    e.preventDefault();
    if (countState.numOfBed > 0) {
      dispatchPicker({ type: "numOfBed_decrement" });
    }
  };

  const bathPlusClickHandler = (e) => {
    e.preventDefault();
    dispatchPicker({ type: "numOfBath_increment" });
  };

  const bathMinusClickHandler = (e) => {
    e.preventDefault();
    if (countState.numOfBath > 0) {
      dispatchPicker({ type: "numOfBath_decrement" });
    }
  };

  const resetClickHandler = (e) => {
    e.preventDefault();
    dispatchPicker({ type: "reset" });
  };

  props.onCounterChange(countState);

  return (
    <div>
      <div className={classes.wrapper}>
        <button onClick={resetClickHandler} className={classes.button}>
          리셋하기
        </button>
      </div>
      <Counter
        label="최대인원"
        detail="최대인원을 고르세요."
        value={countState.headCount}
        onPlus={headCountPlusClickHandler}
        onMinus={headCountMinusClickHandler}
      />
      <hr />
      <Counter
        label="침대 수"
        detail="침대의 개수를 고르세요."
        value={countState.numOfBed}
        onPlus={bedPlusClickHandler}
        onMinus={bedMinusClickHandler}
      />
      <hr />
      <Counter
        label="욕실 수"
        detail="욕실 수를 고르세요."
        value={countState.numOfBath}
        onPlus={bathPlusClickHandler}
        onMinus={bathMinusClickHandler}
      />
    </div>
  );
};

export default RoomInfoCount;
