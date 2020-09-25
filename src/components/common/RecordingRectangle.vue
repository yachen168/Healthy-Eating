<template>
  <div class="recording-rectangle">
    <Dot size="lg"></Dot>
    <p>{{ title }}</p>
    <!-- 之後替換成 svg 圖 -->
    <div class="icon-add"><a-icon type="plus-circle" /></div>
  </div>
</template>

<script>
import Dot from "@/components/common/Dot";
export default {
  components: {
    Dot
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.recording-rectangle {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 80px;
  border: 2px solid #9cc2b0;
  border-radius: 6px;
  background-color: #fff;
  p {
    margin: 0;
    text-align: center;
    color: #a8a8a8;
    font-size: 13px;
  }
  .icon-add {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #9cc2b0;
  }
}
</style>
