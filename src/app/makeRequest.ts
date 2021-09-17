import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://3.36.122.92/';
export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  query?: { [key: string]: string | number | boolean | string[] };
}

const makeRequest = async <T>({
  url,
  method,
  headers,
  body,
  query,
}: ApiOption): Promise<T> => {
  let response = {} as AxiosResponse;
  try {
    const requestConfig: AxiosRequestConfig = {
      url,
      method,
      data: body,
      params: query,
    };
    requestConfig.headers = headers ? { ...headers } : {};
    // if (token) {
    //   requestConfig.headers.Authorization = `Bearer ${token}`;
    // }
    response = await axios.request<T>(requestConfig);
  } catch (error) {
    console.log(error);
    const err: AxiosError = error;
    const { response, request } = err;
    if (response) {
      const { status, data } = response;
      if (status >= 500) {
        throw new Error('server error');
      } else if (status >= 400) {
        throw new Error(data.message);
      }
    } else if (request) {
      throw new Error('server response not exist');
    } else {
      throw new Error('axios config error');
    }
  }
  return response.data;
};

export default makeRequest;
