import {
	Notification
} from 'element'
import qs from 'qs'
import NProgress from 'nprogress'

// 弹出前判断是否有相同弹出框，若有则关闭它再弹出新的
let notifyInstance = null;
const resetNotify = (options) => {
	if (notifyInstance) {
		notifyInstance.close()
	}
	notifyInstance = Notification(options)
};
['error', 'success', 'info', 'warning'].forEach(type => {
	resetNotify[type] = options => {
		if (typeof options === 'string') {
			options = {
				message: options
			}
		}
		options.type = type
		return resetNotify(options)
	}
})


// 创建axios的一个实例
var instance = axios.create({
	baseURL: 'https://kshht.gzmsdw.cn/',
	timeout: 36000,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})

// 请求拦截器
instance.interceptors.request.use((config) => {
	NProgress.start();
	return config;
}, (error) => {
	return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
	NProgress.done();
	return response.data;
}, (error) => {
	if (error.toString().indexOf('timeout') != -1) {
		resetNotify({
			showClose: true,
			message: '请求接口超时，请联系管理人员。',
			type: 'error'
		});
	} else {
		resetNotify({
			showClose: true,
			message: '请求接口出错',
			type: 'error'
		});
	}
	return Promise.reject(error);
});

export default function(method, url, data = null) {
	method = method.toLowerCase();
	if (method == 'post') {
		return instance.post(url, qs.stringify(data))
	} else if (method == 'get') {
		return instance.get(url, {
			params: data
		})
	} else if (method == 'delete') {
		return instance.delete(url, {
			params: data
		})
	} else if (method == 'put') {
		return instance.put(url, data)
	} else {
		console.error('未知的method' + method)
		return false
	}
}
