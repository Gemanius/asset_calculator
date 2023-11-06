import React, { useEffect } from "react";
import { CurrencyCardList } from "../../components/AppAssetsCard";
import { PageContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { GetAppAssetsApi } from "../../apis";
import { TAppAsset } from "../../types/asset.type";
import { EReduxUserAssetsActions } from "../../enum/redux-actions";

export const MainPage = () => {
  const [isLoading, request] = useRequest();
  const dispatch = useDispatch();
  const getAppAssets = async () => {
    const result = await request<TAppAsset[]>(new GetAppAssetsApi());
    if (result) {
      dispatch({ type: EReduxUserAssetsActions.UPDATE_RESOURCE_ASSETS, payload: result.data });
    }
  };
  useEffect(() => {
    getAppAssets();
  }, []);
  const props = useSelector((state: any) => state?.assets);
  return (
    <>
      <PageContainer>
        <CurrencyCardList data={props} />
      </PageContainer>
      <Outlet />
    </>
  );
};
