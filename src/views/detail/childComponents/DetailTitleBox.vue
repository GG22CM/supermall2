<template>
	<div v-if="Object.keys(titleBoxMsg).length" class="titleBox">
		<div class="title">{{titleBoxMsg.title}}</div>
		<div class="price">
			<span class="now">{{titleBoxMsg.price}}</span><span class="old">{{titleBoxMsg.oldPrice}}</span>
			<span class="desc" v-if="titleBoxMsg.priceDescribe != '' && titleBoxMsg.priceDescribe != null">{{titleBoxMsg.priceDescribe}}</span>
		</div>
		<div class="advantage">
			<div v-for="advantage in titleBoxMsg.advantages">{{advantage}}</div>
		</div>
		<div class="service">
			<div v-for="service in titleBoxMsg.services"><img :src="service.icon" alt="">{{service.name}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailTitleBox",
	props: {
		titleBoxMsg: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>

<style scoped>

.titleBox {
	padding:0 10px;
	border-bottom: 5px solid #eee;
}

.title {
	padding: 20px 0;
}

.price {
	padding-bottom: 20px;
}

.price span:nth-of-type(n+2) {
	margin-left: 10px;
}

.price .now {
	color: var(--color-tint);
	font-size: 30px;
}

.price .old {
	text-decoration: line-through;
	font-size: 18px;
}

.price .desc {
	color: white;
	background-color: var(--color-tint);
	padding: 5px;
	vertical-align: 10px;
	border-radius: 999em;
}

.advantage {
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	color: #aaa;
	padding-bottom: 15px;
	border-bottom: 1px solid #eee;
}

.service {
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	padding: 15px 0 30px;
}

.service img {
	height: 16px;
	width: 16px;
	margin-right: 5px;
}

</style>
