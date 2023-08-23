import styled from "@emotion/styled";

export const ReposWrapper = styled.div`
  padding: 10px;
`;
export const ReposList = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  list-style: none;
`;
export const ReposListElement = styled.ul`
  background-color: #e7eaf6;
  margin: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const ReposParagraph = styled.p`
  max-width: 200px;
  overflow: auto;
  font-weight: 500;
`;
