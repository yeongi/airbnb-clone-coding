import React, { useReducer } from "react";
import Counter from "../../UI/Counter";
import classes from "./PersonnelPicker.module.css";

const pickerReducer = (state, action) => {
  switch (action.type) {
    case "adult_increment":
      return { ...state, adult: state.adult + 1 };
    case "adult_decrement":
      return { ...state, adult: state.adult - 1 };
    case "children_increment":
      return { ...state, child: state.child + 1 };
    case "children_decrement":
      return { ...state, child: state.child - 1 };
    case "toddler_increment":
      return { ...state, toddler: state.toddler + 1 };
    case "toddler_decrement":
      return { ...state, toddler: state.toddler - 1 };
    case "reset":
      return { adult: 0, child: 0, toddler: 0 };
    default:
  }
};

const PersonnelPicker = (props) => {
  const [pickerState, dispatchPicker] = useReducer(pickerReducer, {
    adult: props.adult,
    child: props.child,
    toddler: 0,
  });

  const adultPlusClickHandler = () => {
    dispatchPicker({ type: "adult_increment" });
  };

  const adultMinusClickHandler = () => {
    if (pickerState.adult > 0) {
      dispatchPicker({ type: "adult_decrement" });
    }
  };

  const childrenPlusClickHandler = () => {
    dispatchPicker({ type: "children_increment" });
  };

  const childrenMinusClickHandler = () => {
    if (pickerState.child > 0) {
      dispatchPicker({ type: "children_decrement" });
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

  const allPerson = pickerState.adult + pickerState.child + pickerState.toddler;

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
        value={pickerState.child}
        onPlus={childrenPlusClickHandler}
        onMinus={childrenMinusClickHandler}
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
