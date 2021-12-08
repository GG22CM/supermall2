<template>
	<div class="bottomBar">
		<div class="checkContent">
			<checkbox class="checkBox" :is-checked="isChecked" @click.native="checkboxClick"/>
			<span>全选</span>
		</div>
		<div class="totalPrice">
			合计&nbsp;￥{{totalPrice}}
		</div>
		<div class="calcButton">
			去结算({{checkedCount}})
		</div>
	</div>
</template>

<script>
import Checkbox from "components/content/checkbox/Checkbox";

import {mapState} from 'vuex'
import {PRODUCT_CHECKED_CHANGE} from "store/mutationsType";


export default {
	name: "BottomBar",
	components: {Checkbox},
	methods: {
		checkboxClick() {
			let status = !this.isChecked
			this.products.forEach(item => {
				if(item.checked != status) {
					this.$store.commit(PRODUCT_CHECKED_CHANGE, item)
				}
			})
		}
	},
	computed: {
		...mapState(['products']),
		totalPrice() {
			return this.products.filter(item => item.checked)
													.reduce((preValue, item) => {
														return preValue + item.count * item.price
													}, 0)
		},
		checkedCount() {
			return this.products.filter(item => item.checked).length
		},
		isChecked() {
			if(this.products.length) {
				return 	this.products.find(item => !item.checked) != null ? false : true
			}else {
				return false
			}
		}
	}
}
</script>

<style scoped>
.bottomBar {
	height: 44px;
	background-color: #eee;
	display: flex;

}

.checkContent {
	width: 100px;
	display: flex;
	align-items: center;
}

.checkBox {
	width: 25px;
	height: 25px;
	margin: 0 10px;
}

.totalPrice {
	flex: 1;
	line-height: 44px;
}

.calcButton {
	width: 100px;
	text-align: center;
	line-height: 44px;
	color: white;
	background-color: red;
}

</style>
