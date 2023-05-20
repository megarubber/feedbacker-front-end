import axios from 'axios';
import AuthService from './auth';

const API_ENVS = {
    local: 'http://localhost:3000',
    production: '',
    development: ''
};

const httpClient = axios.create({
    baseURL: API_ENVS.local
});

httpClient.interceptors.response.use(() => response, (error) => {
  const canThrowAnError = error.request.status == 0 || error.request.status == 500;
  if(canThrowAnError) {
    throw new Error(error.message);
  }

  return error;
});

export default {
  auth: AuthService(httpClient)
};
