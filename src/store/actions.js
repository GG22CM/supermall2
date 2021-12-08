import {USER_LOGIN, PRODUCT_COUNT_INCR, APPEND_PRODUCT} from './mutationsType'

import {requestLogin} from "network/requestForLogin";

import {setCookie, getCookie} from "common/util";

export default {
	addCartList({state, commit}, product) {
		return new Promise(resolve => {
			let oldProd = state.products.find(item => item.iid === product.iid)

			if(oldProd != null) {
				commit(PRODUCT_COUNT_INCR, oldProd)
				resolve('商品加1~~')
			}else {
				product.count = 1
				product.checked = true
				commit(APPEND_PRODUCT, product)
				resolve('成功添加到购物车！')
			}
		})
	},
	userLoginAction({state, commit}, payload) {
		return requestLogin(payload.username, payload.password)
			.then(res => {
				if(res.userId) {
					commit(USER_LOGIN, res)
					setCookie('user', JSON.stringify(res))
				}else {
					throw '登陆失败！'
				}
			})
	}
}
