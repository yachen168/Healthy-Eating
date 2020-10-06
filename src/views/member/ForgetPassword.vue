<template>
  <div class="forgetPassword-page">
    <section class="main">
      <BaseTitle title="忘記密碼" class="base-title" />
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <ValidationProvider
          rules="required|email"
          mode="lazy"
          v-slot="{ errors }"
        >
          <label for="login-email" class="label-title"
            >請輸入帳號 (電子信箱)
          </label>
          <b-form-input
            id="register-email"
            placeholder="healthy1234@healthy.com"
            type="email"
            :state="errors[0] ? false : null"
            :value="register.email"
            @input="register = { ...register, email: $event }"
            class="form-input"
          ></b-form-input>
        </ValidationProvider>
        <BaseButton
          title="下一步"
          :disabledState="invalid"
          class="nextStep-button"
          buttonStyle="primary"
        />
      </ValidationObserver>
    </section>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
export default {
  components: {
    BaseTitle,
    BaseButton
  },
  data() {
    return {
      register: {},
      isSlash: true,
      type: "password",
      firstPassword: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.forgetPassword-page {
  position: relative;
}

.main {
  padding: 0 32px;
}

.base-title {
  margin-top: 31px;
  margin-bottom: 53px;
}
.nextStep-button {
  margin-top: 22px;
}
.font-error {
  color: #e36e6e;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
}
</style>
