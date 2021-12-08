<template>
	<div class="bottomBar">
		<div class="left">
			<div>
				<div></div>
				<p>客服</p>
			</div>
			<div>
				<div></div>
				<p>店铺</p>
			</div>
			<div>
				<div></div>
				<p>收藏</p>
			</div>
		</div>
		<div class="right">
			<div @click="addCart">
				加入购物车
			</div>
			<div>
				购买
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailBottomBar",
	methods: {
		addCart() {
			this.$emit('addCart')
		}
	}
}
</script>

<style scoped>
.bottomBar {
	height: 60px;
	display: flex;
	text-align: center;
}

.left {
	flex: 4;
	display: flex;
}
.left>div {
	flex: 1;
	position: relative;
	font-size: 15px;
}



.left>div>div {
	background-image: url('~assets/img/detail/detail_bottom.png');
	background-repeat: no-repeat;
	background-size: cover;
	margin: 10px auto 0;
	width: 30px;
	height: 30px;
}

.left>div:nth-of-type(1)>div {
	background-position-y: -73px;
}

.left>div:nth-of-type(2)>div {
	background-position-y: -135px;
}

.left>div:nth-of-type(3)>div {
	background-position-y: 0px;
}

.right {
	flex: 5;
	display: flex;
}

.right>div {
	line-height: 60px;
}

.right div:first-child {
	flex: 3;
	background-color: yellow;
	color: #333;
}

.right div:last-child {
	flex: 2;
	background-color: var(--color-tint);
	color: white;
}

</style>
