<template>
  <div class="common-input">
    <label :for="inputId" class="label-title">{{ title }}</label>
    <b-form-input
      :id="inputId"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('update:input', $event)"
      class="form-input"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  name: "Baseput",
  props: {
    inputId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.label-title {
  color: #407d60;
  line-height: 2.2;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  margin-top: 3px;
  margin-bottom: 0;
}

.form-input {
  border-radius: 6px;
}

::placeholder {
  color: #a8a8a8;
}
</style>
