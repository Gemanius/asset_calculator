import { FC, useEffect, useState } from "react";
import { Container, Items } from "./style";
import { useSelector } from "react-redux";
import { TAppAsset } from "../../types/asset.type";
import { Modal } from "../atoms/modal/Modal";
import { useNavigate } from "react-router-dom";

export const TotalAssetsModal: FC = () => {
  const assets: TAppAsset[] = useSelector((state: any) => state.assets);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let result = 0;
    assets.forEach((elem) => {
      result = result + elem.amount * elem.price;
    });
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
          .filter((asset) => asset.amount > 0)
          .map((asset) => (
            <Items key={asset.name}>
              <div style={{ flex: 1 }}>{asset.name}</div>
              <div style={{ flex: 1 }}>Amount: {asset.amount}</div>
              <div style={{ flex: 1 }}>Total Price: {asset.amount * asset.price}</div>
            </Items>
          ))}
      </Container>
    </Modal>
  );
};
