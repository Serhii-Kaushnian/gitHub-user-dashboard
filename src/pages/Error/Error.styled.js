import styled from "@emotion/styled";

export const ErrorWrapper = styled.section`
  max-height: 100%;
  display: grid;
  place-items: center;
  background: #a2a8d3;
  text-align: center;
  padding: 20px;
  h1 {
    font-size: 8rem;
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
