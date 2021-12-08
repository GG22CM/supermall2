<template>
	<div v-if="Object.keys(product).length" class="cartItem">
		<div class="checkContent">
			<checkbox class="checkBox" :is-checked="product.checked" @click.native="changeProductChecked(product)"/>
		</div>
		<div class="imgContent">
			<img :src="product.image" alt="">
		</div>
		<div class="descContent">
			<p class="descTitle">{{product.title}}</p>
			<p class="descText">{{product.desc}}</p>
			<p class="descFoot">
				<span>￥{{ product.price }}</span><span>x{{product.count}}</span>
			</p>
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
import {PRODUCT_CHECKED_CHANGE} from 'store/mutationsType'

import Checkbox from "components/content/checkbox/Checkbox";

export default {
	name: "CartItem",
	components: {Checkbox},
	props: {
		product: Object
	},
	methods: {
		...mapMutations([PRODUCT_CHECKED_CHANGE])
	}
}
</script>

<style scoped>
.cartItem {
	display: flex;
	padding: 10px 0;

	border-bottom: 3px solid #eee;
}



.checkContent {
	width: 50px;
	padding: 0 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;

}




.imgContent {
	width: 90px;
	padding-right: 15px;
}

.imgContent img {

	width: 100%;
	border-radius: 15px   ;

}
.descContent {
	width: calc(100% - 90px - 50px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-right: 15px;
}

.descContent>p {
	width: 100%;
}

.descTitle {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	color: #333;
}

.descText {
	line-height: 22px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	font-size: 15px;
}

.descFoot {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}

.descFoot span:first-child{
	font-size: 22px;
	color: var(--color-tint);
}

.descFoot span:first-child {

}


</style>
