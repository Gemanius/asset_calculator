import { FC, useEffect, useState } from "react";
import { AssetViewButton, SelfAssetListItem, SelfAssetSection } from "./style";
import { TAsset, TUserAsset } from "../../types/asset.type";
import { AssetModificationModal } from "./assetModificationModal";
import { SelfCreatedAssetItem } from "./selfCreatedAssetItem";
import { useSelector } from "react-redux";
import { TAuthInfo } from "../../types/authInfo";
import { useRequest } from "../../hooks/useRequest";
import { GetAssetsApi } from "../../apis";

export const SelfCreatedAssets: FC = () => {
  const auth: TAuthInfo = useSelector((state: any) => state.auth);
  const [modificationData, setModificationData] = useState<TUserAsset | null>(null);
  const [data, setData] = useState<TUserAsset[]>([]);
  const [isRequestLoading, request] = useRequest();
  const onClickViewButton = (data: TUserAsset) => {
    setModificationData(data);
  };
  const onClickModificationModalBackdrop = () => {
    setModificationData(null);
  };
  const getUserSelfCreatedAssets = async () => {
    console.log(auth.accessToken);
    const response = await request<TUserAsset[]>(new GetAssetsApi(auth.accessToken));
    if (response?.data) {
      setData(response.data);
    }
  };
  useEffect(() => {
    getUserSelfCreatedAssets();
  }, []);

  return isRequestLoading ? (
    <>Loading ....</>
  ) : (
    <SelfAssetSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "black", margin: "8px 8px", paddingBottom: "16px" }}>Self Created Assets:</h1>
      </div>
      {data.length > 0 ? (
        data.map((elem) => <SelfCreatedAssetItem key={elem.name} data={elem} onClickViewButton={onClickViewButton} />)
      ) : (
        <h2>You have not inserted individual Assets ...</h2>
      )}
      {modificationData && (
        <AssetModificationModal onClickBackdrop={onClickModificationModalBackdrop} data={modificationData} />
      )}
    </SelfAssetSection>
  );
};
