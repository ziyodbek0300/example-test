import React, {useState} from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import {setCanvasCoursesModal, setSyncCourses} from "../redux/modals/actions";
import canvasAuth from "../api/canvasAuth";
import {toast} from "react-toastify";

function CanvasCoursesModal() {
  const open = useSelector((state) => state.modals.canvas_courses_modal);
  const courses = useSelector((state) => state.modals.canvasCourses);
  const sync = useSelector((state) => state.modals.sync);
  const dispatch = useDispatch();
  // const onOpenModal = () => dispatch(setCanvasCoursesModal(true));
  const onCloseModal = () => dispatch(setCanvasCoursesModal(false));
  const [ids, setIds] = useState([]);

  const syncCourse = () => {
    const form = new FormData();
    form.append("course_ids", ids);

    dispatch(setSyncCourses(form));
    setTimeout(() => {
      sync === 200 ? toast("Sync success!") : toast("Sync failed!");
    }, 3000)
  }

  return (
    <div>
      <Modal
        styles={{ modal: { width: "700px", padding: "16px 32px" } }}
        open={open}
        onClose={onCloseModal}
      >
        <div className={"flex justify-between items-start pr-5 roboto-slab"}>
          <h2 className={"text-3xl font-bold mb-4"}>Configure</h2>
          <button
            onClick={syncCourse}
            className={
              "border-2 border-red-450 hover:bg-red-450 transition-all hover:text-white active:opacity-90 rounded px-2"
            }
          >
            Save
          </button>
        </div>
        <ul>
          <div className={"flex justify-between text-gray-450 roboto-slab border-b pb-3 mb-4"}>
            <div className={"flex gap-5"}>
              <p>Add</p>
              <p>Course</p>
            </div>
            <p className={"w-28 text-center"}>Term</p>
          </div>
          {courses.map((state) => {
            return (
              <div key={state.course_name} className={"pb-5 flex justify-between items-center"}>
                <div className={"flex gap-9"}>
                  <input type="radio" id={state.course_name} name={"s"} onChange={(e) => e.target.checked ? setIds([...ids, toString(state?.course_id)]) : setIds(ids)} />
                  <label htmlFor={state.course_name}>{state.course_name}</label>
                </div>
                <div>
                  <div className={"w-28 text-center"}>{state?.term ? state?.term : "-"}</div>
                </div>
              </div>
            );
          })}
        </ul>
      </Modal>
    </div>
  );
}

export default CanvasCoursesModal;
