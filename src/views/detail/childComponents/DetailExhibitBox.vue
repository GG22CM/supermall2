<template>
	<div class="exhibitBox" v-if="Object.keys(exhibitMsg).length">
		<div class="desc">
			{{exhibitMsg.desc}}
		</div>
		<div class="exhibit">
			<p>{{exhibitMsg.detailImage[0].key}}</p>
			<div v-for="item in exhibitMsg.detailImage[0].list">
				<img :src="item" alt="" @load="imgLoad">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailExhibitBox",
	props: {
		exhibitMsg: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		imgLoad() {
			this.$emit('imgLoad')
		}
	}
}
</script>

<style scoped>
.exhibitBox {
	padding-bottom: 20px;
	border-bottom: 5px solid #eee;
}

.desc {
	padding: 50px 40px;
	font-size: 17px;
	position: relative;
}

.desc::before, .desc::after {
	content: '';
	display: block;
	width: 100px;
	height: 6px;
	position: absolute;

}
.desc::before{
	border-bottom: 1px solid black;
	border-left: 6px solid black;
	top: 20px;
	left: 20px;

}

.desc::after {
	border-top: 1px solid black;
	border-right: 6px solid black;
	right: 20px;
	bottom: 20px;
}

.exhibit {
	padding: 5px;
}
.exhibit p {
	font-size: 20px;
	color: black;
}

.exhibit img {
	width: 100%;
}
</style>
