export type TAsset = {
  id: number;
  price: number;
  name: string; // I should make an enum for the price currencies
  amount: number;
};

export type TAppAsset = TAsset & { icon: string };
