<template>
    <div class="tabbarContainer">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TabbarContainer",
}
</script>

<style scoped>
  .tabbarContainer {
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 2px 0px 1px rgba(100,100,100,.1);
  }
</style>
