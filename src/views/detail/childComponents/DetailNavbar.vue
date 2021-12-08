<template>
	<Navbar>
		<div slot="left" class="left" @click="backClick">
			<img src="~assets/img/common/back.svg" alt="">
		</div>
		<div slot="center" class="center">
			<div v-for="(item,index) in tabs" @click="tabClick(index)" :class="{activeClass: currentIndex === index}">{{item}}</div>
		</div>
	</Navbar>
</template>

<script>
import {Navbar} from "components/common/navbarComponents";

export default {
	name: "DetailNavbar",
	components: {
		Navbar
	},
	data() {
		return {
			tabs: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0
		}
	},
	methods: {
		backClick() {
			this.$router.go(-1)
		},
		tabClick(index) {
			this.$emit('itemClick', index)
			this.currentIndex = index
		}
	}
}
</script>

<style scoped>
.center {
	display: flex;
	text-align: center;
	font-size: 14px;
}

.center>div {
	flex:1;
}

.left {
	padding-top: 5px;
}

.activeClass {
	color: var(--color-high-text);
}
</style>
