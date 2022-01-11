import apiProvider from './provider';
import Api, { IApiCustomMethodOptions, Methods, MethodsMap } from './api';

export interface ApiCoreOptions {
  methods: Methods[];
  url: string;
  single?: string;
  plural?: string;
}

export class ApiCore<T> extends Api<T> {
  constructor(options: ApiCoreOptions) {
    super();

    const { methods, url } = options;

    const methodsMap: MethodsMap = {
      getAll: () => apiProvider.getAll<T>(url),
      get: (id: string) => apiProvider.get<T>(url, id),
      // Extend post to receive custom url or extra options
      post: (model: unknown, customOptions: IApiCustomMethodOptions | null = null) =>
        apiProvider.post(customOptions?.url || url, model),
      put: (model: unknown) => apiProvider.put<T>(url, model),
      patch: (model: unknown) => apiProvider.patch(url, model),
      remove: (id: string) => apiProvider.remove(url, id),
    };

    methods.forEach((method: Methods): void => {
      (this[method as keyof ApiCore<T>] as unknown) = methodsMap[method];
    });
  }
}
