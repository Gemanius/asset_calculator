import { serverConfigs } from "../configs";
import { TAuthBody } from "../types/login";
import { BaseRequestInterface } from "./baseRequest.interface";
const userUrl = serverConfigs.SERVER_URL + serverConfigs.API_VERSION + "user/";

export class LoginApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor(data: TAuthBody) {
    this.url = userUrl + "login/";
    this.requestInit = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }
}

export class RegisterApi implements BaseRequestInterface {
  url: string;
  requestInit: RequestInit;
  constructor(data: TAuthBody) {
    this.url = userUrl + "create/";
    this.requestInit = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }
}

export enum UserApiNames {
  LOGIN = "LoginApi",
  REGISTER = "RegisterApi",
}
