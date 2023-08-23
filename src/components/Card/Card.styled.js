import styled from "@emotion/styled";

export const StyledUl = styled.ul`
  margin: 0;
  width: 100%;
`;
export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
`;
export const CardWrapper = styled.div`
  display: flex;
  background-color: #e7eaf6;
  border-radius: 25px;

  padding: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
