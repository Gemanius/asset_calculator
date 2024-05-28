import { FC, useRef } from "react";
import { AssetMangerSection, SubmitAssetAction } from "./style";
import { TCustomAsset } from "../../types/asset.type";
import { useRequest } from "../../hooks/useRequest";
import { useDispatch, useSelector } from "react-redux";
import { TCustomAssetActions } from "../../store/actions/customAsset";
import { EReduxCustomAssetActions } from "../../enum/redux-actions";
import { AssetManagerContent } from "./assetManagerContent";
import { TAuthInfo } from "../../types/authInfo";
import {
  addCustomAssetValidation,
  deleteCustomAssetValidation,
  updateCustomAssetValidation,
} from "../../utils/validations";
import { AddCustomAssetApi, CustomAssetApiNames, DeleteCustomAssetApi, UpdateCustomAssetApi } from "../../apis";

type TProps = {
  isModification?: boolean;
  data?: TCustomAsset;
  onClickBackdrop?: () => void;
};

export const AssetManager: FC<TProps> = (props) => {
  const dispatch = useDispatch();
  const [isLoading, request] = useRequest();
  // const [data, setData] = useState<TCustomAsset | undefined>(props.data);
  const auth: TAuthInfo = useSelector((state: any) => state?.auth);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  // const onChangeData = useCallback((key: keyof TCustomAsset, value: any) => {
  //   setData((preState: any) => ({
  //     ...preState,
  //     [key]: value,
  //   }));
  // }, []);
  if (props.isModification && props?.data) {
    const onClickBackdrop = props.onClickBackdrop as () => void;
    const onClickSaveButton = async () => {
      const data = {
        name: nameRef.current?.value,
        price: priceRef.current?.value,
        amount: amountRef.current?.value,
        id: props.data?.id,
      } as unknown as TCustomAsset;
      const isValidated: boolean = updateCustomAssetValidation(data);
      if (isValidated) {
        const response = await request(new UpdateCustomAssetApi(data, auth?.accessToken));
        if (response) dispatch<TCustomAssetActions>({ type: EReduxCustomAssetActions.UPDATE, payload: data });
        onClickBackdrop();
      }
    };
    const onClickDeleteButton = async () => {
      const assetId = props.data?.id as number;
      const isValidated = deleteCustomAssetValidation(assetId);
      if (isValidated) {
        const response = await request(new DeleteCustomAssetApi(assetId, auth.accessToken));
        if (response) dispatch<TCustomAssetActions>({ type: EReduxCustomAssetActions.REMOVE, payload: assetId });
        onClickBackdrop();
      }
    };
    return (
      <AssetMangerSection style={{ backgroundColor: "white" }}>
        <AssetManagerContent data={props.data} nameRef={nameRef} amountRef={amountRef} priceRef={priceRef} />
        <SubmitAssetAction style={{ border: "1px red solid" }} onClick={onClickDeleteButton}>
          {isLoading == CustomAssetApiNames.DELETE_CUSTOM_ASSET ? "Loading ..." : "Delete"}
        </SubmitAssetAction>
        <SubmitAssetAction style={{ border: "1px green solid" }} onClick={onClickSaveButton}>
          {isLoading == CustomAssetApiNames.UPDATE_CUSTOM_ASSET ? "Loading ..." : "Save"}
        </SubmitAssetAction>
      </AssetMangerSection>
    );
  }
  const onClickAddButton = async () => {
    const data = {
      name: nameRef.current?.value,
      price: priceRef.current?.value,
      amount: amountRef.current?.value,
    } as unknown as TCustomAsset;
    const isValidated = addCustomAssetValidation(data);
    if (isValidated) {
      const response = await request<TCustomAsset & { updatedAt: Date; createdAt: Date }>(
        new AddCustomAssetApi(data, auth.accessToken)
      );
      if (response && response?.data) {
        const { createdAt, updatedAt, ...asset } = response.data;
        dispatch<TCustomAssetActions>({ type: EReduxCustomAssetActions.ADD, payload: asset });
        if (nameRef.current) nameRef.current.value = "";

        if (amountRef.current) amountRef.current.value = "";

        if (priceRef.current) priceRef.current.value = "";
      }
    }
  };

  return (
    <AssetMangerSection style={{ backgroundColor: "white" }}>
      <AssetManagerContent data={props.data} nameRef={nameRef} amountRef={amountRef} priceRef={priceRef} />
      <SubmitAssetAction onClick={onClickAddButton}>
        {isLoading == CustomAssetApiNames.ADD_CUSTOM_ASSET ? "Loading ..." : "Add to Assets"}
      </SubmitAssetAction>
    </AssetMangerSection>
  );
};
