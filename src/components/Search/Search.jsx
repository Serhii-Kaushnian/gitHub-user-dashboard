import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, setError } from "../../redux/userData/userDataOperations";
import { StyledInput } from "./Search.styled";
import { isError } from "../../redux/userData/userDataSelectors";
import { toast } from "react-toastify";

const Search = () => {
  const [queury, setQueury] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(isError);
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchUserData(queury));
    }
  };

  useEffect(() => {
    if (error !== null) {
      dispatch(setError(true));
      toast(`There is no such user as ${queury}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setQueury("");
    }
  }, [dispatch, error, queury]);

  const onChange = (event) => {
    setQueury((prev) => (prev = event.target.value));
  };
  return (
    <>
      <StyledInput
        type='text'
        onKeyDown={onKeyDown}
        value={queury}
        onChange={onChange}
        placeholder='Enter name here'
      />
    </>
  );
};

export default Search;
