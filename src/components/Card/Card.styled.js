import styled from "@emotion/styled";

export const StyledUl = styled.ul`
  margin: 0;
`;
export const StyledLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CardWrapper = styled.div`
  display: flex;
  background-color: #e7eaf6;
  border-radius: 25px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
