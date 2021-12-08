<template>
	<div v-if="goodsList.length" class="goodsList">
		<goods-item v-for="goods in goodsList" :goods="goods" :key=""/>
	</div>
</template>

<script>
import GoodsItem from "./GoodsItem";


export default {
	name: "GoodsPage",
	props: {
		goodsList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		GoodsItem
	}
}
</script>

<style scoped>
.goodsList {
	display: flex;
	flex-flow: wrap row;
	justify-content: space-around;
	padding: 5px;
	text-align: center;
}
</style>
