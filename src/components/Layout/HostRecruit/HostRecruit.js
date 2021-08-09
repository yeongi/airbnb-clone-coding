import src from "../../../asset/hosting.jpg";
import classes from "./HostRecruit.module.css";

const HostRecruit = () => {
  const hostModalHandler = () => {
    console.log("호스트 모달 뛰우기");
  };
  return (
    <div className={classes.content}>
      <img src={src} alt=" " />
      <div className={classes.text}>
        <h1>호스팅 시작하기</h1>
        <span>
          숙소를 공유하여 부수입을 올리고 새로운 <br /> 가능성을 만나세요.
        </span>
        <br />
        <br />
        <button onClick={hostModalHandler}>"자세히 알아보기"</button>
      </div>
    </div>
  );
};
export default HostRecruit;
