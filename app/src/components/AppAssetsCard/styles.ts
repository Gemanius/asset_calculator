import styled from "styled-components";
import { Button } from "../atoms/button/style";

const CardContainer = styled.div`
  width: 40%;
  height: 160px;
  padding: 4px 8px 4px;
  margin: 0;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 460px) {
    width: 90%;
    margin: auto;
    height: 100px;
  }
`;

const CardCurrencyIcon = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 12%;
  border: 0.5px solid;
  @media only screen and (max-width: 320px) {
    width: 40px;
    height: 30px;
  }
  @media only screen and (min-width: 320px) {
    width: 60px;
    height: 40px;
  }
  @media only screen and (min-width: 720px) {
    width: 100px;
    height: 75px;
  }
`;
const CardCurrencyInfo = styled.div`
  width: 100%;
  height: 50%;
  margin: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const ClientInfoDeactiveChange = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ClientInfoActiveChange = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const CurrencyAmount = styled.div`
  padding-top: 16px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CardStyles = {
  CardContainer,
  CardCurrencyIcon,
  CardCurrencyInfo,
  ClientInfoDeactiveChange,
  ClientInfoActiveChange,
  SubmitButton,
  CurrencyAmount,
};

/// list styles
export const CurrencyListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
`;

export const UserInfo = styled.div``;
