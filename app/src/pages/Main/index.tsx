import React from "react";
import { CurrencyCardList } from "../../components/AssetsCard";
import { PageContainer } from "./styles";
import { useInitial } from "../../hooks/initial";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  useInitial();
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
