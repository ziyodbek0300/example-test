import {Route, Routes, useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { useState } from "react";
import FileView from "./FileView";
import Root from "./Root";
import FolderView from "./FolderView";
import RootWidthModal from "./RootWidthModal";
import QuizSide from "./QuizSide";
import DeckView from "./DeckView";
import Search from "./Search";
import QuizSolve from "./QuizSolve";
import {getCFile, getNestedFS} from "../redux/roots/actions";
import {useDispatch} from "react-redux";

function All() {
  const [tokenUser] = useState(
    localStorage.getItem("token") &&
      JSON.parse(localStorage.getItem("token")) !== undefined
  );
  const loading = false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getNested = (f_id, data_type, f_name) => {
    if (data_type === "folder") {
      dispatch(getNestedFS(f_id));
      navigate(`/${f_id}`);
    } else {
      dispatch(getCFile(f_id));
      navigate(`/fs/doc_view/${f_id}`);
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <h3 className={"text-center"}>loading...</h3>
        </div>
      ) : tokenUser ? (
        <div className="h-screen">
          <div>
            <Routes>
              <Route path={"/"} element={<Home />}>
                <Route path={"/"} element={<Root getNested={getNested} />} />
                <Route path={"a/:id"} element={<RootWidthModal />} />
                <Route path={"/:folder_id"} element={<FolderView getNested={getNested} />} />
                <Route path={"/fs/doc_view/:id"} element={<FileView />} />
                <Route path={"/test-yourself"} element={<QuizSide />} />
                <Route path={"/deckView"} element={<DeckView />} />
                <Route path={"/search/:query"} element={<Search />} />
                <Route path={"/quizSolve"} element={<QuizSolve />} />
              </Route>
            </Routes>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <Routes>
            <Route element={<Login />} path={"/"} />
            <Route element={<Login />} path={"*"} />
            <Route element={<Register />} path={"/register"} />
          </Routes>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default All;
