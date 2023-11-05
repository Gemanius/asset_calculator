import styled from "styled-components";
import { Input as InputAtom } from "../../components/atoms/input/style";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.secondary};
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 64px;
`;

export const Input = styled(InputAtom)`
  height: 32px;
  width: 60%;
  @media screen and (min-width: 500px) {
    width: 300px;
  }
`;

export const UnderLineP = styled.p`
  color: blue;
  text-decoration: underline;
`;
