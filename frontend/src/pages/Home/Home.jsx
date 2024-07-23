import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { selectError } from "../../store/features/currentUser";

const Home = () => {
  const userError = useSelector(selectError);

  return (
    <div className="home-page__container">
      <h1>GitHub Explorer</h1>
      <p>
        Enter a GitHub username below to explore repositories and followers.
      </p>

      <SearchBar />
      {userError && (
        <p className="text-sm" style={{ color: "red" }}>
          {userError}
        </p>
      )}
    </div>
  );
};

export default Home;
