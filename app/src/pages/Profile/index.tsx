import { FC } from "react";
import { Container, ProfileSection, SelfAssetItem, SelfAssetSection } from "./style";
import { useSelector } from "react-redux";
import { TAuthInfo } from "../../types/authInfo";
import { Navigate } from "react-router-dom";
import { SelfCreatedAssets } from "./selfCreatedAssetsList";
import { UserProfile } from "./profile";
import { AssetManager } from "./assetManager";

export const Proifle: FC = () => {
  const auth: TAuthInfo = useSelector((state: any) => state?.auth);
  const { username, accessToken } = auth;
  return (
    <Container>
      <UserProfile username={username} />
      <SelfCreatedAssets />
      <AssetManager />
    </Container>
  );
};
