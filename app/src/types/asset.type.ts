export type TCustomAsset = {
  id: number;
  price: number;
  name: string; // I should make an enum for the price currencies
  amount?: number;
};

export type TAppAsset = TCustomAsset & { icon: string };
