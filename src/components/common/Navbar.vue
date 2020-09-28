<template>
  <div class="navbar">
    <div>
      <h4 v-if="$route.name !== 'Home'" class="logo" slot="left">呷呼健康</h4>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 16px;
  height: 64px;
  background-color: #407d60;
  z-index: 10;
  .logo {
    font-size: 24px;
    letter-spacing: 1px;
    color: #fff;
    cursor: pointer;
  }
  .button {
    display: inline-block;
    font-weight: 400;
    cursor: pointer;
  }
}
</style>
