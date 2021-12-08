<template>
	<div>
		<login-navbar/>
		<login-form-box/>
	</div>
</template>

<script>
import LoginNavbar from "./childComponents/LoginNavbar";
import LoginFormBox from "./childComponents/LoginFormBox";

export default {
	name: "Login",
	components: {
		LoginNavbar,
		LoginFormBox
	}
}
</script>

<style scoped>

</style>
