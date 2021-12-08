<template>
	<div class="category">
		<navbar class="navbar">
			<div slot="center">商品分类</div>
		</navbar>
		<category-container :leftMsg="leftMsg">
			<category-left-bar ref="categoryLeftBar"
												 slot="left"
												 :category-list="leftMsg"
												 @itemClick="leftItemClick"/>
			<div slot="right">
				<category-top-list :top-list-msg="topListMsg"/>
				<tab-ctrl :tabs="['综合', '新品', '销量']" @tabCtrlClick="tabCtrlClick"/>
				<goods-page :goods-list="detailMsg[currentType]"/>
			</div>
		</category-container>
	</div>
</template>

<script>
import Navbar from "components/common/navbarComponents/Navbar";

import TabCtrl from "components/content/tabCtrl/TabCtrl";
import GoodsPage from "components/content/goodsPage/GoodsPage";

import CategoryContainer from "./childComponents/CategoryContainer";
import CategoryLeftBar from "./childComponents/CategoryLeftBar";
import CategoryTopList from "./childComponents/CategoryTopList";

import {requestCategoryData, requestSubCategoryData, requestCategoryDetail} from 'network/requestForCategory'



export default {
	name: "Category",
	components: {
		Navbar,
		TabCtrl,
		GoodsPage,
		CategoryContainer,
		CategoryLeftBar,
		CategoryTopList,
	},
	data() {
		return {
			leftMsg: [],
			topListMsg: [],
			detailMsg: {
				'pop': [],
				'new': [],
				'sell': []
			},
			currentType: 'pop'
		}
	},
	created() {
		this.getCategoryData()
	},
	methods: {
		getCategoryData() {
			requestCategoryData().then(res => {
				// console.log(res);
				this.leftMsg = res.data.category.list
				this.getSubscription()
				this.getCategoryDetail()
			})
		},
		getSubscription() {
			requestSubCategoryData(this.currentMaitKey).then(res => {
				// console.log(res);
				this.topListMsg = res.data.list
			})
		},

		getCategoryDetail() {
			for (const type in this.detailMsg) {
				requestCategoryDetail(this.currentMiniWallkey, type)
					.then(res => {
						this.detailMsg[type] = res
					})
			}
		},

		leftItemClick() {
			this.getSubscription()
			this.getCategoryDetail()
		},
		tabCtrlClick(index) {
			switch (index) {
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
		}
	},
	computed: {
		currentMaitKey() {
			return this.leftMsg.length ? this.leftMsg[this.$refs.categoryLeftBar.currentIndex].maitKey : 0
		},
		currentMiniWallkey() {
			return this.leftMsg.length ? this.leftMsg[this.$refs.categoryLeftBar.currentIndex].miniWallkey : 0

		}
	}
}
</script>

<style scoped>
.navbar {
	background-color: var(--color-tint);
	color: white;
	font-size: 20px;
	font-weight: bold;
}

.category {
	position: relative;
	height: 100vh;
}
</style>
