import React from "react";
import { GrGithub } from "react-icons/gr";
import { StyledLink, StyledParagraph } from "./HeaderLogoLink.styled";

function HeaderLogoLink() {
  return (
    <StyledLink to='/' className='btn'>
      <GrGithub size={"30px"} /> <StyledParagraph>GitHub Dashboard</StyledParagraph>
    </StyledLink>
  );
}

export default HeaderLogoLink;
