import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/userData/userDataOperations";
import { StyledInput } from "./Search.styled";
const Search = () => {
  const [queury, setQueury] = useState("");
  const dispatch = useDispatch();

  const onKeyDown = (e) => {
    if (e.key === "Enter") dispatch(fetchUserData(queury));
  };

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
