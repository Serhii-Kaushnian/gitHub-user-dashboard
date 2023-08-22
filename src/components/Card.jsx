import React from "react";
import { Link } from "react-router-dom";
const Card = ({ user }) => {
  return (
    user && (
      <div>
        <img src={user.avatar_url} alt='user avatar' />
        <p>Login: {user.login}</p>
        <p>Name: {user.name}</p>
        <p>Location: {user.location}</p>
        {user.email && <p>E-Mail: {user.email}</p>}
        {user.blog && (
          <p>
            Blog:{" "}
            <Link to={user.blog} target='new'>
              {user.blog}
            </Link>
          </p>
        )}
      </div>
    )
  );
};

export default Card;
