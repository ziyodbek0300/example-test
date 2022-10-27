import React, { useEffect, useRef } from "react";
import Circle from "../statics/icons/circle.svg";
import Camera from "../statics/icons/camera.svg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/modals/actions";

function SettingsModal() {
  const open = useSelector((state) => state.modals.isOpen);
  const dispatch = useDispatch();
  // const onOpenModal = () => dispatch(setModal(true));
  const onCloseModal = () => dispatch(setModal(false));

  return (
    <div>
      <Modal
        styles={{ modal: { width: "700px", padding: "16px 32px" } }}
        open={open}
        onClose={onCloseModal}
      >
        <h2 className={"text-3xl font-bold mb-4"}>Settings</h2>
        <div className={"flex justify-between mb-5 text-lg"}>
          <div>
            <p className={"text-lg font-semibold"}>Profile Picture</p>
            <div className={"relative h-40 w-40"}>
              <img src={Circle} className={"absolute"} alt="circle" />
              <img
                src={Camera}
                className={"absolute left-7 top-10"}
                alt="camera"
              />
            </div>
          </div>
          <div className={"w-[70%] pt-10"}>
            <ul className={"list-disc pl-8"}>
              <li>Photo must be either JPG or PNG</li>
              <li>File size must be 2MB or less</li>
              <li>
                Minimum image size of 250 x 250 pixels<sup>***</sup>
              </li>
            </ul>
            <div className={"text-center"}>
              <button
                className={"bg-cyan-250 text-lg py-1 px-4 rounded-lg my-4"}
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>
        <div className={"text-lg"}>
          <div className={"mb-5 flex justify-between items-end"}>
            <div>
              <p className="text-lg font-semibold mb-2 text-lg">Name</p>
              <input
                type="text"
                className={"ml-2 text-placeholder text-lg"}
                placeholder={"Userfirst Userlast"}
              />
            </div>
            <div>
              <span className={"text-blue-400"}>Edit</span>
            </div>
          </div>
          <div className={"mb-5 flex justify-between items-end"}>
            <div>
              <p className="text-lg font-semibold mb-2 text-lg">Add Account</p>
              <input
                type="email"
                className={"ml-2 text-placeholder text-lg"}
                placeholder={"useremail@email.com"}
              />
            </div>
            <div>
              <span className={"text-blue-400"}>Edit</span>
            </div>
          </div>
          <div className={"mb-5 flex justify-between items-end"}>
            <div>
              <p className="text-lg font-semibold mb-2 text-lg">Password</p>
              <input
                type="password"
                className={"ml-2 text-placeholder text-lg"}
                placeholder={"*********"}
              />
            </div>
            <div>
              <span className={"text-blue-400"}>Edit</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SettingsModal;
