import axios, { AxiosResponse } from 'axios';
import { envVariables } from '@/utils';
import { handleResponse } from './handlers';

const BASE_URL = `${envVariables.MY_BASE_URL}/api/v1`;

const getAll = async <T>(resource: string): Promise<T[]> => {
  const response = await axios.get<T[], AxiosResponse<T[], unknown>>(`${BASE_URL}/${resource}`);
  return handleResponse<T>(response) as T[];
};

const get = async <T>(resource: string, id?: string): Promise<T> => {
  const response = await axios.get<T, AxiosResponse<T, unknown>>(
    `${BASE_URL}/${resource}${id ? `/${id}` : ''}`,
  );
  return handleResponse<T>(response) as T;
};

const post = async <T>(resource: string, model?: unknown) => {
  const response = await axios.post<T, AxiosResponse<T, unknown>>(`${BASE_URL}/${resource}`, model);
  return handleResponse<T>(response);
};

const put = async <T>(resource: string, model: unknown): Promise<T> => {
  const response = await axios.put<T, AxiosResponse<T, unknown>>(`${BASE_URL}/${resource}`, model);
  return handleResponse<T>(response) as T;
};

const patch = async <T>(resource: string, model: unknown) => {
  const response = await axios.patch<T, AxiosResponse<T, unknown>>(
    `${BASE_URL}/${resource}`,
    model,
  );
  return handleResponse<T>(response);
};

const remove = async <T>(resource: string, id: string) => {
  const response = await axios.delete(`${BASE_URL}/${resource}/${id}`);
  return handleResponse<T>(response);
};

const apiProvider = {
  getAll,
  get,
  post,
  put,
  patch,
  remove,
};

export default apiProvider;
