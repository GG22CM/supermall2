
export function debounce(fn, delay, that) {
	let timer = null;
	return (...args) => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
				fn.call(that,...args)
		}, delay);
	}
}


//格式化日期

export function formatDate(date, format) {
	let fmt
	if(/(y+)/.test(format)) {
		fmt = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}


	let o = {
		'M+': date.getMonth() + 1 + '',
		'd+': date.getDay() + '',
		'H+': date.getHours() + '',
		'm+': date.getMinutes() + '',
		's+': date.getSeconds() + ''
	}

	for (let oKey in o) {
		if(new RegExp(`(${oKey})`).test(fmt)) {
			let str = o[oKey]
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
		}
	}

	return fmt
}

function padLeftZero(str) {
	return ('00' + str).substr((str.length))
}


//写cookies
export function setCookie(name, value) {
	let Days = 30;
	let exp = new Date();
	exp.setTime(exp.getTime() + 10 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies
export function getCookie(name) {
	let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}
