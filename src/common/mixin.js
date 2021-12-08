import {debounce} from './util'

export const mixinImageLoad = {
	data() {
		return {
			imageLoadListener: null
		}
	},
	created() {
		this.imageLoadListener = debounce(() => {
			this.$refs.scrollContainer && this.$refs.scrollContainer.refresh()
		}, 50)
		this.$bus.$on('goodsItemImgLoad', this.imageLoadListener)
	},
	deactivated() {
		this.$bus.$off('goodsItemImgLoad', this.imageLoadListener)
	}
}

import BackUp from "components/content/backUp/BackUp";

export const mixinBackUp = {
	components: {
		BackUp
	},
	data() {
		return {
			backUpShow: false
		}
	},
	methods: {
		backUp() {
			this.$refs.scrollContainer.scrollTo(0, 0, 300)
		},
		changeShow(position) {
			this.backUpShow = -position > 1000
		}
	}
}
