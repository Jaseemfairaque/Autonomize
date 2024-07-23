import { useDispatch, useSelector } from "react-redux";
import "./Repositories.css";
import {
  selectError,
  selectRepos,
  selectUserData,
  selectUsername,
  setCurrentRepo,
} from "../../store/features/currentUser";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import UserCard from "../../components/UserCard/UserCard";

const Repositories = () => {
  const repos = useSelector(selectRepos);
  const userError = useSelector(selectError);
  const userData = useSelector(selectUserData);
  const username = useSelector(selectUsername);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (userError) return <Navigate to="/" replace />;

  const onClickCardHandler = (repoName) => {
    dispatch(setCurrentRepo(repoName));
    navigate(`/users/${username}/${repoName}`);
  };
  return (
    <section className="repositories-page">
      <UserCard {...userData} />

      <h3>{userData.name || userData.login}'s repositories</h3>
      <div className="repositories-list">
        {repos.map(({ name, description, owner: { avatar_url: image } }) => (
          <Card
            key={name}
            image={image}
            name={name}
            description={description}
            onClick={() => onClickCardHandler(name)}
          />
        ))}
      </div>
    </section>
  );
};

export default Repositories;
