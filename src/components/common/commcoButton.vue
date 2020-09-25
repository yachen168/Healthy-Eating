<template>
  <div class="commcoButton">
    <b-button
      block
      class="base-button"
      :disabled="disabledState"
      :class="{ 'disable-button': disabledState }"
      @click="$emit('update:check')"
      >{{ title }}</b-button
    >
  </div>
</template>

<script>
export default {
  name: "commcoButton",
  props: {
    title: {
      type: String,
      required: true
    },
    disabledState: {
      type: Boolean,
      required: true
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
  // width: 296px;
  height: 40px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  border-radius: 6px;
  background-color: #407d60;
  border-color: #407d60;
  margin: 0 auto;
}
</style>
