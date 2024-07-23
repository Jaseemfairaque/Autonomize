import { useDispatch } from "react-redux";
import "./Header.css";
import { resetStore, resetUsername } from "../../../store/features/currentUser";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(resetStore());
    dispatch(resetUsername());
    navigate("/");
  };
  
  return (
    <header className="header__container">
      <h3>Git Explore</h3>
      <button onClick={onClickHandler}>Home</button>
    </header>
  );
};

export default Header;
