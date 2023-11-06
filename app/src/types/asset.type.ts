export type TAsset = {
  id: number;
  price: number;
  name: string; // I should make an enum for the price currencies
};

export type TUserAsset = TAsset & { amount: number };

export type TAppAsset = TAsset & { icon: string };

export type TUserAppAsset = TAppAsset & { amount: number };
