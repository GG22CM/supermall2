<template>
  <div id="app">
	 	<keep-alive exclude="Detail">
			<router-view />
		</keep-alive>
		<tabbar/>
  </div>
</template>

<script>

import Tabbar from "components/content/tabbar/Tabbar";


export default {
  name: 'App',
  components: {
  	Tabbar
  }
}
</script>

<style>

@import 'assets/css/base.css';

.divC {
	display: flex;
	flex-wrap: wrap;
}

.divC>div {
	flex-basis: 50%;
	background-color: red;
}


</style>
