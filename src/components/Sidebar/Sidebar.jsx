import React from "react";
import UserInfo from "../../statics/icons/user-info.svg";
import CanvasLogo from "../../statics/icons/canvas-logo.svg";
import Folders from "../../statics/icons/tick.png";
import Personal from "../../statics/icons/personal.png";
import PlusCircle from "../../statics/icons/plus_circle_outline.png";
import QuestionMark from "../../statics/icons/question_mark.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasModal, setModal } from "../../redux/modals/actions";

function SidebarC() {
  const navigate = useNavigate();
  const roots = useSelector((state) => state.roots);
  const dispatch = useDispatch();

  const open = () => dispatch(setModal(true));
  const openCanvas = () => dispatch(setCanvasModal(true));

  return (
    <div
      className={"bg-red-250 h-screen sticky left-0 top-0"}
      style={{ width: "92px" }}
    >
      <div className={"flex items-center flex-col gap-5"}>
        <div onClick={open} className={"border-b-2 border-gray-700 py-8"}>
          <img
            src={UserInfo}
            className={
              "transition-all cursor-pointer active:opacity-70 hover:opacity-80"
            }
            alt="user information"
          />
        </div>
        <div onClick={() => navigate(`/`)}>
          <img
            src={Folders}
            className={
              "w-[50%] mx-auto cursor-pointer transition-all active:opacity-70 hover:opacity-80"
            }
            alt="root folders"
          />
        </div>
        <div onClick={() => navigate(`/${roots.root_folder[0].folder_id}`)}>
          <img
            src={CanvasLogo}
            className={
              "transition-all cursor-pointer active:opacity-70 hover:opacity-80"
            }
            alt="canvas"
          />
        </div>
        <div onClick={() => navigate(`/${roots.root_folder[1].folder_id}`)}>
          <img
            src={Personal}
            className={
              "w-[50%] mx-auto cursor-pointer active:opacity-70 hover:opacity-80"
            }
            alt="canvas"
          />
        </div>
        <div
          onClick={() => {
            navigate(`/test-yourself`);
          }}
        >
          <img
            src={QuestionMark}
            className={
              "transition-all cursor-pointer active:opacity-70 hover:opacity-80"
            }
            alt="canvas"
          />
        </div>
        <div onClick={openCanvas}>
          <img
            src={PlusCircle}
            className={
              "transition-all cursor-pointer active:opacity-70 hover:opacity-80"
            }
            alt="canvas"
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarC;
