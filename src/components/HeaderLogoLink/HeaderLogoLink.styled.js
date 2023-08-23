import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  transition: background-color 250ms ease;
  &:hover {
    outline: none;
    background-color: #e7eaf6;
  }
  @media (max-width: 1024px) {
    padding: 5px;
    height: 30px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
  @media (min-width: 768px) {
    & + & {
      margin-left: 20px;
    }
  }
`;

export const StyledParagraph = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 10px 0;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
