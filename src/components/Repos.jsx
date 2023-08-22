import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../redux/userData/userDataOperations";
import { getUser, getUserRepos } from "../redux/userData/userDataSelectors";
import { Link } from "react-router-dom";

const Repos = () => {
  const dispatch = useDispatch();
  const UserRepos = useSelector(getUserRepos);
  const user = useSelector(getUser);

  useEffect(() => {
    if (user) dispatch(getRepos(user.repos_url));
  }, [dispatch, user]);

  return (
    user && (
      <div style={{ backgroundColor: "coral" }}>
        <li>
          {UserRepos &&
            UserRepos.map((value) => (
              <ul key={value.id}>
                <p>{value.name}</p>
                <p>{value.description}</p>
                <Link to={value.html_url} target='new'>
                  To repository
                </Link>
              </ul>
            ))}
        </li>
      </div>
    )
  );
};

export default Repos;
