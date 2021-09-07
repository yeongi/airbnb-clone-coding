import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  //default 형태를 지정
  isLoggedIn: false,
  email: "",
  onLogOut: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  //state
  const [isLoggedIn, setIsLoggedIn] = useState({
    login: false,
    email: "",
  });

  const logoutHandler = () => {
    setIsLoggedIn(() => {
      return { login: false, email: "" };
    });
  };

  const logInHandler = (id) => {
    setIsLoggedIn(() => {
      return { login: true, email: id };
    });
  };

  //페이지가 렌더링 될때 로그인을 확인 하는 로직
  useEffect(() => {
    // 로그인을 어떻게 확인해야 할까??
    setIsLoggedIn(() => {
      return { login: true, email: "cbg5255@gmail.com" };
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn.login,
        email: isLoggedIn.email,
        onLogIn: logInHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
