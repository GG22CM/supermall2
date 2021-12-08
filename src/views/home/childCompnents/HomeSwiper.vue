<template>
	<div>
		<swiper-container :interval="2000">
			<swiper-item v-for="banner in banners">
				<a :href="banner.link"><img :src="banner.image" alt="" @load.once="swiperImgLoad"></a>
			</swiper-item>
		</swiper-container>
	</div>
</template>

<script>

import {SwiperContainer, SwiperItem} from "components/common/swiperComponents";

export default {
	name: "HomeSwiper",
	props: {
		banners: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		swiperImgLoad() {
			this.$bus.$emit('swiperImgLoad')
		}
	},
	components: {
		SwiperContainer,
		SwiperItem
	}
}
</script>

<style scoped>

</style>
