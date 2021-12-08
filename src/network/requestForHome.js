import {request} from './request'


export function  requestMultiData() {
	return request({
		url: '/home/multidata'
	})
}

export function requestGoodsList(type, page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
}
