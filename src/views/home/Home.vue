<template>
	<div>
		<navbar class="navbar">
			<div slot="center">购物街</div>
		</navbar>
		<tab-ctrl class="fixedCtrl" :tabs="['流行', '新款', '精选']" @tabCtrlClick="changeGoodsList" ref="tabCtrlFixed" v-show="isFixedCtrlShow"/>
		<scroll-container class="scroll-container"
											ref="scrollContainer"
											:probeType="3"
											:pullUpLoad="true"
											@pullingUp="pullingUp"
											@scroll="scroll">
			<home-swiper :banners="banners"/>
			<home-recommend :recommends="recommends"/>
			<home-feature-view/>
			<tab-ctrl :tabs="['流行', '新款', '精选']" @tabCtrlClick="changeGoodsList" ref="tabCtrl"/>
			<goods-page :goods-list="goodsList[this.currentType].list"/>
		</scroll-container>

		<back-up class="backUp" @click.native="backUp" v-show="backUpShow"/>
	</div>
</template>

<script>
import Vue from 'vue'

import HomeSwiper from "./childCompnents/HomeSwiper";
import HomeRecommend from "./childCompnents/HomeRecommend";
import HomeFeatureView from "./childCompnents/HomeFeatureView";


import {Navbar} from "components/common/navbarComponents";
import ScrollContainer from "components/common/srollComponents/ScrollContainer";

import TabCtrl from "components/content/tabCtrl/TabCtrl";
import GoodsPage from "components/content/goodsPage/GoodsPage";


import {requestMultiData, requestGoodsList} from 'network/requestForHome';

import {mixinImageLoad, mixinBackUp} from "common/mixin";

export default {
	name: "Home",
	mixins: [mixinImageLoad, mixinBackUp],
	components: {
		HomeSwiper,
		HomeRecommend,
		HomeFeatureView,
		Navbar,
		ScrollContainer,
		TabCtrl,
		GoodsPage,

	},
	data() {
		return {
			banners: [],
			recommends: [],
			goodsList: {
				pop: {page: 0, list: [], positionY: 0},
				new: {page: 0, list: [], positionY: 0},
				sell: {page: 0, list: [], positionY: 0}
			},
			currentType: 'pop',
			backUpShow: false,
			fixedTop: 0,
			isFixedCtrlShow: false,
			positionY: 0
		}
	},
	created() {
		//网络请求
		this.getMultiData()
		this.getGoodsList('pop')
		this.getGoodsList('new')
		this.getGoodsList('sell')


	/*	let handlerImgLoad = debounce(() => {
			this.$refs.scrollContainer && this.$refs.scrollContainer.refresh()
		}, 50, this)


		this.$bus.$on('goodsItemImgLoad',() => {
			handlerImgLoad()
		})*/

	},
	mounted() {
		this.$bus.$on('swiperImgLoad', () => {
			let top = this.$refs.tabCtrl.$el.offsetTop
			this.fixedTop = top
			this.resetGoodsPosition()

		})
	},
	activated() {
		this.$refs.scrollContainer.refresh()
		this.$refs.scrollContainer.scrollTo(0, this.positionY)
	},
	deactivated() {
		this.positionY = this.$refs.scrollContainer.bScroll.y
	},
	methods: {
		getMultiData() {
			requestMultiData().then(res => {
				this.banners = res.data.banner.list
				this.recommends = res.data.recommend.list
			})
		},
		getGoodsList(type) {
			let pageNum = this.goodsList[type].page + 1
			requestGoodsList(type, pageNum).then(res => {
				this.goodsList[type].list.push(...res.data.list)
				this.goodsList[type].page++
				this.$refs.scrollContainer && this.$refs.scrollContainer.finishPullUp()
			})
		},

		resetGoodsPosition() {
			this.goodsList.new.positionY = -this.fixedTop
			this.goodsList.pop.positionY = -this.fixedTop
			this.goodsList.sell.positionY = -this.fixedTop
		},
		changeGoodsList(index) {
			switch(index) {
				case 0:
					this.currentType = 'pop';
					break
				case 1:
					this.currentType = 'new';
					break
				case 2:
					this.currentType = 'sell';
					break
			}
			this.$refs.tabCtrl.currentIndex = index
			this.$refs.tabCtrlFixed.currentIndex = index
		},
		scroll(position) {
			this.changeShow(position.y)
			this.isFixedCtrlShow = -position.y >= this.fixedTop

		},

		pullingUp() {
			this.getGoodsList(this.currentType)
		}

	},
	watch: {
		currentType(newVal, oldVal) {
			if(-this.$refs.scrollContainer.bScroll.y >= this.fixedTop) {
				//记录此时滚动的距离
				Vue.set(this.goodsList[oldVal], 'positionY', this.$refs.scrollContainer.bScroll.y)
				this.$refs.scrollContainer.scrollTo(0, this.goodsList[newVal].positionY)
			}
			// this.$refs.scrollContainer.bScroll.y - this.fixedTop
		},
		isFixedCtrlShow(newVal) {
			if(newVal) this.resetGoodsPosition()
		}
	}
}
</script>

<style scoped>
.navbar {
	background-color: var(--color-tint);
	color: white;
	font-size: 20px;
}

.scroll-container {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}



.fixedCtrl {
	position: fixed;
	top: 44px;
	left: 0;
	right: 0;
	z-index: 9;
}
</style>
