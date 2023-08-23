import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./CommingSoon.styled";

const CommingSoon = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>This Page is comming soon, sory</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </Wrapper>
  );
};

export default CommingSoon;
