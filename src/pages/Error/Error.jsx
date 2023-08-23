import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Sorry, page not found</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100%;
  display: grid;
  place-items: center;
  background: #a2a8d3;
  text-align: center;
  padding: 20px;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: teal;
    margin-bottom: 1.5rem;
  }
  a {
    padding: 5px 10px;
    text-decoration: none;
    background-color: #fff;
    border-radius: 5px;
    &:hover {
      background-color: #cbf2f3;
    }
  }
`;
export default Error;
