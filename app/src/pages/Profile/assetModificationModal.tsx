import { FC } from "react";
import { Modal } from "../../components/atoms/modal/Modal";
import { AssetManager } from "./assetManager";
import { TUserAsset } from "../../types/asset.type";

type TProps = {
  onClickBackdrop: () => void;
  data: TUserAsset;
};

export const AssetModificationModal: FC<TProps> = ({ data, onClickBackdrop }) => {
  return (
    <Modal onClickBackDrop={onClickBackdrop}>
      <AssetManager isModification={true} data={data} />
    </Modal>
  );
};
