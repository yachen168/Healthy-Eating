<template>
  <div class="commonButton">
    <b-button
      block
      class="base-button"
      :disabled="disabledState"
      :class="[{ 'disable-button': disabledState }, buttonStyle]"
      @click="$emit('update:check')"
      >{{ title }}</b-button
    >
  </div>
</template>

<script>
export default {
  name: "commonButton",
  props: {
    title: {
      type: String,
      required: true
    },
    disabledState: {
      type: Boolean,
      required: true
    },
    buttonStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.disable-button.btn-secondary.disabled {
  background-color: #a8a8a8;
  border-color: #a8a8a8;
}

.btn-secondary:hover {
  background-color: #407d60;
  border-color: #407d60;
}

.base-button {
  line-height: 1.9;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  border-radius: 6px;
  background-color: #407d60;
  border-color: #407d60;
  margin: 0 auto;
}

/* primary: 白字綠底 */
.base-button.primary {
  color: #fff;
  background-color: #407d60;
}

/* default: 綠字白底 */
.base-button.default {
  color: #407d60;
  background-color: #fff;
}

/* info: 白字藍底 */
.base-button.info {
  color: #fff;
  background-color: #4b7cc7;
}

/* disabled: 白字灰底 */
.base-button.disabled {
  color: #fff;
  background-color: #a8a8a8;
}

/* danger: 白字紅底 */
.base-button.danger {
  color: #fff;
  background-color: #e36e6e;
}

/* danger: 白字透明底 */
.base-button.transparent {
  color: #fff;
}
</style>
