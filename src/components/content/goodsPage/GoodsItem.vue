<template>
	<div class="goodsItem" @click="itemClick">
		<img v-lazy="imgUrl" alt="" @load="imgLoad">
		<div class="description">
			<p>{{goods.title}}</p>
			<span>￥{{goods.price}}</span>
			<span>{{goods.cfav}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "GoodsItem",
	props: {
		goods: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		imgLoad() {
			this.$bus.$emit('goodsItemImgLoad')
		},
		itemClick() {
			this.$router.push('/detail/' + this.goods.iid)
		}
	},
	computed: {
		imgUrl() {
			if(this.goods.image) return this.goods.image
			if(this.goods.show) return this.goods.show.img
			if(this.goods.img) return this.goods.img
		}
	}
}
</script>

<style scoped>

.goodsItem {
	width: 48%;
	padding-bottom: 50px;
	position: relative;

}

.goodsItem img {
	width: 100%;

}

.goodsItem p {
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	/*padding: 5px 0px;*/
	font-size: 16px;
}

.goodsItem span {
	color: var(--color-high-text);
	font-size: 18px;
}
.goodsItem span:last-child{
	margin-left: 25px;
	position: relative;
}
.goodsItem span:last-child::before {
	content: '';
	background-image: url('~assets/img/common/collect.svg');
	background-size: cover;
	width: 18px;
	height: 18px;
	position: absolute;
	left: -18px;
}

.description {
	position: absolute;
	width: 100%;
	bottom: 5px;

}
</style>
