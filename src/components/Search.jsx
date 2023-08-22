import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/userData/userDataOperations";

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
      <div style={{ backgroundColor: "teal", padding: "10px 20px" }}>
        <input type='text' onKeyDown={onKeyDown} value={queury} onChange={onChange} />
      </div>
    </>
  );
};

export default Search;
