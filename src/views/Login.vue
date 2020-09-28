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
      <p class="member-application">
        <a href="##">第一次使用？註冊會員</a>
      </p>
      <p class="member-application">
        <a href="##">忘記密碼</a>
      </p>
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

.member-application {
  text-align: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  margin-top: 20px;
  text-decoration: underline;
  & a {
    color: #407d60;
    text-decoration: none;
  }
}
</style>
