export type Methods = 'getAll' | 'get' | 'post' | 'put' | 'patch' | 'remove';

export type MethodsMap = {
  [key in Methods]: unknown;
};

export interface IApiCustomMethodOptions {
  url?: string;
}

abstract class Api<T> implements MethodsMap {
  getAll: (() => Promise<T[]> | undefined) | undefined;

  get: ((id: string) => Promise<T>) | undefined;

  post: ((model: unknown, customOptions?: IApiCustomMethodOptions) => Promise<unknown>) | undefined;

  put: ((model: unknown) => Promise<T>) | undefined;

  patch: ((model: unknown) => Promise<unknown>) | undefined;

  remove: ((id: string) => Promise<unknown>) | undefined;
}

export default Api;
