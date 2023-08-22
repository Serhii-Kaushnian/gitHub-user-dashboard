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
        <Card user={user} />
      </div>
    )
  );
};

export default UserInfo;
