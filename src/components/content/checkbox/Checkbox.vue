<template>
	<div class="checkbox" :class="{checked: isChecked}">
		<img src="~assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
export default {
	name: "Checkbox",
	props: {
		isChecked: Boolean
	}
}
</script>

<style scoped>
.checkbox {
	width: 20px;
	height: 20px;
	border:2px solid #eee;
	border-radius: 50%;
}

.checkbox img {
	width: 100%;
	height: 100%;
}

.checked {
	background-color: var(--color-tint);
	border:2px solid var(--color-tint);
}
</style>
