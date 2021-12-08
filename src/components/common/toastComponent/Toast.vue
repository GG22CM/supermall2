<template>
	<div class="toast" :style="{opacity: this.opacity}">
		{{message}}
	</div>
</template>

<script>
export default {
	name: "Toast",
	data() {
		return {
			message: '',
			interval: null,
			opacity: 0,
			timeout: null
		}
	},
	methods: {
		show(message, duration = 2000) {
			this.message = message
			this.opacity = 1
			if(this.timeout != null) clearTimeout(this.timeout)
			if(this.interval != null) clearInterval(this.interval)
			this.timeout = setTimeout(() => {
				this.disapear()
			}, duration)
		},
		disapear() {
			/*if(this.interval != null) {
				clearInterval(this.showAddCartInterval)
			}*/
			this.interval = setInterval(() => {
				if(this.opacity <= 0) {
					clearInterval(this.interval)
				}
				this.opacity -= 0.1
			},150)

		}
	}
}
</script>

<style scoped>

.toast {
	background-color: rgba(0, 0, 0, .75);
	color: white;
	font-size: 18px;
	padding: 10px 20px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/*opacity: 0;*/
	z-index: 999;
}

</style>
