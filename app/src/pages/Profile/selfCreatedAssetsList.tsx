import { FC, useEffect, useState } from "react";
import { AssetViewButton, SelfAssetListItem, SelfAssetSection } from "./style";
import { TAsset } from "../../types/asset.type";
import { AssetModificationModal } from "./assetModificationModal";
import { SelfCreatedAssetItem } from "./selfCreatedAssetItem";
import { userAssetsService } from "../../services";
import { useSelector } from "react-redux";
import { TAuthInfo } from "../../types/authInfo";
import { useRequest } from "../../hooks/useRequest";

export const SelfCreatedAssets: FC = () => {
  const auth: TAuthInfo = useSelector((state: any) => state.auth);
  const [modificationData, setModificationData] = useState<TAsset | null>(null);
  const [data, setData] = useState<any[]>([]);
  const getAssetRequest = useRequest<{}, TAsset[]>(userAssetsService.get, userAssetsService);
  const onClickViewButton = (data: TAsset) => {
    setModificationData(data);
  };
  const onClickModificationModalBackdrop = () => {
    setModificationData(null);
  };
  const getUserSelfCreatedAssets = async () => {
    const response = await getAssetRequest({ url: "", headers: { authorization: `Bearer ${auth.accessToken}` } });
    if (response?.data) {
      setData(response.data);
    }
  };
  useEffect(() => {
    getUserSelfCreatedAssets();
  }, []);
  return (
    <SelfAssetSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "black", margin: "8px 8px", paddingBottom: "16px" }}>Self Created Assets:</h1>
      </div>
      {data.length > 0 ? (
        data.map((elem) => <SelfCreatedAssetItem key={elem.name} data={elem} onClickViewButton={onClickViewButton} />)
      ) : (
        <h2>You have not inserted individual Assets ...</h2>
      )}
      {modificationData != null && (
        <AssetModificationModal onClickBackdrop={onClickModificationModalBackdrop} data={modificationData} />
      )}
    </SelfAssetSection>
  );
};
