import axios from 'axios';
import {Const} from '.';
import authService from '../service/authService';

class ServiceHandle {
  constructor() {
    this.api = axios.create({
      baseURL: Const.API.BaseURL,
      timeout: 20000,
      header: {
        'content-type': 'application/json',
      },
    });

    // Add a request interceptor
    this.api.interceptors.request.use(
      function (config) {
        config.headers.api_key = authService.getApiKeyLocalStorage();

        // ignore urls
        if(config.url.endsWith('/login')){
          delete config.headers.api_key;
        }
        return config;
      },
      function (error) {
        console.log(error.toJSON());
        // Do something with request error
        return Promise.reject(error);
      },
    );
  }

  get(...arg) {
    return this.api.get(...arg);
  }

  post(...arg) {
    return this.api.post(...arg);
  }

  delete(...arg) {
    return this.api.delete(...arg);
  }

  put(...arg) {
    return this.api.put(...arg);
  }
  patch(...arg) {
    return this.api.patch(...arg);
  }
}

export default new ServiceHandle();

// import {create} from 'apisauce';
// import {Const} from '.';

// const api = create({
//   timeout: 20000,
//   baseURL: Const.API.BaseURL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: false,
// });

// const returnData = (response) => {
//   if (response.status) {
//     if (response.status === 200) {
//       return {
//         data: response.data,
//         headers: response.headers,
//         ok: true,
//       };
//     } else if (response.status === 401) {
//       return {
//         ok: false,
//         error: 'phiên đăng nhập hết hạn',
//       };
//     } else {
//       return {
//         ok: false,
//         error: response.data.errors,
//       };
//     }
//   } else {
//     return {
//       ok: false,
//       error: 'network error',
//     };
//   }
// };

// const setHeader = (apiKey) => {
//   api.setHeader('api_key', apiKey);
// };

// const get = async (url, params) => {
//   const response = await api.get(url, params);
//   return returnData(response);
// };
// const post = async (url, params) => {
//   const response = await api.post(url, params);
//   return returnData(response);
// };
// const put = async (url, params) => {
//   const response = await api.put(url, params);
//   return returnData(response);
// };
// const patch = async (url, params) => {
//   const response = await api.patch(url, params);
//   return returnData(response);
// };
// const deleteApi = async (url, params) => {
//   const response = await api.delete(url, params);
//   return returnData(response);
// };

// export {setHeader, get, post, put, patch, deleteApi};
