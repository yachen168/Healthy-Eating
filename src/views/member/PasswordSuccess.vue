<template>
  <div class="register-success">
    <section class="main">
      <BaseTitle title="設定新密碼完成" class="base-title" />
      <div class="success-icon">
        <PasswordSuccess />
      </div>
      <p>新密碼設定完成</p>
      <p>請重新登錄</p>

      <BaseButton
        title="登入會員"
        class="successful-button"
        buttonStyle="primary"
        @click="$router.push({ name: 'Login' })"
      ></BaseButton>
    </section>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import PasswordSuccess from "@/assets/images/img_passwordsuccess.svg?inline";
export default {
  components: {
    BaseTitle,
    BaseButton,
    PasswordSuccess
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 32px;
}
.base-title {
  margin-top: 31px;
  margin-bottom: 53px;
}

.success-icon {
  width: 140px;
  margin: 108px auto 0;
}
p {
  color: #407d60;
  width: 126px;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  margin: 22px auto 0;
}
.successful-button {
  margin-top: 190px;
}
</style>
