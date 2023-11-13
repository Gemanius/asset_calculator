import { serverConfigs } from "../configs";
import { BaseRequestInterface } from "./baseRequest.interface";

const appAssetUrl = serverConfigs.SERVER_URL + serverConfigs.API_VERSION + "appAsset/";

export class GetAppAssetsApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor() {
    this.url = appAssetUrl;
    this.requestInit = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}

export enum AppAssetApiNames {
  GET_APP_ASSETS = "GetAppAssetsApi",
}
