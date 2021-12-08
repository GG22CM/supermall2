<template>
	<div class="userBox">
		<div class="userHead" @click="loginClick">
			<div class="userHeadImg">
				<img src="~assets/img/profile/user.svg" alt="">
			</div>
			<div class="userHeadContent">
				<p>{{user.userName}}</p>
				<p>
					<img src="~assets/img/profile/phone.svg" alt="">
					<span>{{user.userPhone}}</span>
				</p>
			</div>
		</div>
		<div class="userBody">
			<div>
				<p><span>{{user.userMoney}}</span>元</p>
				<p>我的余额</p>
			</div>
			<div>
				<p><span>{{user.userDiscountNumber}}</span>个</p>
				<p>我的优惠</p>
			</div>
			<div>
				<p><span>{{user.userScore}}</span>分</p>
				<p>我的积分</p>
			</div>
		</div>
	</div>

</template>

<script>
import {mapState} from 'vuex'



export default {
	name: "ProfileUserBox",
	computed: {
		...mapState(['user']),
	},
	methods: {
		loginClick() {
			if(this.user.userId != '') {
				return;
			}
			this.$router.push('/login')
		}
	}

}
</script>

<style scoped>
.userBox {
	border-bottom: 10px solid #eee;
}

.userHead {
	display: flex;
	height: 100px;
	background-color: var(--color-tint);
	color: white;
}

.userHeadImg {
	width: 100px;
	text-align: center;
	padding: 20px 10px;
}
.userHeadImg img{
	width: 70px;
	height: 70px;

}

.userHeadContent {
	padding-top: 30px;
}

.userHeadContent>p:first-child {
	font-size: 18px;
	margin-bottom: 10px;
}

.userHeadContent>p:last-child {
	font-size: 15px;
}

.userHeadContent img {
	width: 20px;
	vertical-align: -5px;
	margin-right: 5px;
}

.userBody {
	display: flex;
	padding: 3px 0;
}

.userBody>div {
	flex: 1;
	text-align: center;
	padding: 20px 0;
	border-right: 1px solid #eee;
}
.userBody>div:last-child {
	border: none;
}
.userBody>div>p {
	margin-bottom: 5px;
	font-size: 15px;
}
.userBody>div span {
	color: var(--color-high-text);
	font-size: 25px;
	font-weight: bold;
}

</style>
