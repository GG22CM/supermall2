<template>
	<div v-if="topListMsg.length" class="topList">
		<div v-for="item in topListMsg" class="topItem">
			<img :src="item.image" alt="" @load="imgLoad">
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TopList",
	props: {
		topListMsg: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		imgLoad() {
			this.$bus.$emit('categoryTopImgLoad')
		}
	}
}
</script>

<style scoped>
.topList {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	padding-top: 20px;
}

.topItem {
	width: calc(100%/3);
	text-align: center;
	padding: 15px;
	font-size: 14px;

}

.topItem:last-child {

}

.topItem img {
	width: 90%;
	margin-bottom: 10px;
}


</style>
