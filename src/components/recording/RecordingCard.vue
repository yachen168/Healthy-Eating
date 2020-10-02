<template>
  <div class="recording-card">
    <AddIcon class="add-icon" v-if="hasHeaderIcon" />
    <slot name="card-body" class="recording-card-body"></slot>
    <slot name="card-footer" class="recording-card-footer"></slot>
  </div>
</template>

<script>
import AddIcon from "@/assets/images/button_add_abled_light.svg?inline";
export default {
  components: {
    AddIcon
  },
  props: {
    hasHeaderIcon: {
      type: Boolean,
      default: false
    },
    hasBodyIcon: {
      type: Boolean,
      default: false
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
  justify-content: flex-end;
  padding: 6px 0 3px;
  width: 100%;
  min-height: 80px;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  &.empty {
    border-color: #9cc2b0;
  }
  &.recorded {
    border-color: #407d60;
    color: #407d60;
    rect {
      fill: currentColor;
    }
    circle {
      stroke: currentColor;
    }
  }
  p {
    margin: 0;
    text-align: center;
    color: #a8a8a8;
    font-size: 13px;
  }
  .add-icon {
    position: absolute;
    right: 7px;
    top: 7px;
  }
}
</style>
