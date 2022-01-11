/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from 'axios';

export function handleResponse<T>(response: AxiosResponse<T[] | T>) {
  // TODO: space for possible transformations, parsing, etc.
  return response.data;
}
