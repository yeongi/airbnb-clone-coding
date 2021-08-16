import React from "react";
import classes from "./SearchUI.module.css";

const SearchUI = () => {
  return (
    <div>
      <div>숙소</div>
      <div className={classes.container}>
        <div>
          <h1>위치</h1>
        </div>
        <div>
          <h1>체크인</h1>
        </div>
        <div>
          <h1>체크아웃</h1>
        </div>
        <div>
          <h1>인원</h1>
        </div>
        <div>
          <h1>버튼</h1>
        </div>
      </div>
    </div>
  );
};

export default SearchUI;
