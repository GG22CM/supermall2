import {USER_LOGIN, PRODUCT_COUNT_INCR, APPEND_PRODUCT, PRODUCT_CHECKED_CHANGE} from './mutationsType'


export default  {
	[PRODUCT_COUNT_INCR](state, payload) {
		payload.count++
	},
	[APPEND_PRODUCT](state, payload) {

		state.products.push(payload)
	},
	[PRODUCT_CHECKED_CHANGE](state, payload) {
		payload.checked = !payload.checked
	},
	[USER_LOGIN](state, user) {
		state.user = user
	}
}
