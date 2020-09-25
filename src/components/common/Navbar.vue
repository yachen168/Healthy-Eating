<template>
  <div class="header">
    <div>
      <h4 v-if="$route.name !== 'Home'" class="logo" slot="left">甲呼健康</h4>
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  background-color: #407d60;
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
