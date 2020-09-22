<template>
  <!-- 之後可刪除，設計師會出圖 -->
  <div class="dot" :class="size"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.dot {
  border-radius: 50%;
  background-color: #c4c4c4;
}

.dot.sm {
  width: 30px;
  height: 30px;
}

.dot.md {
  width: 40px;
  height: 40px;
}
.dot.lg {
  width: 48px;
  height: 48px;
}
</style>
