<template>
  <div class="BaseButton">
    <button
      class="base-button"
      :disabled="disabledState"
      :class="[{ disabled: disabledState }, buttonStyle]"
      @click="$emit('click')"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: {
      type: String,
      required: true
    },
    disabledState: {
      type: Boolean,
      default: false
    },
    buttonStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  border-radius: 6px;
  outline: none;
}

/* primary: 白字綠底 */
.base-button.primary {
  color: #fff;
  background-color: #407d60;
}

/* default: 綠字白底，無邊框 */
.base-button.default {
  color: #407d60;
  background-color: #fff;
}

/* outline-default: 綠字白底，加邊框 */
.base-button.outline-default {
  color: #407d60;
  background-color: #fff;
  line-height: 32px;
  border: 2px solid #9cc2b0;
}

/* info: 白字藍底 */
.base-button.info {
  color: #fff;
  background-color: #4b7cc7;
}

/* disabled: 白字灰底(禁用) */
.base-button.disabled {
  color: #fff;
  background-color: #a8a8a8;
  cursor: not-allowed;
}

/* danger: 白字紅底 */
.base-button.danger {
  color: #fff;
  background-color: #e36e6e;
}

/* danger: 白字透明底 */
.base-button.transparent {
  color: #fff;
  background-color: transparent;
}
</style>
