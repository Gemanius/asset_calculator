import { FC, useEffect, useMemo, useState } from "react";
import { Container, Items } from "./style";
import { useSelector } from "react-redux";
import { Modal } from "../atoms/modal/Modal";
import { useNavigate } from "react-router-dom";
import { TAppAsset, TCustomAsset } from "../../types/asset.type";

export const TotalAssetsModal: FC = () => {
  const assets: TAppAsset[] = useSelector((state: any) => state.assets);
  const customAssets: TCustomAsset[] = useSelector((state: any) => state.customAssets);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const calculateAssets = useMemo(() => {
    let result = 0;
    assets.forEach((elem) => {
      if (elem?.amount) result = result + elem.amount * elem.price;
    });
    customAssets.forEach((elem) => {
      if (elem?.amount) result = result + elem.amount * elem.price;
    });
    return result;
  }, [assets, customAssets]);
  useEffect(() => {
    const result = calculateAssets;
    setTotal(result);
  }, [assets]);

  const onClickBackdrop = () => {
    navigate("/home");
  };
  return (
    <Modal onClickBackDrop={onClickBackdrop}>
      <Container>
        <h1 style={{ color: "black" }}>Your total assets price is: ${total} </h1>
        {assets
          .filter((asset) => {
            if (asset.amount) return asset?.amount > 0;
            return false;
          })
          .map((asset) => {
            if (asset?.amount)
              return (
                <Items key={asset.id}>
                  <div style={{ flex: 1 }}>{asset.name}</div>
                  <div style={{ flex: 1 }}>Amount: {asset.amount}</div>
                  <div style={{ flex: 1 }}>Total Price: {asset.amount * asset.price}</div>
                </Items>
              );
          })}
        {customAssets
          .filter((elem) => {
            if (elem.amount) return elem.amount > 0;
          })
          .map((asset) => {
            if (asset.amount)
              return (
                <Items key={asset.id}>
                  <div style={{ flex: 1 }}>{asset.name}</div>
                  <div style={{ flex: 1 }}>Amount: {asset.amount}</div>
                  <div style={{ flex: 1 }}>Total Price: {asset.amount * asset.price}</div>
                </Items>
              );
          })}
      </Container>
    </Modal>
  );
};
