import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../redux/userData/userDataOperations";
import { getUser, getUserFollowers } from "../redux/userData/userDataSelectors";
const Followers = () => {
  const dispatch = useDispatch();
  const userFollowers = useSelector(getUserFollowers);
  const user = useSelector(getUser);

  useEffect(() => {
    if (user) dispatch(getFollowers(user.followers_url));
  }, [dispatch, user]);

  console.log("userFollowers: ", userFollowers);

  return (
    user && (
      <div style={{ backgroundColor: "coral" }}>
        <li>
          {userFollowers &&
            userFollowers.map((value) => (
              <ul key={value.id}>
                <p>{value.login}</p>
                <img src={value.avatar_url} alt={`follower ${value.id}`} />
              </ul>
            ))}
        </li>
      </div>
    )
  );
};

export default Followers;
