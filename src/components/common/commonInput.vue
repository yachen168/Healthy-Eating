<template>
  <div>
    <label :for="inputId" class="label-title">{{ title }}</label>
    <div class="input-area">
      <b-form-input
        :id="inputId"
        :placeholder="placeholder"
        class="form-input"
        :type="type"
        @input="$emit('update:input', $event)"
      ></b-form-input>
      <button
        v-if="isShowEye"
        class="show-password"
        @click="isSlash = !isSlash"
      >
        <b-icon v-if="isSlash" icon="eye-slash-fill"></b-icon>
        <b-icon v-else icon="eye-fill"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonInput",
  data() {
    return {
      isSlash: true
    };
  },
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
      required: true
    },
    type: {
      type: String,
      required: true
    },
    isShowEye: {
      type: Boolean,
      default: false
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

.input-area {
  position: relative;
}

.show-password {
  color: #407d60;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 10px;
  bottom: 5px;
  margin: auto;
  background-color: white;
  border: none;
  outline: none;
  & svg {
    vertical-align: baseline;
  }
}
</style>
