import { useState } from "react";
import src from "../../../asset/hosting.jpg";
import Modal from "../../UI/Modal";
import HostingForm from "../HostingForm";
import classes from "./HostRecruit.module.css";

const HostRecruit = () => {
  const [isHostFormClicked, setHostFormClicked] = useState(false);
  const hostModalClickHandler = () => {
    setHostFormClicked(true);
  };

  const hostModalCloseHandler = () => {
    setHostFormClicked(false);
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
        <button onClick={hostModalClickHandler}>"바로 등록하기"</button>
        {isHostFormClicked && (
          <Modal onClose={hostModalCloseHandler}>
            <HostingForm />
          </Modal>
        )}
      </div>
    </div>
  );
};
export default HostRecruit;
