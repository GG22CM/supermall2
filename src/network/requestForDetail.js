import {request} from './request'

export function requestDetailData(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}


export function requestDetailGoodsList() {
	return request({
		url: '/recommend'
	})
}


export class TitleBoxMsg {
	constructor(columns, itemInfo, shopInfo) {
		this.title = itemInfo.title
		this.price = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.priceDescribe = itemInfo.discountDesc
		this.advantages = []
		this.advantages.push(columns[0], columns[1], shopInfo.services[shopInfo.services.length - 1].name)
		this.services = shopInfo.services
		this.services.pop()
		this.nowPrice = itemInfo.lowNowPrice

	}
}

export class AppraisalMsg {
	constructor(rate) {
		this.username = rate.user.uname
		this.userLogo = rate.user.avatar
		this.content = rate.content
		this.style = rate.style
		this.createdTime = rate.created
		this.images = rate.images
	}
}
