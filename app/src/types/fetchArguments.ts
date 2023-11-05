type TBaseFecthArguments<T> = {
  url?: string;
  body?: T;
  headers?: any & {
    "Content-Type"?: string;
    authorization?: string;
  };
};

export type TGetFetchArguments = Pick<TBaseFecthArguments<null>, "url" | "headers">;
export type TPostFetchArguments<T> = TBaseFecthArguments<T>;
export type TPutFetchArguments<T> = TBaseFecthArguments<T>;
export type TPatchFetchArguments<T> = TBaseFecthArguments<T>;
export type TDeleteFetchArguments<T> = TBaseFecthArguments<T>;
