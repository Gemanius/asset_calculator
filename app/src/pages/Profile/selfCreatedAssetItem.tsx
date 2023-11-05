import { FC } from "react";
import { TAsset } from "../../types/asset.type";
import { AssetViewButton, SelfAssetListItem } from "./style";

type TProps = {
  data: TAsset;
  onClickViewButton: (data: TAsset) => void;
};

export const SelfCreatedAssetItem: FC<TProps> = ({ data, onClickViewButton }) => {
  const { name, price, amount } = data;
  return (
    <SelfAssetListItem>
      <div style={{ padding: 0, margin: 0 }}>
        <h6 style={{ color: "black", padding: 0, margin: 0 }}>name:</h6>
        <h2 style={{ color: "black", padding: 0, margin: 0 }}>{name}</h2>
      </div>
      <div style={{ padding: 0, margin: 0 }}>
        <h6 style={{ color: "black", padding: 0, margin: 0 }}>price:</h6>
        <h2 style={{ color: "black", padding: 0, margin: 0 }}>{price}</h2>
      </div>
      <div style={{ padding: 0, margin: 0 }}>
        <h6 style={{ color: "black", padding: 0, margin: 0 }}>amount:</h6>
        <h2 style={{ color: "black", padding: 0, margin: 0 }}>{amount}</h2>
      </div>
      <AssetViewButton onClick={() => onClickViewButton(data)}>view</AssetViewButton>
    </SelfAssetListItem>
  );
};
