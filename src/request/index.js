import axios from 'axios'
import {
    message,
} from 'antd'

const isDev = process.env.NODE_ENV === 'development' ? true : false;

const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/250342' : '',

})

service.interceptors.request.use((config) => {
    config.data = Object.assign({}, config.data, {
        // authToken: window.localStorage.getItem('autoToken')
        authToken: 'testToken'
    })
    return config;
})

service.interceptors.response.use((resp) => {
    if (resp.data.code === 200) {
        message.success('请求成功', 0.5)
        return resp.data.data;
    } else {
        // 处理错误
        message.error('请求失败')
    }
})

export const getArticleList = (offset= 0, limited = 10) => {
    return service.post('/api/v1/articleList', {
        offset,
        limited,
    });
}