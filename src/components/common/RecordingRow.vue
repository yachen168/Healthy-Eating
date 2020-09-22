<template>
  <div class="recording-container">
    <div class="recording-row">
      <div class="recording-col">
        <Dot size="sm"></Dot>
        <div class="title-wrapper">
          <h2>{{ recording.type }}</h2>
          <div class="info">
            <a-icon type="info-circle" /> <span>份量說明</span>
          </div>
        </div>
      </div>
      <div class="record recording-col">
        <a-icon @click="$emit('minus:quantity')" type="minus-circle" />
        <span class="total">{{
          recording.quantity
            ? recording.quantity.toFixed(1)
            : recording.quantity
        }}</span>
        <a-icon @click="$emit('add:quantity')" type="plus-circle" />
        <span class="unit">{{ recording.unit }}</span>
      </div>
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
    recording: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.recording-container {
  padding: 0 12px;
  background-color: #fff;
}
.recording-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  .recording-col {
    display: flex;
    align-items: center;
  }
  .title-wrapper {
    margin-left: 8px;
    h2 {
      font-size: 14px;
      color: #383838;
    }
    i,
    span {
      font-size: 14px;
      color: #407d60;
    }
    .info {
      cursor: pointer;
    }
  }
  i,
  span {
    vertical-align: middle;
  }
  i {
    line-height: 0;
  }
  .record {
    user-select: none;
    i {
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
    .total {
      min-width: 32px;
      margin: 0 4px;
      font-size: 13px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-weight: 700;
      background-color: #f5f5f5;
      border-radius: 2px;
    }
    .unit {
      margin-left: 10px;
    }
  }
}

.recording-container + .recording-container {
  .recording-row {
    border-top: 1px dashed #9cc2b0;
  }
}
.recording-container:first-of-type {
  border-radius: 6px 6px 0 0;
}

.recording-container:last-of-type {
  border-radius: 0 0 6px 6px;
}
</style>
