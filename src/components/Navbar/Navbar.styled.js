import styled from "@emotion/styled";

export const StyledNavBar = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
  }
`;
