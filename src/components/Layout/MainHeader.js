import Header from "./Header/Header";
const MainHeader = (props) => {
  return (
    <>
      <Header
        onHostClick={props.hostModalClickHandler}
        onLoginFormClick={props.loginAndSignUpClickHandler}
      />
      <main>{props.children}</main>
    </>
  );
};

export default MainHeader;
