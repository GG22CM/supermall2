import Toast from "./Toast";

export const toast = {}


toast.install = Vue => {
	const toastConstructor = Vue.extend(Toast)
	const toastCpn = new toastConstructor()
	const divEl = document.createElement('div')
	document.body.appendChild(divEl)

	Vue.prototype.$toast = toastCpn
	toastCpn.$mount(divEl)
}
