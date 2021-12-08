import {userRequest} from './request'

import qs from 'qs'


export function requestLogin(username, password) {
	return userRequest({
		method: 'post',
		url: '/user/login',
		data: qs.stringify({//需要将参数序列化！不然穿不过去，序列化用qs模块的qs.stringify方法
			username: username,
			password: password
		}),

	})
}
