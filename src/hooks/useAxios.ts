import axios, {AxiosInstance} from 'axios';
import {API_URL, API_KEY} from '@env';

export default function useAxios() {
  const instance: AxiosInstance = axios.create({
    baseURL: API_URL,
  });

  instance.interceptors.request.use(config => {
    config.params = {...config.params, apiKey: API_KEY};
    return config;
  });

  return instance;
}
