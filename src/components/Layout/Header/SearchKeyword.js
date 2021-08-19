import React, { useEffect, useState } from "react";
import classes from "./SearchKeyword.module.css";
import { AllLocation } from "../../../locate/location";

const SearchKeyword = (props) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (props.keyword.trim().length) {
      const content = AllLocation.filter((item) =>
        item.includes(props.keyword.trim())
      );
      setResult(content);
    } else {
      setResult([]);
    }
  }, [props.keyword]);

  const selectedList = (e) => {
    props.selected(e.target.innerHTML);
    setResult([]);
  };

  const Result = result.map((item) => {
    return (
      <li onClick={selectedList} key={Math.random()}>
        {item}
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      <header>
        {props.keyword.length ? (
          <h3>검색 결과</h3>
        ) : (
          <h3>검색어를 입력해 보세요.</h3>
        )}
      </header>
      <hr />
      <ul className={classes["result-wrapper"]}>
        {Result.length === 0 && props.keyword.length ? (
          <h4>검색결과가 없어요...</h4>
        ) : (
          Result
        )}
      </ul>
    </div>
  );
};

export default SearchKeyword;
