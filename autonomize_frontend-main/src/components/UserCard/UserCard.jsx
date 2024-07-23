import { useNavigate } from "react-router-dom";
import "./UserCard.css";
import { useSelector } from "react-redux";
import { selectUsername } from "../../store/features/currentUser";

const UserCard = ({ name, login, ...userData }) => {
  const username = useSelector(selectUsername);
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`/users/${username}/followers`);

  return (
    <div className="user-info-card">
      <div className="user-info-card__image-container">
        <img
          src={
            userData?.avatar_url ||
            "https://media.istockphoto.com/id/871752462/vector/default-gray-placeholder-man.jpg?s=612x612&w=0&k=20&c=4aUt99MQYO4dyo-rPImH2kszYe1EcuROC6f2iMQmn8o="
          }
          alt={userData.login}
          className="user-info-card__image"
        />
      </div>
      <div className="user-info-card__content">
        <header>
          <h4 className="user-info-card__name">
            {name} ({login})
          </h4>
          <button onClick={onClickHandler}>Followers</button>
        </header>
        {userData?.company && (
          <p className="user-info-card__desc">{userData?.company}</p>
        )}
        {userData?.location && (
          <p className="user-info-card__desc">{userData?.location}</p>
        )}
        {userData?.blog && (
          <p className="user-info-card__desc">{userData?.blog}</p>
        )}
      </div>
    </div>
  );
};

export default UserCard;
