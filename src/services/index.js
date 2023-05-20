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

export default {
    auth: AuthService(httpClient)
}
