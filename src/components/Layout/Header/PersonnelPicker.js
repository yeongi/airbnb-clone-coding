import React, { useReducer } from "react";
import Counter from "../../UI/Counter";
import classes from "./PersonnelPicker.module.css";

const initialState = {
  adult: 0,
  chidren: 0,
  toddler: 0,
};

const pickerReducer = (state, action) => {
  switch (action.type) {
    case "adult_increment":
      return { ...state, adult: state.adult + 1 };
    case "adult_decrement":
      return { ...state, adult: state.adult - 1 };
    case "chidren_increment":
      return { ...state, chidren: state.chidren + 1 };
    case "chidren_decrement":
      return { ...state, chidren: state.chidren - 1 };
    case "toddler_increment":
      return { ...state, toddler: state.toddler + 1 };
    case "toddler_decrement":
      return { ...state, toddler: state.toddler - 1 };
    case "reset":
      return { adult: 0, chidren: 0, toddler: 0 };
    default:
  }
};

const PersonnelPicker = (props) => {
  const [pickerState, dispatchPicker] = useReducer(pickerReducer, initialState);

  const adultPlusClickHandler = () => {
    dispatchPicker({ type: "adult_increment" });
  };

  const adultMinusClickHandler = () => {
    if (pickerState.adult > 0) {
      dispatchPicker({ type: "adult_decrement" });
    }
  };

  const chidrenPlusClickHandler = () => {
    dispatchPicker({ type: "chidren_increment" });
  };

  const chidrenMinusClickHandler = () => {
    if (pickerState.chidren > 0) {
      dispatchPicker({ type: "chidren_decrement" });
    }
  };

  const toddlerPlusClickHandler = () => {
    dispatchPicker({ type: "toddler_increment" });
  };

  const toddlerMinusClickHandler = () => {
    if (pickerState.toddler > 0) {
      dispatchPicker({ type: "toddler_decrement" });
    }
  };

  const resetClickHandler = () => {
    dispatchPicker({ type: "reset" });
  };

  const allPerson =
    pickerState.adult + pickerState.chidren + pickerState.toddler;

  props.onCountChange(pickerState, allPerson);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <button onClick={props.closeClickHandler} className={classes.button}>
          X
        </button>
        <button onClick={resetClickHandler} className={classes.button}>
          R
        </button>
      </div>
      <Counter
        label="성인"
        detail="만 13세 이상"
        value={pickerState.adult}
        onPlus={adultPlusClickHandler}
        onMinus={adultMinusClickHandler}
      />
      <hr />
      <Counter
        label="어린이"
        detail="만 2~12세"
        value={pickerState.chidren}
        onPlus={chidrenPlusClickHandler}
        onMinus={chidrenMinusClickHandler}
      />
      <hr />
      <Counter
        label="유아"
        detail="만 2세미만"
        value={pickerState.toddler}
        onPlus={toddlerPlusClickHandler}
        onMinus={toddlerMinusClickHandler}
      />
    </div>
  );
};

export default PersonnelPicker;