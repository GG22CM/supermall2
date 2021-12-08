import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:7878/api/hy66'
	})

	instance.interceptors.response.use(result => result.data)

	return instance(config)
}

export function userRequest(config) {
	const instance =axios.create({
		baseURL: 'http://localhost:8080',
	})
	instance.interceptors.response.use(res => res.data)

	return instance(config)

}
