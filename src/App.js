import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainFooter from "./components/Layout/MainFooter";
import MainHeader from "./components/Layout/MainHeader";
import HomePage from "./components/pages/HomePage";
import RoomPage from "./components/pages/RoomPage/RoomPage";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import HostingForm from "./components/pages/Hosting/HostingForm";
import LoginAndSignUpForm from "./components/pages/LoginAndSignUp/LoginAndSignUpForm";
import Modal from "./components/UI/Modal";
import { useContext, useReducer, useState } from "react";
import NotFoundPage from "./components/pages/NotFoundPage";
import SignUpForm from "./components/pages/LoginAndSignUp/SignUpForm";
import LoginForm from "./components/pages/LoginAndSignUp/LoginForm";
import SignUpComplete from "./components/pages/LoginAndSignUp/SignUpComplete";
import ScrollToTop from "./components/Layout/ScrollToTop";
import AuthContext from "./store/auth-context";
import Wishlists from "./components/pages/Wishlists";
import Trips from "./components/pages/Trips";
import Account from "./components/pages/Account";
import BookRoom from "./components/pages/BookPage/BookRoom";
import MiniHeader from "./components/Layout/MiniHeader";

//회원가입 로그인 모달창 상태
const initialModalFormState = {
  LoginAndSignUp: false,
  LoginForm: false,
  LoginFailed: false,
  SignUpForm: false,
  SignUpComplete: false,
  closed: true,
};

const loginSignUpRenderReducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { LoginAndSignUp: true, closed: false };
    case "close":
      return {
        LoginAndSignUp: false,
        LoginForm: false,
        LoginFailed: false,
        SignUpForm: false,
        SignUpComplete: false,
        closed: true,
      };
    case "signup":
      return { ...state, SignUpForm: true };
    case "signup_complete":
      return { ...state, SignUpComplete: true };
    case "login":
      return { ...state, LoginForm: true, LoginFailed: false };
    case "login_failed":
      return { ...state, LoginFailed: true };
    default:
      return state;
  }
};

const App = () => {
  const [isHostFormClicked, setHostFormClicked] = useState(false);

  const [loginFormState, dispatchModal] = useReducer(
    loginSignUpRenderReducer,
    initialModalFormState
  );

  const authCtx = useContext(AuthContext);

  const hostModalClickHandler = () => {
    if (authCtx.isLoggedIn) {
      setHostFormClicked(true);
      return;
    } else {
      dispatchModal({ type: "open" });
      return;
    }
  };

  const hostModalCloseHandler = () => {
    setHostFormClicked(false);
  };

  //로그인상태는 차후 context로 바꿀 예정
  //로그인 & 회원가입 관련 핸들러들
  let LoginAndSignUpContent;

  const loginAndSignUpClickHandler = () => {
    dispatchModal({ type: "open" });
  };

  const loginAndSignUpCloseHandler = () => {
    dispatchModal({ type: "close" });
  };

  const loginClickHandler = () => {
    dispatchModal({ type: "login" });
  };

  const loginFailHandler = () => {
    dispatchModal({ type: "login_failed" });
  };

  const signUpClickHandler = () => {
    dispatchModal({ type: "signup" });
    console.log(loginFormState);
  };

  const signUpCompleteClickHandler = () => {
    dispatchModal({ type: "signup_complete" });
  };

  const completeAndLoginHandler = () => {
    dispatchModal({ type: "close" });
    dispatchModal({ type: "open" });
    dispatchModal({ type: "login" });
  };

  //로그인모달창 페이지 조건문
  if (loginFormState.LoginAndSignUp === true) {
    LoginAndSignUpContent = (
      <LoginAndSignUpForm
        onClose={loginAndSignUpCloseHandler}
        toLogin={loginClickHandler}
        toSignUp={signUpClickHandler}
      />
    );
  }

  if (loginFormState.SignUpForm === true) {
    LoginAndSignUpContent = (
      <SignUpForm
        toBack={loginAndSignUpClickHandler}
        signUpComplete={signUpCompleteClickHandler}
      />
    );
  }

  if (loginFormState.LoginForm === true) {
    LoginAndSignUpContent = (
      <LoginForm
        toBack={loginAndSignUpClickHandler}
        onClose={loginAndSignUpCloseHandler}
      />
    );
  }

  if (loginFormState.SignUpComplete === true) {
    LoginAndSignUpContent = (
      <SignUpComplete toLogin={completeAndLoginHandler} />
    );
  }

  if (loginFormState.closed === true) {
    LoginAndSignUpContent = "";
  }

  return (
    <>
      <Switch>
        <MainHeader
          hostModalClickHandler={hostModalClickHandler}
          loginAndSignUpClickHandler={loginAndSignUpClickHandler}
        >
          <Route path="/" exact>
            <ScrollToTop>
              <HomePage hostModalClickHandler={hostModalClickHandler} />
            </ScrollToTop>
          </Route>
          <Route path="/search/:keyword" exact>
            <ScrollToTop>
              <SearchPage onLogin={loginAndSignUpClickHandler} />
            </ScrollToTop>
          </Route>
          <Route path="/rooms/:roomnumber" exact>
            <RoomPage />
          </Route>
          <Route path="/book/stays/:roomnumber" exact>
            <ScrollToTop>
              <BookRoom />
            </ScrollToTop>
          </Route>
          <Route path="/airbnb-clone-coding/">
            <Redirect to="/" />
          </Route>
          <Route path="/wishlists" exact>
            <Wishlists />
          </Route>
          <Route path="/trips" exact>
            <Trips />
          </Route>
          <Route path="/account-setting" exact>
            <Account />
          </Route>
          <Redirect from="*" to="/">
            <NotFoundPage />
          </Redirect>
        </MainHeader>
      </Switch>

      {isHostFormClicked && (
        <Modal onClose={hostModalCloseHandler}>
          <HostingForm />
        </Modal>
      )}
      {loginFormState.LoginAndSignUp && (
        <Modal onClose={loginAndSignUpCloseHandler}>
          {LoginAndSignUpContent}
        </Modal>
      )}
      <MainFooter />
    </>
  );
};
export default App;
