import React, { useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CanvasImage from "../statics/icons/canvas-logo.svg";
import Plus from "../statics/icons/splus.svg";
import Tick from "../statics/icons/qwerr.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  canvasAuthAction,
  canvasCourses,
  setCanvasCoursesModal,
  setCanvasModal,
} from "../redux/modals/actions";
import constants from "../constants";
// import canvasAuth from "../api/canvasAuth";

function CanvasModal() {
  const openCanvas = useSelector((state) => state.modals.canvas_modal);
  const codeCanvas = useSelector((state) => state.modals.codeCanvas);
  // const status = useSelector((state) => state.modals.status);
  const dispatch = useDispatch();
  // const onOpenModal = () => dispatch(setCanvasModal(true));
  const onCloseModal = () => dispatch(setCanvasModal(false));

  useEffect(() => {
    if (codeCanvas !== null && codeCanvas !== "") {
      let data = new FormData();
      data.append("code", codeCanvas);
      data.append("is_auth_code", true);
      dispatch(canvasAuthAction(data));
    }
  }, [dispatch]);

  const authAction = () => {
    dispatch(canvasCourses());
    setTimeout(() => {
      dispatch(setCanvasModal(false));
      dispatch(setCanvasCoursesModal(true));
    }, 500);
  };

  return (
    <div>
      <Modal
        styles={{
          modal: { width: "600px", padding: "16px", minHeight: "600px" },
        }}
        open={openCanvas}
        onClose={onCloseModal}
      >
        <div>
          <h2 className={"text-3xl font-bold"}>Integrations</h2>
          <div
            className={
              "flex justify-between shadow-lg items-center p-4 mt-10 text-lg"
            }
          >
            <div className={"flex gap-4"}>
              <img src={CanvasImage} className={"w-16"} alt="canvas-logo" />
              <div>
                <p
                  className={"l font-bold mb-0"}
                  style={{ lineHeight: "20px" }}
                >
                  Canvas (USF) Canvas (USF)
                </p>
                <p className={"l mt-0"} style={{ lineHeight: "20px" }}>
                  Canvas is a web-based learning management system
                </p>
              </div>
            </div>
            <div>
              {codeCanvas !== null && codeCanvas !== "" ? (
                <button
                  onClick={authAction}
                  className={
                    "bg-blue-500 flex items-center gap-2 px-3 pr-5 py-1 text-white"
                  }
                >
                  <img
                    src={codeCanvas !== null && codeCanvas !== "" ? Tick : Plus}
                    className={"h-5"}
                    alt="plus"
                  />
                  {codeCanvas !== null && codeCanvas !== "" ? (
                    <span>Courses</span>
                  ) : (
                    <span>Add</span>
                  )}
                </button>
              ) : (
                <a
                  target={"_"}
                  href={`https://digitomy.instructure.com/login/oauth2/auth?client_id=219300000000000001&response_type=code&redirect_uri=${constants.url1}`}
                  className={
                    "bg-blue-500 flex items-center gap-2 px-3 pr-5 py-1 text-white"
                  }
                >
                  <img
                    src={codeCanvas !== null && codeCanvas !== "" ? Tick : Plus}
                    className={"h-5"}
                    alt="plus"
                  />
                  {codeCanvas !== null && codeCanvas !== "" ? (
                    <span>Configured</span>
                  ) : (
                    <span>Add</span>
                  )}
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CanvasModal;
