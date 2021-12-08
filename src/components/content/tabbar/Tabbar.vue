<template>
  <tabbar-container class="tabbarContainer">
    <tabbar-item path="/home">
      <img slot="img-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-img-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <span slot="text">首页</span>
    </tabbar-item>
    <tabbar-item path="/category">
      <img slot="img-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-img-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <span slot="text">分类</span>
    </tabbar-item>
    <tabbar-item path="/cart">
      <img slot="img-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="active-img-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
      <span slot="text">购物车</span>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img slot="img-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active-img-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <span slot="text">我的</span>
    </tabbar-item>
  </tabbar-container>
</template>

<script>

import {TabbarItem, TabbarContainer} from "components/common/tabbarComponents";


export default {
  name: "Tabbar",
  components: {
    TabbarItem,
    TabbarContainer
  }
}
</script>

<style scoped>
.tabbarContainer img {

}
</style>
