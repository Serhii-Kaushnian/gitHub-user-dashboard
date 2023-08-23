import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/userData/userDataSelectors";
import { Card } from "../";

const UserInfo = () => {
  const user = useSelector(getUser);

  return (
    user && (
      <>
        <Card user={user} />
      </>
    )
  );
};

export default UserInfo;
