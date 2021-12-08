<template>
	<swiper-container class="swiper">
		<swiper-item v-for="item in images">
			<img :src="item">
		</swiper-item>
	</swiper-container>
</template>

<script>
import {SwiperContainer, SwiperItem} from "components/common/swiperComponents";



export default {
	name: "DetailSwiper",
	props: {
		images: Array
	},
	components: {SwiperItem, SwiperContainer}
}
</script>

<style scoped>
.swiper {
	height: 400px;
}
</style>
