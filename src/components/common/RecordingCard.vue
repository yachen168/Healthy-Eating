<template>
  <div class="recording-card" :class="[borderStyle]">
    <Dot size="lg"></Dot>
    <!-- 之後替換成 svg 圖 -->
    <a-icon type="plus-circle" class="header-icon" v-if="hasHeaderIcon" />
    <div class="recording-card-footer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Dot from "@/components/common/Dot";
export default {
  components: {
    Dot
  },
  props: {
    hasHeaderIcon: {
      type: Boolean,
      default: false
    },
    borderStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.recording-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  width: 143px;
  height: 80px;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  p {
    margin: 0;
    text-align: center;
    color: #a8a8a8;
    font-size: 13px;
  }
  .header-icon {
    position: absolute;
    line-height: 0;
    right: 7px;
    top: 7px;
    color: #9cc2b0;
  }
}

.recording-card.light-green {
  border: 2px solid #9cc2b0;
}

.recording-card.dark-green {
  border: 2px solid #407d60;
  .header-icon {
    color: #407d60;
  }
}
</style>
