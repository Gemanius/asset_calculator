import { FC, memo } from "react";
import { ProfileSection } from "./style";

type TProps = {
  username: string;
};

export const UserProfile: FC<TProps> = memo(({ username }) => {
  return (
    <ProfileSection>
      <h4 style={{ color: "black" }}>Loged in as:</h4>
      <h2 style={{ fontWeight: 800 }}>{username}</h2>
    </ProfileSection>
  );
});
