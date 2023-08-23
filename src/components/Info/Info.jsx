import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, isError } from "../../redux/userData/userDataSelectors";
import { Card } from "../";
import { toast } from "react-toastify";
import { setError } from "../../redux/userData/userDataOperations";

const UserInfo = () => {
  const user = useSelector(getUser);
  const error = useSelector(isError);
  const dispatch = useDispatch();

  return (
    user && (
      <>
        <Card user={user} />
      </>
    )
  );
};

export default UserInfo;
