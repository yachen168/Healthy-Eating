<template>
  <div class="login-page">
    <Navbar></Navbar>
    <section class="main">
      <BaseTitle title="登入"></BaseTitle>
      <CommonInput
        inputId="account"
        title="帳號(電子信箱)"
        type="email"
        placeholder="posttaro1234@gmail.com"
        @update:input="login = { ...login, email: $event }"
      ></CommonInput>
      <PasswordInput
        inputId="login-password"
        title="密碼"
        @update:input="login = { ...login, password: $event }"
      ></PasswordInput>
      <BaseButton
        title="登入"
        :disabledState="disabledState"
        class="login-button"
        buttonStyle="primary"
      ></BaseButton>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import CommonInput from "@/components/common/CommonInput";
import PasswordInput from "@/components/common/PasswordInput";
export default {
  data() {
    return {
      disabledState: true,
      login: {}
    };
  },
  methods: {},
  components: {
    Navbar,
    BaseButton,
    CommonInput,
    BaseTitle,
    PasswordInput
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 32px;
}
.login-button {
  margin-top: 12px;
}
</style>
