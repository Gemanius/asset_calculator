import { FC, useState } from "react";
import { Modal } from "../atoms/modal/Modal";
import { Outlet, useLocation } from "react-router-dom";
import { NavContents } from "./NavContents";

export const BottomNavBar: FC = () => {
  const location = useLocation();
  const [showedFirstTimeModal, setShowedFirstTimeModal] = useState(true);
  const onClickFirstTimeModalBackDrop = () => {
    setShowedFirstTimeModal((pre) => !pre);
  };

  return (
    <>
      {location.pathname == "/" && showedFirstTimeModal && (
        <Modal onClickBackDrop={onClickFirstTimeModalBackDrop}>
          <p> this is first time modal</p>
          <p> should be designed later ...</p>
        </Modal>
      )}
      <Outlet />
      <NavContents />
    </>
  );
};
