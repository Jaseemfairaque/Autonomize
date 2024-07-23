import "./ErrorPage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Layouts/Footer/Footer";
import Header from "../../components/Layouts/Header/Header";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className="error-page__container">
        <h2 className="">Oops! Something went wrong...</h2>
        <p>Please try again</p>
        <Link to="/">← Back to home</Link>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
