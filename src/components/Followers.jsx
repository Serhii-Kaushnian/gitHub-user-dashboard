import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../redux/userData/userDataOperations";
import { getUser, getUserFollowers } from "../redux/userData/userDataSelectors";
import { Link } from "react-router-dom";
const Followers = () => {
  const dispatch = useDispatch();
  const userFollowers = useSelector(getUserFollowers);
  const user = useSelector(getUser);

  useEffect(() => {
    if (user) dispatch(getFollowers(user.followers_url));
  }, [dispatch, user]);

  return (
    user && (
      <div style={{ backgroundColor: "coral" }}>
        <li>
          {userFollowers &&
            userFollowers.map((value) => (
              <ul key={value.id}>
                <p>{value.login}</p>
                <img src={value.avatar_url} alt={`follower ${value.id}`} />
                <Link to={value.html_url} target='new'>
                  To {value.login}'s gitHub page
                </Link>
              </ul>
            ))}
        </li>
      </div>
    )
  );
};

export default Followers;
