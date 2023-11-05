import styled from "styled-components";
import { Button } from "../../components/atoms/button/style";
import { Input } from "../../components/atoms/input/style";

export const Container = styled.div`
  padding-top: 16px;
  padding-left: 8px;
  padding-right: 8px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const Sections = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const ProfileSection = styled(Sections)`
  margin: auto;
  width: auto;
  padding: 4px 32px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const SelfAssetSection = styled(Sections)`
  height: 100%;
  max-height: 250px;
  overflow-y: scroll;
  @media screen and (max-height: 350px) {
    max-height: 100px;
  }
`;
export const SelfAssetItem = styled.div`
  padding: 8px 8px;
  width: 92%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  margin: 16px auto;
`;
export const SelfAssetListItem = styled(SelfAssetItem)`
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const AssetViewButton = styled(Button)`
  height: 100%;
  border-radius: 6px;
  padding: 4px;
`;
export const SubmitAssetAction = styled(Button)`
  max-width: 200px;
  width: 50%;
  height: 35px;
`;

export const AssetMangerSection = styled(Sections)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
`;

export const AssetAttrInput = styled(Input)`
  padding-left: 4px;
  width: 80%;
  max-width: 150px;
  height: 30px;
`;
