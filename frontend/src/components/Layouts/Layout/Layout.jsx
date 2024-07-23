import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";
import { useSelector } from "react-redux";
import {
  selectUserLoading,
  selectUsername,
} from "../../../store/features/currentUser";
import { useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  const isLoading = useSelector(selectUserLoading);
  const username = useSelector(selectUsername);

  // useEffect(() => {
  //   if (!username && location.pathname !== "/") {
  //     navigate("/");
  //   }
  // }, [location.pathname]);

  if (!username && location.pathname !== "/")
    return <Navigate to="/" replace />;

  const Loading = () => (
    <div className="layout-loading">
      <h3>Loading...</h3>
    </div>
  );

  return (
    <>
      <Header />
      {isLoading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Layout;
