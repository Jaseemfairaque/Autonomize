import { useSelector } from "react-redux";
import "./SingleRepo.css";
import { selectCurrentRepo } from "../../store/features/currentUser";
import { useNavigate } from "react-router-dom";

const SingleRepo = () => {
  const currentRepo = useSelector(selectCurrentRepo);
  const navigate = useNavigate();

  return (
    <section className="single-repo-page">
      <div className="single-repo-page__sidebar">
        <div className="single-repo-page__sidebar__image-container">
          <img
            src={
              currentRepo.owner?.avatar_url ||
              "https://media.istockphoto.com/id/871752462/vector/default-gray-placeholder-man.jpg?s=612x612&w=0&k=20&c=4aUt99MQYO4dyo-rPImH2kszYe1EcuROC6f2iMQmn8o="
            }
            alt={currentRepo.name}
          />
        </div>
        <div className="single-repo-page__sidebar__topics">
          {currentRepo.topics.map((topic) => (
            <span className="single-repo-page__sidebar__single-topic">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className="single-repo-page__details">
        <div className="title">
          <p>{currentRepo?.language}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <h3>{currentRepo.name}</h3>
        <p>{currentRepo?.description}</p>
        <b>{(new Date(currentRepo?.created_at)).toDateString()}</b>
      </div>
    </section>
  );
};

export default SingleRepo;
