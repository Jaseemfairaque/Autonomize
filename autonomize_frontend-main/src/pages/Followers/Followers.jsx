import { useDispatch, useSelector } from "react-redux";
import "./Followers.css";
import {
  getUserDataAPI,
  selectError,
  selectFollowers,
  selectUserData,
} from "../../store/features/currentUser";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import UserCard from "../../components/UserCard/UserCard";

const Followers = () => {
  const followers = useSelector(selectFollowers);
  const userError = useSelector(selectError);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (userError) return <Navigate to="/" replace />;

  const onClickCard = (followerUsername) => {
    dispatch(getUserDataAPI(followerUsername));
    navigate(`/users/${followerUsername}`);
  };

  return (
    <section className="followers-page">
      <UserCard {...userData} />

      <h3>{userData.name}'s followers</h3>
      <div className="followers-list">
        {followers.map(({ login, avatar_url }) => (
          <Card
            key={login}
            image={avatar_url}
            name={login}
            onClick={() => onClickCard(login)}
          />
        ))}
      </div>
    </section>
  );
};

export default Followers;
