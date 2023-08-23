import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../redux/userData/userDataOperations";
import { getUser, getUserRepos, isLoadingRepos } from "../../redux/userData/userDataSelectors";

import { ReposWrapper, ReposList, ReposListElement, ReposParagraph } from "./Repos.styled";
import { StyledLink } from "../../components/HeaderLogoLink/HeaderLogoLink.styled";

import { LoaderPage } from "../../components/Loader/Loader";

const Repos = () => {
  const dispatch = useDispatch();
  const UserRepos = useSelector(getUserRepos);
  const isLoading = useSelector(isLoadingRepos);

  const user = useSelector(getUser);

  useEffect(() => {
    if (user) dispatch(getRepos(user.repos_url));
  }, [dispatch, user]);

  return (
    user && (
      <ReposWrapper>
        {isLoading && <LoaderPage />}
        <ReposList>
          {UserRepos &&
            UserRepos.map((value) => (
              <ReposListElement key={value.id}>
                <ReposParagraph>{value.name}</ReposParagraph>
                <ReposParagraph>{value.description}</ReposParagraph>
                <StyledLink to={value.html_url} target='new'>
                  To repository
                </StyledLink>
              </ReposListElement>
            ))}
        </ReposList>
      </ReposWrapper>
    )
  );
};

export default Repos;
