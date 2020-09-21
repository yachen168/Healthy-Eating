<template>
  <div class="header">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
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
  padding: 12px 16px;
  background-color: rgb(79, 123, 98);
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
