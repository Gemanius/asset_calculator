import React, { FC } from "react";
import { TAppAsset } from "../../types/asset.type";
import { CurrencyCard } from ".";
import { IDataProps } from "../../types/PropsData";
import { CurrencyListContainer } from "./styles";

const CurrencyList: FC<IDataProps<TAppAsset[]>> = (props) => {
  return (
    <CurrencyListContainer>
      {props.data.map((elem) => (
        <CurrencyCard {...elem} key={elem.name} />
      ))}
    </CurrencyListContainer>
  );
};

export default CurrencyList;
