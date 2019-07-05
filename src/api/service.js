import axios from 'axios';

const local = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  // baseURL: "https://www.easy-mock.com/mock/5d1f0485b5f8726241d2fd99/example/", // api 的 base_url
  baseURL: "http://localhost:8081/", // api 的 base_url
  timeout: 20000 // 请求超时时间
});
const remote = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  // baseURL: "https://www.easy-mock.com/mock/5d1f0485b5f8726241d2fd99/example/", // api 的 base_url
  baseURL: "http://localhost:8081/", // api 的 base_url
  timeout: 20000 // 请求超时时间
});

service.interceptors.response.use(res=>{
    console.log('axios interceptors success');
    return res;
  },
  err=>{
    console.log('axios interceptors error',err);
    return err;
  });
export default {service,remote};