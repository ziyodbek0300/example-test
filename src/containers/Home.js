import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Magnifier from "../statics/icons/magn-glass.svg";
import LogoMinimize from "../statics/logo/logo-minimize.svg";
import { getRootFS } from "../redux/roots/actions";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import BreadcrumbIcon from "../components/svg/BreadcrumbIcon";
import { setBRS } from "../redux/breadcrumb/actions";
import SettingsModal from "./SettingsModal";
import CanvasModal from "./CanvasModal";
import CanvasCoursesModal from "./CanvasCourses";
import Upload from "../statics/icons/upload.svg";
import CoolIcon from "../statics/icons/coolicon.svg";
import rootFolders from "../api/rootFolders";
import { searchFunc, setSearchText } from "../redux/search/actions";

function Home() {
  const param = useParams();
  const dispatch = useDispatch();
  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbItems);
  const search = useSelector((state) => state.search);
  const roots = useSelector((state) => state.roots);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleUploadFile = (e) => {
    const f_data = new FormData();
    f_data.append(
      "folder_id",
      param?.folder_id ? param.folder_id : roots[1].folder_id
    );
    f_data.append("file", e.target.files[0]);
    rootFolders.uploadFile(f_data).then((a) => {
      console.log(a);
    });
  };

  const handleCreateFolder = (e) => {
    e.preventDefault();
    const f_data = new FormData();
    f_data.append(
      "parent_folder_id",
      param?.folder_id ? param.folder_id : "01GDJTAXTKES93CZ59V9RDXGE0"
    );
    f_data.append("folder_name", e.target[0].value);
    rootFolders.createFolder(f_data).then((a) => {
      dispatch(getRootFS());
    });
  };

  const handleSearch = () => {
    const s_data = new FormData();
    s_data.append("query", search.searchText);

    dispatch(searchFunc(s_data));
    navigate(`/search/${search.searchText}`);
  };

  return (
    <div className={"flex"}>
      <Sidebar />
      <div className={"w-full"}>
        <div className={"border-b border-gray-300"}>
          <div
            className={
              "py-5 z-50 sticky top-0 bg-white/95 backdrop-blur-lg px-9 flex gap-10 justify-between items-start"
            }
          >
            <div>
              <img src={LogoMinimize} alt="logo" />
            </div>
            <div
              className={
                "border-2 flex items-center x p-1 overflow-hidden w-[80%] border-red-250 rounded-full pr-4"
              }
            >
              <div className={"w-full pr-3"}>
                <input
                  onKeyPress={(e) =>
                    e.code === "Enter" ? handleSearch() : console.info()
                  }
                  onInput={(e) => dispatch(setSearchText(e.target.value))}
                  value={search.searchText}
                  className={"p-2 pl-4 w-full outline-none"}
                  type="search"
                  name={"search"}
                  aria-label={"search"}
                  placeholder={"Search..."}
                />
              </div>
              <div className={"flex items-center "}>
                <select
                  name="source"
                  id="source"
                  className={"p-2 w-24 outline-none shadow-mi rounded"}
                >
                  <option value="source">Source</option>
                </select>
                <select
                  name="source"
                  id="source"
                  className={"p-2 w-24 outline-none shadow-mi ml-3 rounded"}
                >
                  <option value="type">Type</option>
                </select>
              </div>
              <div className={"w-20 flex justify-end items-center"}>
                <img
                  src={Magnifier}
                  alt="magnifier"
                  onClick={handleSearch}
                  className={"hover:opacity-80 active:opacity-70"}
                />
              </div>
            </div>
          </div>
          <div className={"flex justify-between items-center"}>
            <nav
              className="flex text-3xl pl-8 pb-5 max-w-7xl overflow-auto roboto-slab"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {breadcrumbs?.map((b) => {
                  return (
                    <li
                      key={b.index}
                      className="inline-flex items-center text-center"
                    >
                      <span
                        onClick={() => {
                          dispatch(setBRS(b));
                          if (b.folder_id !== "root") {
                            navigate(`/${b.folder_id}`);
                          } else {
                            navigate(`/`);
                          }
                        }}
                        className={
                          b?.title?.length <= 10
                            ? "inline-flex items-center cursor-pointer font-normal"
                            : "inline-flex items-center cursor-pointer font-normal text-sm"
                        }
                      >
                        {b.index !== 0 ? <BreadcrumbIcon /> : ""}
                        {b.title}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </nav>
            <div className={"pr-8 flex gap-3"}>
              <div
                className={
                  "relative cursor-pointer hover:opacity-80 active:opacity-70"
                }
              >
                <input
                  onChange={handleUploadFile}
                  type="file"
                  accept={".xls,.xlsx,.pdf,.png,.jpg,.csv"}
                  className={"absolute h-full w-full opacity-0"}
                />
                <img src={Upload} alt="upload svg" />
              </div>
              <div className={"relative"}>
                <img
                  src={CoolIcon}
                  onClick={() => setOpen(true)}
                  className={
                    "cursor-pointer hover:opacity-80 active:opacity-70"
                  }
                  alt="CoolIcon svg"
                />
                {open && (
                  <div
                    className={
                      "absolute border rounded shadow-lg p-4 pt-1 bg-white -left-64 top-[110%] w-72"
                    }
                  >
                    <div className={"relative pb-6"}>
                      <div
                        onClick={() => setOpen(false)}
                        className={
                          "top-0 rounded-full flex items-center justify-center right-0 cursor-pointer hover:bg-gray-500/90 active:bg-gray-500/80 h-6 w-6 bg-gray-500 text-white absolute"
                        }
                      >
                        <p className={"m-0 p-0"}>&times;</p>
                      </div>
                    </div>
                    <form onSubmit={handleCreateFolder}>
                      <h2 className={"text-2xl font-bold mb-4"}>
                        Create new folder
                      </h2>
                      <div className={"mb-3"}>
                        <label htmlFor="folder_name"></label>
                        <input
                          type="text"
                          placeholder={"Folder Name"}
                          className={
                            "outline-red-450 rounded p-1 w-full border border-red-250"
                          }
                        />
                      </div>
                      <div className={"text-right"}>
                        <button
                          type={"submit"}
                          className={
                            "bg-red-450 text-white py-1 px-4 h-9 rounded"
                          }
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <SettingsModal />
          <CanvasCoursesModal />
          <CanvasModal />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
