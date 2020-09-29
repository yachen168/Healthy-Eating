<template>
  <div class="recording-card" :class="[borderStyle]">
    <!-- 之後替換成 svg 圖 -->
    <a-icon type="plus-circle" class="header-icon" v-if="hasHeaderIcon" />
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
    //  之後替換成 svg 圖時移除
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
