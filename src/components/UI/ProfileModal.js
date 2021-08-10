import reactDom from "react-dom";
import classes from "./ProfileModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("modal");

const ProfileModal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElements
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default ProfileModal;
