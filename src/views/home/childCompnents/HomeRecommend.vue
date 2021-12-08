<template>
	<div v-if="recommends.length" class="homeRecommend">
		<a :href="recommend.link" v-for="recommend in recommends" class="recommendItem">
			<img :src="recommend.image" alt="">
			<div>{{recommend.title}}</div>
		</a>
	</div>
</template>

<script>
export default {
	name: "HomeRecommend",
	props: {
		recommends: Array
	}
}
</script>

<style scoped>
.homeRecommend {
	display: flex;
	text-align: center;
	font-size: 14px;
	padding: 10px 0 30px 0;
  border-bottom: 10px solid rgb(200, 200, 200);
}

.recommendItem {
	flex: 1;
}
.recommendItem img {
	width: 85%;
	margin-bottom: 5px;
}
</style>
