import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/userData/userDataSelectors";
import HeaderLogoLink from "../HeaderLogoLink/HeaderLogoLink";
import { StyledLink, StyledParagraph } from "../HeaderLogoLink/HeaderLogoLink.styled";
import { StyledNavBar } from "./Navbar.styled";
const Navbar = () => {
  const user = useSelector(getUser);

  return (
    <StyledNavBar>
      <HeaderLogoLink />

      <StyledLink to='/repos' className='btn'>
        <StyledParagraph> {`Repos ${user ? user?.public_repos : "0"}`}</StyledParagraph>
      </StyledLink>

      <StyledLink to='/followers' className='btn'>
        <StyledParagraph> {`Followers ${user ? user?.followers : "0"}`}</StyledParagraph>
      </StyledLink>

      <StyledLink to='following-gists' className='btn'>
        <StyledParagraph> {`Following ${user ? user?.following : "0"}`}</StyledParagraph>
      </StyledLink>

      <StyledLink to='following-gists' className='btn'>
        <StyledParagraph> {`Gists ${user ? user?.public_gists : "0"}`}</StyledParagraph>
      </StyledLink>

      {user && (
        <StyledLink to={user && user.html_url} className='btn' target='new'>
          <StyledParagraph> {`To ${user && user.login}'s gitHub page`}</StyledParagraph>
        </StyledLink>
      )}
    </StyledNavBar>
  );
};

export default Navbar;
