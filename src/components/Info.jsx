import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userData/userDataSelectors";
import Card from "./Card";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const user = useSelector(getUser);
  console.log("user: ", user);
  return (
    user && (
      <div>
        <div>Repos {user.public_repos}</div>
        <div>Followers {user.followers}</div>
        <div>Following {user.following}</div>
        <div>Gists {user.public_gists}</div>
        <Link to={user.html_url} className='btn' target='new'>
          To <b>{user.login}</b>'s gitHub page
        </Link>
        <Card user={user} />
      </div>
    )
  );
};

export default UserInfo;
