<template>
	<div class="cartList">
		<cart-item v-for="product in products" :product="product"/>
	</div>
</template>

<script>
import CartItem from "./CartItem";
import {mapState} from 'vuex'

export default {
	name: "CartList",
	components: {
		CartItem
	},
	computed: {
		...mapState(['products'])
	}
}
</script>

<style scoped>

</style>
