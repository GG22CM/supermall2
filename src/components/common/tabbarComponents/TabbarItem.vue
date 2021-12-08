<template>
  <div class="tabbarItem" @click="itemClick">
    <div class="imgDiv">
      <div v-if="!isActive">
        <slot name="img-icon"></slot>
      </div>
      <div v-else>
        <slot name="active-img-icon"></slot>
      </div>
    </div>
    <div :style="textStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeTextColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    textStyle() {
      return this.isActive ? {color: this.activeTextColor} : {}
    }
  }
}
</script>

<style scoped>
  .tabbarItem {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  .tabbarItem img {
		height: 24px;
		width: 24px;
    vertical-align: top;
  }
  .imgDiv{
    margin-top: 3px;
		margin-bottom: 3px;
  }
</style>
