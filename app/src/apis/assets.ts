import { serverConfigs } from "../configs";
import { TCustomAsset } from "../types/asset.type";
import { BaseRequestInterface } from "./baseRequest.interface";

const assetUrl = serverConfigs.SERVER_URL + serverConfigs.API_VERSION + "asset/";
export class GetCustomAssetsApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor(accessToken: string) {
    this.url = assetUrl;
    this.requestInit = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    };
  }
}

export class UpdateCustomAssetApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor(data: TCustomAsset, accessToken: string) {
    this.url = assetUrl;
    this.requestInit = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };
  }
}
export class DeleteCustomAssetApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor(id: number, accessToken: string) {
    this.url = assetUrl + `${id}/`;
    this.requestInit = {
      method: "delete",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    console.log("------>", this.requestInit);
  }
}
export class AddCustomAssetApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor(data: Omit<TCustomAsset, "id">, accessToken: string) {
    this.url = assetUrl;
    this.requestInit = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };
  }
}

export enum CustomAssetApiNames {
  GET_CUSTOM_ASSET = "GetCustomAssetsApi",
  ADD_CUSTOM_ASSET = "AddCustomAssetApi",
  DELETE_CUSTOM_ASSET = "DeleteCustomAssetApi",
  UPDATE_CUSTOM_ASSET = "UpdateCustomAssetApi",
}
