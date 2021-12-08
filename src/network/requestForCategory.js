import {request} from "./request";

export function requestCategoryData() {
	return request({
		url: '/category'
	})
}


export function requestSubCategoryData(maitKey) {
	return request({
		url: 'subcategory',
		params: {
			maitKey
		}
	})
}

export function requestCategoryDetail(miniWallkey, type) {
	return request({
		url: 'subcategory/detail',
		params: {
			miniWallkey,
			type
		}
	})
}
