import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainFooter from "./components/Layout/MainFooter";
import MainHeader from "./components/Layout/MainHeader";
import Homepage from "./pages/Homepage";
import RoomPage from "./pages/RoomPage";
import SearchPage from "./pages/SearchPage";
import HostingForm from "./components/HostingForm";
import LoginAndSignUpForm from "./components/LoginAndSignUpForm";
import Modal from "./components/UI/Modal";
import { useState } from "react";

const App = () => {
  const [isHostFormClicked, setHostFormClicked] = useState(false);

  const hostModalClickHandler = () => {
    setHostFormClicked(true);
  };

  const hostModalCloseHandler = () => {
    setHostFormClicked(false);
  };

  //로그인은 차후 context로 바꿀 예정
  const [isLogginAndSignUpFormClicked, setLogginAndSignUpFormClicked] =
    useState(false);

  const loginAndSignUpClickHandler = () => {
    setLogginAndSignUpFormClicked(true);
  };

  const loginAndSignUpCloseHandler = () => {
    setLogginAndSignUpFormClicked(false);
  };
  return (
    <>
      <MainHeader
        hostModalClickHandler={hostModalClickHandler}
        loginAndSignUpClickHandler={loginAndSignUpClickHandler}
      >
        <Switch>
          <Route path="/" exact>
            <Homepage hostModalClickHandler={hostModalClickHandler} />
          </Route>
          <Route path="/search/:keyword">
            <SearchPage />
          </Route>
          <Route path="/rooms/:roomnumber">
            <RoomPage />
          </Route>
        </Switch>
      </MainHeader>
      {isHostFormClicked && (
        <Modal onClose={hostModalCloseHandler}>
          <HostingForm />
        </Modal>
      )}
      {isLogginAndSignUpFormClicked && (
        <Modal onClose={loginAndSignUpCloseHandler}>
          <LoginAndSignUpForm />
        </Modal>
      )}
      <MainFooter />
    </>
  );
};
export default App;
