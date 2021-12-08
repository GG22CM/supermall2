import Vue from 'vue'
import App from './App.vue'

import router from "./router";
import store from "./store"

import {toast} from 'components/common/toastComponent'

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

Vue.use(VueLazyload, {
	loading: require('assets/img/lazyLoadImg/xiaoFang.png')
})


new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')






