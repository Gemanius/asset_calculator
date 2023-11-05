import { FC } from "react";
import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 9990;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;
export const ModalChildren = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  margin: auto;
  z-index: 9991;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 12px;
  color: black;
`;
