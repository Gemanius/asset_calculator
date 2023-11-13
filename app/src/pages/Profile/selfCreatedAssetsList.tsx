import { FC, useEffect, useState } from "react";
import { AssetViewButton, SelfAssetListItem, SelfAssetSection } from "./style";
import { AssetModificationModal } from "./assetModificationModal";
import { SelfCreatedAssetItem } from "./selfCreatedAssetItem";
import { useDispatch, useSelector } from "react-redux";
import { TAuthInfo } from "../../types/authInfo";
import { useRequest } from "../../hooks/useRequest";
import { CustomAssetApiNames, GetCustomAssetsApi } from "../../apis";
import { TCustomAsset } from "../../types/asset.type";
import { TCustomAssetActions } from "../../store/actions/customAsset";
import { EReduxCustomAssetActions } from "../../enum/redux-actions";

export const SelfCreatedAssets: FC = () => {
  const auth: TAuthInfo = useSelector((state: any) => state.auth);
  const customAssets: TCustomAsset[] = useSelector((state: any) => state.customAssets);
  const dispatch = useDispatch();
  const [modificationData, setModificationData] = useState<TCustomAsset | null>(null);
  const [isRequestLoading, request] = useRequest();
  const onClickViewButton = (data: TCustomAsset) => {
    setModificationData(data);
  };
  const onClickModificationModalBackdrop = () => {
    setModificationData(null);
  };
  const getUserSelfCreatedAssets = async () => {
    const response = await request<[TCustomAsset & { createdAt: Date; updatedAt: Date }]>(
      new GetCustomAssetsApi(auth.accessToken)
    );
    if (response?.data) {
      const assets = response.data.map((elem) => {
        const { createdAt, updatedAt, ...assetData } = elem;
        return assetData;
      });
      dispatch<TCustomAssetActions>({ type: EReduxCustomAssetActions.SET_ALL, payload: assets });
    }
  };
  useEffect(() => {
    getUserSelfCreatedAssets();
  }, []);

  return isRequestLoading == CustomAssetApiNames.GET_CUSTOM_ASSET ? (
    <>Loading ....</>
  ) : (
    <SelfAssetSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "black", margin: "8px 8px", paddingBottom: "16px" }}>Self Created Assets:</h1>
      </div>
      {customAssets.length > 0 ? (
        customAssets.map((elem) => (
          <SelfCreatedAssetItem key={elem.name} data={elem} onClickViewButton={onClickViewButton} />
        ))
      ) : (
        <h2>You have not inserted individual Assets ...</h2>
      )}
      {modificationData && (
        <AssetModificationModal onClickBackdrop={onClickModificationModalBackdrop} data={modificationData} />
      )}
    </SelfAssetSection>
  );
};
