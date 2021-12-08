<template>
	<div class="cart">
		<navbar class="navbar">
			<div slot="center">购物车({{productsLength}})</div>
		</navbar>
		<scroll-container ref="scrollContainer" class="scrollContainer">
			<cart-list/>
		</scroll-container>
		<bottom-bar/>
	</div>
</template>

<script>
import {CartList} from "./childComponents/cartList";
import BottomBar from "./childComponents/BottomBar";

import Navbar from "components/common/navbarComponents/Navbar";
import ScrollContainer from "components/common/srollComponents/ScrollContainer";

import {mapGetters} from 'vuex'


export default {
	name: "Cart",
	components: {
		CartList,
		BottomBar,
		Navbar,
		ScrollContainer,

	},
	activated() {
		this.$refs.scrollContainer.refresh()
	},
	computed: {
		...mapGetters(['productsLength']),
	}
}
</script>

<style scoped>
.cart {
	height: 100vh;
}

.navbar {
	background-color: var(--color-tint);
	color: white;
	font-size: 20px;
}

.scrollContainer {
	height: calc(100% - 49px - 44px - 44px);
}

</style>
