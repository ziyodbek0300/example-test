import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import { getRootFS } from "../redux/roots/actions";
import Root from "./Root";
import { setCanvasModal, setCodeCanvas } from "../redux/modals/actions";

function RootWidthModal() {
  const codeCanvas = useSelector((state) => state.modals.codeCanvas);
  const location = useLocation();
  const plCode = location.search.slice(6, location.search.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCanvasModal(plCode || false));
    dispatch(setCodeCanvas(plCode));
  }, [dispatch, plCode]);

  return (
    <>
      <Root />
    </>
  );
}

export default RootWidthModal;
