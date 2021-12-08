<template>
	<div class="formBox">
		<form>
			<div>
				<input type="text" v-model="username" placeholder="用户名">
			</div>
			<div>
				<input type="password" v-model="password" placeholder="密码">
			</div>
			<div>
				<input type="submit" value="登陆" class="loginBtn" @click.prevent="login"/>
			</div>
			<div class="error">{{errorMsg}}</div>
		</form>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	name: "LoginFormBox",
	data() {
		return {
			username: '',
			password: '',
			errorMsg: ''
		}
	},
	methods: {
		...mapActions(['userLoginAction']),
		login() {
			this.errorMsg = ''
			let res = this.userLoginAction({
				username: this.username,
				password: this.password
			}).then(res => {
				this.$router.push('/profile')
			}).catch(error => {
				this.errorMsg = error
			})
		},
	}
}
</script>

<style scoped>

.formBox {
	margin-top: 150px;
	text-align: center;
}

.formBox input {
	width: 250px;
	border-radius: 5px;
	padding: 10px 15px;
	border:1px solid #aaa;
}
.formBox>form>div {
	padding: 10px 0;
}

.loginBtn:active {
	color: white;
	background-color: var(--color-tint);
}

.error {
	font-size: 14px;
	color: red;
}
</style>
