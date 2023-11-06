import { FC } from "react";
import { AssetMangerSection, SelfAssetItem, AssetAttrInput, SubmitAssetAction } from "./style";
import { TAsset, TUserAsset } from "../../types/asset.type";

type TProps = {
  isModification?: boolean;
  data?: TUserAsset;
};

export const AssetManager: FC<TProps> = ({ isModification, data }) => {
  return (
    <AssetMangerSection style={{ backgroundColor: "white" }}>
      <h1 style={{ margin: 0, padding: 0, color: "black" }}>Insert New Asset Information</h1>
      <SelfAssetItem>
        <div style={{ padding: 0, margin: 0, flex: 1 }}>
          <h6 style={{ color: "black", padding: 0, margin: 0 }}>name:</h6>
          <AssetAttrInput type="text" defaultValue={data?.name ? data.name : ""} />
        </div>
        <div style={{ padding: 0, margin: 0, flex: 1 }}>
          <h6 style={{ color: "black", padding: 0, margin: 0 }}>price:</h6>
          <AssetAttrInput type="number" defaultValue={data?.price ? data.price : ""} />
        </div>
        <div style={{ padding: 0, margin: 0, flex: 1 }}>
          <h6 style={{ color: "black", padding: 0, margin: 0 }}>amount:</h6>
          <AssetAttrInput type="number" defaultValue={data?.amount ? data.amount : ""} />
        </div>
      </SelfAssetItem>
      {isModification ? (
        <>
          <SubmitAssetAction style={{ border: "1px red solid" }}>Delete</SubmitAssetAction>
          <SubmitAssetAction style={{ border: "1px green solid" }}>Save</SubmitAssetAction>
        </>
      ) : (
        <SubmitAssetAction>Add to Assets</SubmitAssetAction>
      )}
    </AssetMangerSection>
  );
};
