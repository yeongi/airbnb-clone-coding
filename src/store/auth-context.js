import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  //default 형태를 지정
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  //state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  //페이지가 렌더링 될때 세션을 확인 하는 로직
  useEffect(() => {
    const session = true;
    //로그인을 확인하는 로직
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: logInHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
