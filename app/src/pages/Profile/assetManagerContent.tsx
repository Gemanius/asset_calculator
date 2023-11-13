import { FC, RefObject, memo } from "react";
import { TCustomAsset } from "../../types/asset.type";
import { AssetAttrInput, SelfAssetItem } from "./style";

type TProps = {
  data: undefined | TCustomAsset;
  // onChangeData: (key: keyof TCustomAsset, value: string) => void;
  nameRef: RefObject<HTMLInputElement>;
  amountRef: RefObject<HTMLInputElement>;
  priceRef: RefObject<HTMLInputElement>;
};

export const AssetManagerContent: FC<TProps> = ({ data, nameRef, amountRef, priceRef }) => {
  console.log(data);
  return (
    <>
      <h1 style={{ margin: 0, padding: 0, color: "black" }}>
        {data ? "Update Asset Informations" : "Insert New Asset Information"}
      </h1>
      <SelfAssetItem>
        <div style={{ padding: 0, margin: 0, flex: 1 }}>
          <h6 style={{ color: "black", padding: 0, margin: 0 }}>name:</h6>
          <AssetAttrInput
            ref={nameRef}
            type="text"
            defaultValue={data?.name ? data.name : ""}
            // onChange={(e) => onChangeData("name", e.target.value)}
          />
        </div>
        <div style={{ padding: 0, margin: 0, flex: 1 }}>
          <h6 style={{ color: "black", padding: 0, margin: 0 }}>price:</h6>
          <AssetAttrInput
            ref={priceRef}
            type="number"
            defaultValue={data?.price ? data.price : ""}
            // onChange={(e) => onChangeData("price", e.target.value)}
          />
        </div>
        <div style={{ padding: 0, margin: 0, flex: 1 }}>
          <h6 style={{ color: "black", padding: 0, margin: 0 }}>amount:</h6>
          <AssetAttrInput
            ref={amountRef}
            type="number"
            defaultValue={data?.amount ? data.amount : ""}
            // onChange={(e) => onChangeData("amount", e.target.value)}
          />
        </div>
      </SelfAssetItem>
    </>
  );
};
