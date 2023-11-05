import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100vw;
  height: 70px;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 12px;
  box-shadow: 0px -8px 4px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const NavSections = styled(NavLink)<{ $needborder: boolean }>`
  height: 100%;
  color: black;
  border-right: ${(props) => (props?.$needborder ? "1px gray solid" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
