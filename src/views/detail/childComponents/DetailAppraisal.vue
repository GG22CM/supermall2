<template>
	<div v-if="Object.keys(appraisalMsg).length" class="appraisalBox">
		<div class="title">
			<span>用户评价</span><span class="more">更多</span>
		</div>
		<div class="user">
			<img :src="appraisalMsg.userLogo" alt="">
			{{appraisalMsg.username}}
		</div>
		<div class="content">
			<p>{{appraisalMsg.content}}</p>
			<p>
				<span>{{appraisalMsg.createdTime | toDate}}</span><span>{{appraisalMsg.style}}</span>
			</p>
		</div>
		<div class="images" v-if="appraisalMsg.images != null && appraisalMsg.images.length">
			<img :src="image" alt="" v-for="image in appraisalMsg.images">
		</div>
	</div>
</template>

<script>
import {formatDate} from "common/util";

export default {
	name: "DetailAppraisal",
	props: {
		appraisalMsg: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	filters: {
		toDate(value) {
			return formatDate(new Date(value * 1000), 'yyyy-MM-dd HH:mm')
		}
	}
}
</script>

<style scoped>
.appraisalBox {
	padding-bottom: 10px;
	border-bottom: 5px solid #eee;
}

.title {
	padding: 25px 0;
	margin:0 10px;
	font-size: 16px;
	color: #333;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
}

.more {
	padding-right: 40px;
	position: relative;
}

.more::after {
	content: url("~assets/img/common/back.svg");
	position: absolute;
	transform: rotate(180deg);
	top: -8px;
	right: 0;
}

.user {
	padding: 20px 10px;
	color: #333;
}
.user img {
	height: 70px;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 10px;
}

.content {
	padding: 0 20px;
}

.content p {
	margin-bottom: 10px;
}
.content p:last-child {
	font-size: 14px;
	color: #aaa;
}

.content p span {
	padding-right: 10px;
}

.images {
	padding: 10px;
}

.images img {
	width: 80px;
	margin-right: 5px;
}
</style>
