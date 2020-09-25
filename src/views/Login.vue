<template>
  <div class="login-page">
    <Navbar></Navbar>
    <section class="main">
      <BaseTitle title="登入"></BaseTitle>
      <commonInput
        inputId="account"
        title="帳號(電子信箱)"
        placeholder="posttaro1234@gmail.com"
        @update:input="login = { ...login, email: $event }"
      ></commonInput>
      <commonInput
        inputId="password"
        title="密碼"
        placeholder="**********"
        @update:input="login = { ...login, password: $event }"
      ></commonInput>
      <commonButton title="登入" :disabledState="disabledState"></commonButton>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";
import commonButton from "@/components/common/commonButton";
import commonInput from "@//components/common/commonInput";
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
    commonButton,
    commonInput,
    BaseTitle
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 32px;
}
</style>
