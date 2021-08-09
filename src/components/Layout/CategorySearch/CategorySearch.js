import React from "react";
import Category from "./Category";
import classes from "./CategorySearch.module.css";
import img1 from "./../../../asset/category/category1.jpg";
import img2 from "./../../../asset/category/category2.jpg";
import img3 from "./../../../asset/category/category3.jpg";
import img4 from "./../../../asset/category/category4.jpg";

const CategoryArray = [
  {
    id: "c1",
    src: img1,
    text: "자연생활을 만끽할 수 있는 숙소",
  },
  {
    id: "c2",
    src: img2,
    text: "독특한 공간",
  },
  {
    id: "c3",
    src: img3,
    text: "집 전체",
  },
  {
    id: "c4",
    src: img4,
    text: "반려동물 동반 가능",
  },
];

const CategorySearch = () => {
  const myCategoryList = CategoryArray.map((item) => {
    return (
      <Category key={item.id} id={item.id} src={item.src} text={item.text} />
    );
  });

  return (
    <div className={classes.content}>
      <h1 className={classes.intro}>어디에서나, 여행은 살아보는 거야!</h1>
      <div className={classes.wrapper}>{myCategoryList}</div>
    </div>
  );
};

export default CategorySearch;
