import styled from "@emotion/styled";

export const FollowersWrapper = styled.div`
  padding: 10px;
`;
export const FollowersList = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  list-style: none;
`;
export const FollowersListElement = styled.ul`
  background-color: #e7eaf6;
  margin: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const FollowersImage = styled.img`
  display: block;
  border-radius: 10px;
  margin: 5px;
  width: 200px;
`;
