import Local from "./Local";
import classes from "./LocalSearch.module.css";

import busan from "../../asset/Local/busan.jpg";
import seoul from "../../asset/Local/seoul.jpg";
import yangyang from "../../asset/Local/yangyang.jpg";
import sukcho from "../../asset/Local/sukcho.jpg";
import jeju from "../../asset/Local/jeju.jpg";
import degu from "../../asset/Local/degu.jpg";
import wanju from "../../asset/Local/wanju.jpg";
import gosung from "../../asset/Local/gosung.jpg";

const localArray = [
  {
    id: "l1",
    local: "부산",
    distance: "5분",
    src: busan,
  },
  {
    id: "l2",
    local: "서울",
    distance: "5시간",
    src: seoul,
  },
  {
    id: "l3",
    local: "양양군",
    distance: "5.5시간",
    src: yangyang,
  },
  {
    id: "l4",
    local: "속초시",
    distance: "5.5시간",
    src: sukcho,
  },
  {
    id: "l5",
    local: "제주도(JeJu)",
    distance: "6시간",
    src: jeju,
  },
  {
    id: "l6",
    local: "대구",
    distance: "1.5시간",
    src: degu,
  },
  {
    id: "l7",
    local: "완주군",
    distance: "3.5",
    src: wanju,
  },
  {
    id: "l8",
    local: "고성군",
    distance: "6시간",
    src: gosung,
  },
];

const LocalSearch = () => {
  const myLocalList = localArray.map((local) => {
    return (
      <Local
        key={local.id}
        id={local.id}
        local={local.local}
        distance={local.distance}
        src={local.src}
      ></Local>
    );
  });
  return (
    <section className={classes.wrapper}>
      <article className={classes.content}>
        <h1 className={classes.intro}>가까운 여행지 둘러보기</h1>
        <div className={classes["local-list"]}>{myLocalList}</div>
      </article>
    </section>
  );
};

export default LocalSearch;
