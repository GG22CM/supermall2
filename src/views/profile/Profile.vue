<template>
	<div>
		<navbar class="navbar">
			<div slot="center">小方商城</div>
		</navbar>

		<profile-user-box/>

		<profile-list-box :titles="['我的消息', '积分商城', '会员卡']"/>
		<profile-list-box :titles="['我的购物车', '下载购物App']"/>

	</div>
</template>

<script>
import Navbar from "components/common/navbarComponents/Navbar";

import ProfileUserBox from "./childComponents/ProfileUserBox";
import ProfileListBox from "./childComponents/ProfileListBox";

import {getCookie} from "common/util";

import {USER_LOGIN} from "store/mutationsType";

export default {
	name: "Profile",
	created() {
		let res = JSON.parse(getCookie('user'))
		if(res.userId) {
			this.$store.commit(USER_LOGIN, res)
		}
	},
	components: {
		Navbar,
		ProfileUserBox,
		ProfileListBox
	}
}
</script>

<style scoped>
.navbar {
	background-color: var(--color-tint);
	color: white;
	font-size: 20px;
	font-weight: bold;
}
</style>
