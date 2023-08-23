import React from "react";
import { Link } from "react-router-dom";
import { ErrorWrapper } from "./Error.styled";
const Error = () => {
  return (
    <ErrorWrapper>
      <h1>404</h1>
      <h3>Sorry, page not found</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </ErrorWrapper>
  );
};

export default Error;
