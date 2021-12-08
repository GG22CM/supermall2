<template>
	<Navbar>
		<div slot="left" class="left" @click="backClick">
			<img src="~assets/img/common/back.svg" alt="">
		</div>
		<div slot="center" class="center">
			登录
		</div>
	</Navbar>
</template>

<script>
import Navbar from "components/common/navbarComponents/Navbar";

export default {
	name: "LoginNavbar",
	components: {
		Navbar
	},
	methods: {
		backClick() {
			this.$router.back()
		},
	}
}
</script>

<style scoped>

.left {
	padding-top: 5px;
}
</style>
