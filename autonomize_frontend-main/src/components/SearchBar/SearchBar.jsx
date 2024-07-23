import { useNavigate } from "react-router";
import "./SearchBar.css";
import { useState } from "react";
import useIsValidUsername from "../../hooks/useIsValidUsername";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDataAPI,
  resetError,
  setUsername,
} from "../../store/features/currentUser";

const SearchBar = () => {
  const [inputUsername, setInputUsername] = useState("");
  const navigate = useNavigate();
  const isValidUsername = useIsValidUsername(inputUsername);

  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    const value = event.target.value.trim();
    if (value.length === 1) dispatch(resetError());
    setInputUsername(event.target.value.trim());
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!isValidUsername) return setInputUsername("");
    dispatch(setUsername(inputUsername));
    dispatch(getUserDataAPI(inputUsername));
    navigate(`/users/${inputUsername}`);
  };

  return (
    <form className="search-bar" onSubmit={onSubmitHandler}>
      <input
        type="text"
        pattern="^\s*[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}\s*$"
        onChange={inputChangeHandler}
        value={inputUsername}
        onInvalid={(e) =>
          e.target.setCustomValidity("Please enter a valid username")
        }
        onInput={(e) => e.target.setCustomValidity("")}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
