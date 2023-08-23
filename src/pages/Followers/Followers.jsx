import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../../redux/userData/userDataOperations";
import {
  getUser,
  getUserFollowers,
  isLoadingFollowers,
} from "../../redux/userData/userDataSelectors";
import { StyledLink, StyledParagraph } from "../../components/HeaderLogoLink/HeaderLogoLink.styled";
import {
  FollowersWrapper,
  FollowersList,
  FollowersListElement,
  FollowersImage,
} from "./Followers.styled";
import { LoaderPage } from "../../components/Loader/Loader";

const Followers = () => {
  const dispatch = useDispatch();
  const userFollowers = useSelector(getUserFollowers);
  const isLoading = useSelector(isLoadingFollowers);
  const user = useSelector(getUser);

  useEffect(() => {
    if (user) dispatch(getFollowers(user.followers_url));
  }, [dispatch, user]);

  return (
    user && (
      <FollowersWrapper>
        {isLoading && <LoaderPage />}
        <FollowersList>
          {userFollowers &&
            userFollowers.map((value) => (
              <FollowersListElement key={value.id}>
                <FollowersImage src={value.avatar_url} alt={`follower ${value.id}`} />
                <StyledParagraph>{value.login}</StyledParagraph>
                <StyledLink to={value.html_url} target='new'>
                  To {value.login}'s gitHub page
                </StyledLink>
              </FollowersListElement>
            ))}
        </FollowersList>
      </FollowersWrapper>
    )
  );
};

export default Followers;
