<template>
  <div class="message">
    <p>此段區間無任何紀錄</p>
  </div>
</template>

<script>
export default {
  name: "ChartMessage"
};
</script>

<style lang="scss" scoped>
.message {
  width: 150px;
  height: 30px;
  p {
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
