const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
	chainWebpack: config => {
		// 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
		config.resolve.alias
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'))
			.set('common', resolve('src/common'))
			.set('network', resolve('src/network'))
			.set('store', resolve('src/store'))

	},
	devServer: {
		port: 8081
	}
}
