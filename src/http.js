import http from 'axios'
import {Message} from 'element-ui'
import router from "@/router";

http.interceptors.request.use(request => {
    return request;
}, () => {
    Message.error({message: '请求超时！'})
})

http.interceptors.response.use(response => {
    if (response && response.status === 200) {
        if (response.data.status) {
            if (response.data.status != 200) {
                if (response.data.status == 401) {
                    Message.error({message: response.data.message})
                    router.replace("/login")
                    return
                }
                Message.error({message: response.data.message})
            }
        }
    }
    return response.data;
}, error => {
    alert(error)
    if (error.response.status == 504 || error.response.status == 404) {
        Message.error({message: '服务器开小差了!'})
    } else {
        if (error.data.message) {
            Message.error({message: error.data.message})
        } else {
            Message.error({message: '未知错误！'})
        }
    }
})

let prefix = process.env.NODE_ENV === 'production' ? '' : 'api'

export const $get = (url) => {
    return http.get(prefix + url);
}

export const $post = (url, params) => {
    return http({
        method: 'post',
        url: prefix + url,
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const $put = (url, params) => {
    return http({
        method: 'put',
        url: prefix + url,
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const $delete = (url) => {
    return http({
        method: 'delete',
        url: prefix + url
    });
}

export const $posts = (url, params) => {
    return http({
        method: 'post',
        url: prefix + url,
        data: params,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

export const $deletes = (url, params) => {
    return http({
        method: 'delete',
        url: prefix + url,
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}