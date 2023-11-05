import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "50px")};
  height: ${(props) => (props.height ? props.height : "20px")};
  padding: 0px 4px 0px;
  border: 1px solid;
  border-radius: 8px;
  &:focus {
    background-color: #bfd7ed;
  }
`;
