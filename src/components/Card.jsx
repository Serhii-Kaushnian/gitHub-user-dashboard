import React from "react";
import { Link } from "react-router-dom";
const Card = ({ user }) => {
  return (
    user && (
      <div style={{ backgroundColor: "orangered" }}>
        <img src={user.avatar_url} alt='user avatar' />
        {user.login && <p>Login: {user.login}</p>}
        {user.name && <p>Name: {user.name}</p>}
        {user.location && <p>Location: {user.location}</p>}
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
