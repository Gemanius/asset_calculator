export interface IApiAssetsListResponse {
  crypto: {
    [key: string]: {
      name: string;
      icon_url: string;
      symbol: string;
    };
  };
  fiat: {
    [key: string]: string;
  };
}
