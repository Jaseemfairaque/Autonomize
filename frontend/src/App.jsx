import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layouts/Layout/Layout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Repositories from "./pages/Repositories/Repositories";
import Followers from "./pages/Followers/Followers";
import SingleRepo from "./pages/SingleRepo/SingleRepo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users/:username" element={<Repositories />} />
          <Route path="/users/:username/followers" element={<Followers />} />
          <Route path="/users/:username/:repoName" element={<SingleRepo />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
