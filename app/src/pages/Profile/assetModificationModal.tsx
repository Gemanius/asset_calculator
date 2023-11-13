import { FC } from "react";
import { Modal } from "../../components/atoms/modal/Modal";
import { AssetManager } from "./assetManager";
import { TCustomAsset } from "../../types/asset.type";

type TProps = {
  onClickBackdrop: () => void;
  data: TCustomAsset;
};

export const AssetModificationModal: FC<TProps> = ({ data, onClickBackdrop }) => {
  return (
    <Modal onClickBackDrop={onClickBackdrop}>
      <AssetManager isModification={true} data={data} onClickBackdrop={onClickBackdrop} />
    </Modal>
  );
};
