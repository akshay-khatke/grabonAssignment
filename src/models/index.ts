type Request = {
    get: (config: AxiosRequestConfig) => AxiosPromise<any>;
    post: (config: AxiosRequestConfig) => AxiosPromise<any>;
    put: (config: AxiosRequestConfig) => AxiosPromise<any>;
  };

type PostModel = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface ReduxModel {
    posts: Array<any>;

  }
  
export type {
    PostModel,
    ReduxModel,
    Request
}