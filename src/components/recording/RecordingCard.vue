<template>
  <div class="recording-card" :class="[borderStyle]">
    <div class="header-icon" v-if="hasHeaderIcon">
      <img
        v-if="borderStyle === 'dark-green'"
        src="@/assets/images/button_add_abled.svg"
        alt="add"
      />
      <img v-else src="@/assets/images/button_add_abled_light.svg" alt="add" />
    </div>
    <div class="recording-body" v-if="hasBodyIcon">
      <!-- 之後替換成 svg 圖 -->
      <img :src="imgUrl" alt="" />
    </div>
    <slot class="recording-card-footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    hasHeaderIcon: {
      type: Boolean,
      default: false
    },
    hasBodyIcon: {
      type: Boolean,
      default: false
    },
    borderStyle: {
      type: String,
      default: ""
    },
    imgUrl: {
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
  justify-content: flex-end;
  padding: 6px 0 3px;
  width: 100%;
  min-height: 80px;
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
    right: 7px;
    top: 7px;
  }
}

.recording-card.light-green {
  border: 2px solid #9cc2b0;
}

.recording-card.dark-green {
  border: 2px solid #407d60;
}
</style>
