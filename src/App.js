import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainFooter from "./components/Layout/MainFooter";
import MainHeader from "./components/Layout/MainHeader";
import HomePage from "./components/pages/HomePage";
import RoomPage from "./components/pages/RoomPage/RoomPage";
import SearchPage from "./components/pages/SearchPage";
import HostingForm from "./components/HostingForm";
import LoginAndSignUpForm from "./components/pages/LoginAndSignUp/LoginAndSignUpForm";
import Modal from "./components/UI/Modal";
import { useContext, useReducer, useState } from "react";
import NotFoundPage from "./components/pages/NotFoundPage";
import SignUpForm from "./components/pages/LoginAndSignUp/SignUpForm";
import LoginForm from "./components/pages/LoginAndSignUp/LoginForm";
import SignUpComplete from "./components/pages/LoginAndSignUp/SignUpComplete";
import ScrollToTop from "./components/Layout/ScrollToTop";
import AuthContext from "./store/auth-context";

//ȸ������ �α��� ���â ����
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

  //�α��λ��´� ���� context�� �ٲ� ����
  //�α��� & ȸ������ ���� �ڵ鷯��
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

  //�α��θ��â ������ ���ǹ�
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
      <MainHeader
        hostModalClickHandler={hostModalClickHandler}
        loginAndSignUpClickHandler={loginAndSignUpClickHandler}
      >
        <Switch>
          <Route path="/" exact>
            <ScrollToTop>
              <HomePage hostModalClickHandler={hostModalClickHandler} />
            </ScrollToTop>
          </Route>
          <Route path="/airbnb-clone-coding/">
            <Redirect to="/" />
          </Route>
          <Route path="/search/:keyword" exact>
            <ScrollToTop>
              <SearchPage onLogin={loginAndSignUpClickHandler} />
            </ScrollToTop>
          </Route>
          <Route path="/rooms/:roomnumber" exact>
            <RoomPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </MainHeader>
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
