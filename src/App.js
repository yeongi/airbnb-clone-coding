import "./App.css";
import Header from "./components/Layout/Header/Header";
import LocalSearch from "./components/Layout/LocalSearch/LocalSearch";
import CategorySearch from "./components/Layout/CategorySearch/CategorySearch";
import HostRecruit from "./components/Layout/HostRecruit/HostRecruit";
import Footer from "./components/Layout/Footer/Footer";
import { useState } from "react";
import Modal from "./components/UI/Modal";
import HostingForm from "./components/Layout/HostingForm";
import LoginAndSignUpForm from "./components/Layout/LoginAndSignUpForm";

function App() {
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
      <Header
        onHostClick={hostModalClickHandler}
        onLoginFormClick={loginAndSignUpClickHandler}
      />
      <main>
        <LocalSearch />
        <CategorySearch />
        <HostRecruit onHostClick={hostModalClickHandler} />
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
      </main>
      <Footer />
    </>
  );
}

export default App;
