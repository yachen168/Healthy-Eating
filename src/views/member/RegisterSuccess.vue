<template>
  <div class="register-success">
    <section class="main">
      <div class="success-icon">
        <RegisterSuccess></RegisterSuccess>
      </div>
      <p class="successful">註冊會員成功請重新登入</p>
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
import BaseButton from "@/components/common/BaseButton";
import RegisterSuccess from "@/assets/images/img_loginsuccess.svg?inline";
export default {
  components: {
    BaseButton,
    RegisterSuccess
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 32px;
}

.success-icon {
  width: 140px;
  margin: 108px auto 0;
}
.successful {
  color: #407d60;
  width: 108px;
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
