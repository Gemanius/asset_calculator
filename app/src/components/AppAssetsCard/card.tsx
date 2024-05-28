import React, { FC, useState, memo } from "react";
import { CardStyles } from "./styles";
import { UserAssetValue } from "./userAssetValue";
import { AssetInput } from "./inputAsset";
import { TAppAsset } from "../../types/asset.type";

/// should pass the details using props
/// should restrict in by memo
const Card: FC<TAppAsset> = ({ amount, price, icon, name, id }) => {
  if (!amount) amount = 0;
  const [inputActivation, setInputActivation] = useState(false);
  const toggleInputActivation = () => setInputActivation((pre) => !pre);
  return (
    <CardStyles.CardContainer>
      <CardStyles.CardCurrencyInfo>
        <CardStyles.CardCurrencyIcon src={icon} />
        <div>
          <h1>{name.toUpperCase()}</h1>
          <h3>Value: {price}$</h3>
        </div>
      </CardStyles.CardCurrencyInfo>
      {!inputActivation && <UserAssetValue {...{ amount, price, toggleInputActivation }} />}
      {inputActivation && <AssetInput {...{ toggleInputActivation, id, amount, inputActivation }} />}
    </CardStyles.CardContainer>
  );
};

export default memo(Card);
