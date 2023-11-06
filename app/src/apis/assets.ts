import { serverConfigs } from "../configs";
import { BaseRequestInterface } from "./baseRequest.interface";

const assetUrl = serverConfigs.SERVER_URL + serverConfigs.API_VERSION + "asset/";
export class GetAssetsApi implements BaseRequestInterface {
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
