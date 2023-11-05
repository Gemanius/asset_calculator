import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.secondary};
  color: black;
  font-weight: 900;
  &:hover {
    background-color: rgba(96, 107, 110, 0.8);
  }
`;
