<template>
  <div class="message">
    <p>此段區間無任何紀錄</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  width: 190px;
  height: 30px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  p {
    margin-top: 35px;
    margin-left: 30px;
    line-height: 30px;
    padding: 0 12px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background-color: #cccccc;
    border-radius: 15px;
  }
}
</style>
