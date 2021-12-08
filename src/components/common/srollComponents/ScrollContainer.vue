<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot/>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	name: "ScrollContainer",
	props: {
		probeType: {
			type: Number,
			default: 0
		},
		pullUpLoad: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			bScroll: {},
		}
	},
	mounted() {
		this.bScroll = new BScroll(this.$refs.wrapper, {
			click: true,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad
		})


		if(this.probeType === 2 || this.probeType ===3) {
			this.bScroll.on('scroll', position => {
				this.$emit('scroll', position)
			})
		}


		if(this.pullUpLoad) {

			this.bScroll.on('pullingUp', () => {
				this.$emit('pullingUp')
			})
		}



	},
	methods: {
		refresh() {
			this.bScroll.refresh()
		},

		scrollTo(x, y, delay) {
			// console.log(y);
			this.bScroll.scrollTo(x, y, delay)
		},
		finishPullUp() {
			this.bScroll.finishPullUp()
		}
	}
}
</script>

<style scoped>
.wrapper {
	overflow: hidden;
}
</style>
