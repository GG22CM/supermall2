<template>
	<div v-if="tabs.length" class="tabCtrl">
		<div v-for="(item,index) in tabs" class="tabCtrlItem" @click="tabClick(index)" :class="{activeClass: index === currentIndex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabCtrl",
	props: {
		tabs: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			currentIndex: 0
		}
	},
	methods: {
		tabClick(index) {
			this.currentIndex = index
			this.$emit('tabCtrlClick', index)
		}
	}
}
</script>

<style scoped>
.tabCtrl {
	display: flex;
	text-align: center;
	padding: 10px 0 15px 0px;
	background-color: #fff;
}

.tabCtrlItem {
	flex: 1;
}

.tabCtrlItem span {
	padding: 5px;
}

.activeClass  span{
	color: var(--color-high-text);
	border-bottom: 2px solid var(--color-tint);
}

</style>
