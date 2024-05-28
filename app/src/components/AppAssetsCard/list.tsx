import React, { FC } from "react";
import { CurrencyCard } from ".";
import { IDataProps } from "../../types/PropsData";
import { CurrencyListContainer } from "./styles";
import { TAppAsset } from "../../types/asset.type";

const CurrencyList: FC<IDataProps<TAppAsset[]>> = (props) => {
  return (
    <CurrencyListContainer>
      {props.data.map((elem) => (
        <CurrencyCard {...elem} key={elem.id} />
      ))}
    </CurrencyListContainer>
  );
};

export default CurrencyList;
