import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../redux/userData/userDataSelectors";
import Card from "./Card";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const user = useSelector(getUser);
  return (
    user && (
      <div>
        <div>
          <Link to='/repos' className='btn'>
            Repos {user.public_repos}
          </Link>

          <Link to='/followers' className='btn'>
            Followers {user.followers}
          </Link>

          <Link to='/following' className='btn'>
            Following {user.following}
          </Link>

          <Link to='/gists' className='btn'>
            Gists {user.public_gists}
          </Link>

          <Link to={user.html_url} className='btn' target='new'>
            To <b>{user.login}</b>'s gitHub page
          </Link>
        </div>
        <Card user={user} />
      </div>
    )
  );
};

export default UserInfo;
