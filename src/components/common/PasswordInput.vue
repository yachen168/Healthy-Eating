<template>
  <div class="password-input">
    <label :for="inputId" class="label-title">{{ title }}</label>
    <div class="input-area">
      <b-form-input
        :id="inputId"
        :placeholder="placeholder"
        :type="type"
        @input="$emit('update:input', $event)"
        class="form-input"
      ></b-form-input>
      <button @click="showPassword" class="show-password">
        <b-icon v-show="isSlash" icon="eye-slash-fill"></b-icon>
        <b-icon v-show="!isSlash" icon="eye-fill"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordInput",
  data() {
    return {
      isSlash: true,
      type: "password"
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
      default: "**********"
    }
  },
  methods: {
    showPassword() {
      this.type === "password"
        ? (this.type = "text")
        : (this.type = "password");
      this.isSlash = !this.isSlash;
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
