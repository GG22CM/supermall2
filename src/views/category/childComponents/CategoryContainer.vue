<template>
	<div class="category-container">
		<scroll-container class="leftContent" ref="leftContent">
			<slot name="left"></slot>
		</scroll-container>
		<scroll-container ref="scrollContainer" class="rightContent">
			<slot name="right"></slot>
		</scroll-container>
	</div>
</template>

<script>
import ScrollContainer from "components/common/srollComponents/ScrollContainer";

import {mixinImageLoad} from 'common/mixin'

export default {
	name: "CategoryContainer",
	mixins: [mixinImageLoad],
	props: {
		leftMsg: {
			type: Array,
			default() {
				return {}
			}
		}
	},
	components: {
		ScrollContainer
	},
	created() {
		this.$bus.$on('categoryTopImgLoad', () => {
			this.imageLoadListener()
		})
	},
	watch: {
		leftMsg() {
			this.$nextTick(() => {
				console.log('---');
				this.$refs.leftContent.refresh()
			})
		}
	}
}
</script>

<style scoped>
.category-container {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	display: flex;
}

.leftContent {
	width: 90px;
	height: 100%;
	background-color: #eee;
}

.rightContent {
	flex: 1;
	height: 100%;
}
</style>
