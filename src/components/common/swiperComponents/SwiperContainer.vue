<template>
	<div class="swiperContainer" ref="swiperContainer">
		<div class="swiperContent" ref="swiperContent" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
			<slot></slot>
		</div>
		<div class="swiperControl" ref="swiperControl" v-if="showControlItem">
			<div v-for="(item, index) in ctrlItemCount" :class="{activeClass: index === currentIndex}"></div>
		</div>
	</div>
</template>

<script>

export default {
	name: "SwiperContainer",
	props: {
		animaDuration: {
			type: Number,
			default: 300
		},
		changeInterval: {
			type: Number,
			default: 2000
		},
		proportion: {
			type: Number,
			default: 0.3
		},
		showControlItem: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			currentIndex: 0,
			ctrlItemCount: 0,
			interval: null,
			touchX: 0,
			canRoll: false
		}
	},
	mounted() {
		//初始化(初始化容器，并且开启自动滚动)
		setTimeout(() => {
			this.init()
		}, 2000)

	},
	methods: {
		init() {
				if(this.$refs.swiperContent != null ) {
					let _swiperContent = this.$refs.swiperContent
					let childrenNode = _swiperContent.children
					this.canRoll = childrenNode.length > 1
					if(childrenNode.length > 1) {
						this.ctrlItemCount = childrenNode.length
						let lastNode = childrenNode[0].cloneNode(true)
						let firstNode = childrenNode[childrenNode.length - 1].cloneNode(true)
						_swiperContent.appendChild(lastNode)
						_swiperContent.insertBefore(firstNode, childrenNode[0])
						this.moveTo('-100%')
						this.startAutoRoll()
					}
			}

		},

		//开启自动滚动
		startAutoRoll() {
			this.interval = setInterval(() => {
				this.currentIndex++
				this.imageMove()
			}, this.changeInterval)
		},



		//滚动判断
		resetCurrentIndex() {
			setTimeout(() => {
				if(this.currentIndex === this.ctrlItemCount) {
					this.closeTransition()
					this.currentIndex = 0
					this.moveTo(this.currentPosition)
				}
				if(this.currentIndex === -1) {
					this.closeTransition()
					this.currentIndex = this.ctrlItemCount - 1
					this.moveTo(this.currentPosition)
				}
			}, this.animaDuration)
		},

		//开启/关闭过渡

		openTransition() {
			if(this.$refs.swiperContent != null) {
				this.$refs.swiperContent.style.transition = 'transform ' + this.animaDuration + 'ms'
			}
		},

		closeTransition() {
			if(this.$refs.swiperContent != null) {
				this.$refs.swiperContent.style.transition = ''
			}
		},


		moveTo(position) {
			if(this.$refs.swiperContent != null){
				this.$refs.swiperContent.style.transform = 'translateX('+position+')'
			}
		},

		//图片移动
		imageMove() {
			this.openTransition()
			this.moveTo(this.currentPosition)
			//判断currentIndex
			this.resetCurrentIndex()
		},

		//手指滑动
		onTouchStart(e) {
			if(!this.canRoll) return false
			//关闭定时器
			clearInterval(this.interval)
			//关闭过渡
			this.closeTransition()
			this.touchX = e.targetTouches[0].clientX

		},
		onTouchMove(e) {
			if(!this.canRoll) return false
			let movePosition =-(this.currentIndex + 1) * this.$refs.swiperContainer.offsetWidth + (e.targetTouches[0].clientX - this.touchX) + 'px'
			this.moveTo(movePosition)
		},
		onTouchEnd(e) {
			if(!this.canRoll) return false
			//开启自动滚动
			let x = e.changedTouches[0].clientX
			let proportion = (x -this.touchX) / this.$refs.swiperContainer.offsetWidth
			if(Math.abs(proportion) > this.proportion) {
				if(proportion < 0) {
					this.currentIndex++
					this.imageMove()
				}else {
					this.currentIndex--
				}

			}
			this.imageMove()
			setTimeout(() => {
				this.startAutoRoll()
			}, this.animaDuration)
		}

	},
	computed: {
		currentPosition() {
			return  -(this.currentIndex + 1) * 100 + '%'
		}
	}
}
</script>

<style scoped>
.swiperContainer {
	position: relative;
	overflow: hidden;
}

.swiperContent {
	display: flex;
}

.swiperControl {
	display: flex;
	position: absolute;
	bottom: 10px;
	left: 0;
	right: 0;
	z-index: 9;
	justify-content: center;
}

.swiperControl>div {
	width: 10px;
	height: 10px;
	background-color: #fff;
	border-radius: 50%;
	margin: 5px;

}

.swiperControl>div.activeClass {
	background-color: red;
}

</style>
