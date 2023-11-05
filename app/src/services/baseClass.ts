import { useDispatch } from "react-redux";
import { serverConfigs } from "../configs";
import {
  TDeleteFetchArguments,
  TPatchFetchArguments,
  TPostFetchArguments,
  TGetFetchArguments,
  TPutFetchArguments,
} from "../types/fetchArguments";
import { EReduxAuthActions } from "../enum/redux-actions";
import { TServerResponse } from "../types/serverResponse.type";

export class BaseFetchClass {
  readonly server_url: string;
  url_prefix?: string;
  defaultHeaders: object;
  constructor(url_prefix?: string) {
    this.server_url = `${serverConfigs["SERVER_URL"]}/${serverConfigs["API_VERSION"]}/`;
    url_prefix && (this.server_url = this.server_url + `${url_prefix}/`);
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }
  async get(data: TGetFetchArguments): Promise<Response> {
    let { url, headers } = data;
    url = url ? this.server_url + data?.url : this.server_url;
    return fetch(url, { method: "get", headers: { ...this.defaultHeaders, ...headers } });
  }
  async post<T>(data: TPostFetchArguments<T>): Promise<Response> {
    let { url, body, headers } = data;
    url = url ? this.server_url + data?.url : this.server_url;

    return fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: { ...this.defaultHeaders, ...headers },
    });
  }
  async put<T>(data: TPutFetchArguments<T>): Promise<Response> {
    let { url, body, headers } = data;
    url = url ? this.server_url + data?.url : this.server_url;

    return fetch(url, {
      method: "put",
      body: JSON.stringify(body),
      headers: { ...this.defaultHeaders, ...headers },
    });
  }
  async delete<T>(data: TDeleteFetchArguments<T>): Promise<Response> {
    let { url, body, headers } = data;
    url = url ? this.server_url + data?.url : this.server_url;

    return fetch(url, {
      method: "delete",
      body: JSON.stringify(body),
      headers: { ...this.defaultHeaders, ...headers },
    });
  }
  async patch<T>(data: TPatchFetchArguments<T>): Promise<Response> {
    let { url, body, headers } = data;
    url = url ? this.server_url + data?.url : this.server_url;

    return fetch(url, {
      method: "patch",
      body: JSON.stringify(body),
      headers: { ...this.defaultHeaders, ...headers },
    });
  }
}
