import React from "react";
import { StyledHeaderWrapper } from "./HeaderWrapper.styled";
function HeaderWrapper({ children }) {
  return <StyledHeaderWrapper>{children}</StyledHeaderWrapper>;
}

export default HeaderWrapper;
