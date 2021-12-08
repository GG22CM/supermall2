<template>
	<div class="detail">

		<detail-navbar @itemClick="navItemClick" ref="navbar"/>

		<scroll-container class="scrollContainer"
											ref="scrollContainer"
											:probeType="3"
											@scroll="scroll">
			<detail-swiper :images="topImages"/>
			<detail-title-box :title-box-msg="titleBoxMsg"/>
			<detail-shop-box :shop-box-msg="shopBoxMsg"/>
			<detail-exhibit-box :exhibit-msg="exhibitMsg" @imgLoad="exhibitBoxImgLoad"/>
			<detail-params-box :params-msg="paramsMsg" ref="paramsBox"/>
			<detail-appraisal :appraisal-msg="appraisalMsg" ref="appraisalBox"/>
			<goods-page :goods-list="goodsList" ref="recommendBox"/>
		</scroll-container>

		<detail-bottom-bar @addCart="addCart"/>
		<back-up @click.native="backUp" v-show="backUpShow"/>

	</div>
</template>

<script>
import DetailNavbar from "./childComponents/DetailNavbar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailTitleBox from "./childComponents/DetailTitleBox";
import DetailShopBox from "./childComponents/DetailShopBox";
import DetailExhibitBox from "./childComponents/DetailExhibitBox";
import DetailParamsBox from "./childComponents/DetailParamsBox";
import DetailAppraisal from "./childComponents/DetailAppraisal";
import DetailBottomBar from "./childComponents/DetailBottomBar";

import ScrollContainer from "components/common/srollComponents/ScrollContainer";

import GoodsPage from "components/content/goodsPage/GoodsPage";

import {requestDetailData, requestDetailGoodsList, TitleBoxMsg, AppraisalMsg} from "network/requestForDetail";

import {mixinImageLoad, mixinBackUp} from "common/mixin";
import {debounce} from "common/util";

import {mapActions} from 'vuex'


export default {
	name: "Detail",
	mixins: [mixinImageLoad, mixinBackUp],
	components: {
		DetailAppraisal,
		DetailParamsBox,
		DetailNavbar,
		DetailSwiper,
		DetailTitleBox,
		DetailShopBox,
		DetailExhibitBox,
		DetailBottomBar,
		ScrollContainer,
		GoodsPage,
	},
	data() {
		return {
			iid: '',
			topImages: [],
			titleBoxMsg: {},
			shopBoxMsg: {},
			exhibitMsg: {},
			paramsMsg: {
				rule: [],
				table: []
			},
			appraisalMsg: {},
			goodsList: [],
			offsetTops: [],
			getOffsetTops: null,
		}
	},
	created() {
		this.iid = this.$route.params.iid

		this.getDetailData()

		this.getDetailGoodsList()

		this.getOffsetTops = debounce(() => {
			this.offsetTops = []
			this.offsetTops[0] = 0
			this.offsetTops[1] = this.$refs.paramsBox.$el.offsetTop
			this.offsetTops[2] = this.$refs.appraisalBox.$el.offsetTop
			this.offsetTops[3] = this.$refs.recommendBox.$el.offsetTop
			this.offsetTops[4] = Number.MAX_VALUE


		}, 100)

	},

	methods: {
		...mapActions(['addCartList']),
		getDetailData() {
			requestDetailData(this.iid).then(res => {
				console.log(res);
				let result = res.result
				this.topImages = result.itemInfo.topImages
				this.titleBoxMsg = new TitleBoxMsg(result.columns, result.itemInfo, result.shopInfo)
				this.shopBoxMsg = result.shopInfo
				this.exhibitMsg = result.detailInfo
				this.paramsMsg.rule = result.itemParams.info.set
				this.paramsMsg.table = result.itemParams.rule.tables[0]
				this.appraisalMsg = new AppraisalMsg(result.rate.list[0])
			})
		},

		getDetailGoodsList() {
			requestDetailGoodsList().then(res => {
				this.goodsList = res.data.list
			})
		},

		exhibitBoxImgLoad() {
			this.imageLoadListener()
			this.getOffsetTops()

		},
		scroll(position) {
			this.changeShow(position.y)
			for (let i = 0; i < this.offsetTops.length - 1; i++) {
				if(-position.y >= this.offsetTops[i] && -position.y < this.offsetTops[i+1]) {
					if(this.$refs.navbar.currentIndex != i) {
						this.$refs.navbar.currentIndex = i
					}
				}
			}


		},
		navItemClick(index) {
			this.$refs.scrollContainer.scrollTo(0, -this.offsetTops[index], 300)
		},
		addCart() {
			const product = {}
			product.iid = this.iid
			product.title = this.titleBoxMsg.title
			product.desc = this.exhibitMsg.desc
			product.image = this.topImages[0]
			product.price = this.titleBoxMsg.nowPrice
			this.addCartList(product).then(res => {
				this.$toast.show(res,500)
			})

		}
	},
}
</script>

<style scoped>

.detail {
	height: 100vh;
	position: relative;
	background-color: white;
	z-index: 9;
}

.scrollContainer {
	height: calc(100% - 60px - 44px);
	position: relative;

}


</style>
