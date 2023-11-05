import { FC, ReactNode } from "react";
import { ModalBackdrop, ModalChildren } from "./style";

type TProps = { children: ReactNode; onClickBackDrop: () => void };

export const Modal: FC<TProps> = ({ children, onClickBackDrop }) => {
  return (
    <>
      <ModalBackdrop onClick={onClickBackDrop} />
      <ModalChildren>{children}</ModalChildren>
    </>
  );
};
