<template>
	<div v-if="Object.keys(shopBoxMsg).length" class="shopBox">
		<div class="title">
			<img :src="shopBoxMsg.shopLogo" alt="">
			<span>{{shopBoxMsg.name}}</span>
		</div>
		<div class="body">
			<div class="left">
				<div>
					<p>{{allSells}}</p>
					<p>总销量</p>
				</div>
				<div>
					<p>{{shopBoxMsg.cGoods}}</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<div class="right">
				<div v-for="item in shopBoxMsg.score">
					<span>{{item.name}}</span>
					<span class="score" :style="{color: item.isBetter ? 'var(--color-high-text)' : 'var(--color-tint)'}">{{item.score}}</span>
					<span class="better" :style="{backgroundColor: item.isBetter ? 'var(--color-high-text)' : 'var(--color-tint)'}">{{item.isBetter ? '高' : '低'}}</span>
				</div>
			</div>
		</div>
		<div class="foot">
			<div>进店逛逛</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailShopBox",
	props: {
		shopBoxMsg: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		allSells() {
			return (this.shopBoxMsg.cSells/10000).toFixed(1) + '万'
		}
	}
}
</script>

<style scoped>

.shopBox {
	border-bottom: 5px solid #eee;
}
.title {
	font-size: 18px;

	padding: 0 10px;
	color: #aaa;
}
.title img {
	height: 80px;
	vertical-align: middle;
}

.title span {
	vertical-align: baseline;
	margin-left: 10px;
}

.body {
	display: flex;
}

.body>div {

	display: flex;
}

.left {
	flex: 1.5;
	text-align: center;
	align-items: center;
}

.left>div {
	flex: 1;
}

.left>div:last-child {
	border-right: 1px solid #ddd;
}

.left>div>p:first-child {
	font-size: 24px;
	margin-bottom: 5px;
}

.left>div>p:last-child {
	font-size: 14px;
}


.right {
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	padding: 30px ;
	height: 150px;
	font-size: 15px;
	align-items: stretch;
}


.right div {
	position: relative;
}
.right .score {
	margin-left: 30px;
}


.right .better {
	color: white;
	padding: 2px;
	position: absolute;
	right: -10px;
	bottom: 0;
}
.foot {
	display: flex;
	justify-content: center;
	padding-bottom: 30px;
}

.foot div {
	padding: 5px 50px;
	background-color: #eee;
	border-radius: 999em;
	font-size: 15px;
}


</style>
