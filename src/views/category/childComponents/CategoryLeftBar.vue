<template>
	<div v-if="categoryList.length" class="content">
		<div @click="itemClick(index)" :class="{active: currentIndex === index}" class="item" v-for="(item, index) in categoryList">
			{{item.title}}
		</div>
	</div>
</template>

<script>
export default {
	name: "CategoryLeftBar",
	props: {
		categoryList: []
	},
	data() {
		return {
			currentIndex: 0
		}
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index
			this.$emit('itemClick')
		}
	},
}
</script>

<style scoped>
.content {
	text-align: center;
}

.content .item {
	padding: 20px 0;
	font-size: 15px;
}

.active {
	color: var(--color-high-text);
	background-color: #fff;
	border-left: 5px solid var(--color-high-text);
}
</style>
