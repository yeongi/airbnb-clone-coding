import React from "react";

const ScrollToTop = (props) => {
  window.scrollTo(0, 0);
  return <>{props.children}</>;
};

export default ScrollToTop;
