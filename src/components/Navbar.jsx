import React from "react";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../redux/userData/userDataSelectors";

const Navbar = () => {
  const user = useSelector(getUser);

  return (
    <div style={{ backgroundColor: "teal", padding: "10px 20px", display: "flex" }}>
      <Link to='/' className='btn'>
        <GrGithub /> GitHub Dashboard
      </Link>

      <div style={{ display: "flex", width: "100%" }}>
        <Link to='/repos' className='btn'>
          {`Repos ${user ? user?.public_repos : "0"}`}
        </Link>

        <Link to='/followers' className='btn'>
          {`Followers ${user ? user?.followers : "0"}`}
        </Link>

        <div>{`Following ${user ? user?.following : "0"}`}</div>
        <div>{`Gists ${user ? user?.public_gists : "0"}`}</div>
        {user && (
          <Link to={user && user.html_url} className='btn' target='new'>
            {`To ${user && user.login}'s gitHub page`}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
