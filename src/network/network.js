import axios from 'axios'

function myaxios(option) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 100000,
    });

    // 添加请求拦截器
    instance.interceptors.request.use(config => {
        return config;
    });

    // 添加响应拦截器
    instance.interceptors.response.use(res => {
        return res.data.data || res.data.result || res.data
    });

    return instance(option)
}



export default myaxios