import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Detail = () => import('views/detail/Detail')
const Login = () => import('views/login/Login')

Vue.use(Router)


const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category,
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/detail/:iid',
		component: Detail
	},
	{
		path: '/login',
		component: Login
	}
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router
