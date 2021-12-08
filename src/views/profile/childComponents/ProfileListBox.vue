<template>
	<div class="listBox">
		<div v-for="title in titles" class="item">
			{{title}}
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileListBox",
	props: {
		titles: Array
	}
}
</script>

<style scoped>
.listBox {
	border-bottom: 10px solid #eee;
}

.item {
	padding: 20px 50px;
	border-bottom: 1px solid #eee;
	position: relative;
	font-size: 15px;
	color: #333;
}

.item::before {
	content: '';
	position: absolute;
	width: 10px;
	height: 20px;
	top: 18px;
	left: 20px;
	border-right: 1px solid #aaa;
	border-left: 1px solid #aaa;
	border-bottom: 3px solid #aaa;
	border-top: 3px solid #aaa;

}
</style>
