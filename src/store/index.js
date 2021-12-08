import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
	products: [],
	user: {
		userId: '',
		userName: '登陆/注册',
		userPhone: '暂无绑定手机号',
		userScore: 0,
		userDiscountNumber: 0,
		userMoney: '0.00',
		password: ''
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
