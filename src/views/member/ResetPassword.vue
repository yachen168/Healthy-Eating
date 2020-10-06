<template>
  <div class="forgetPassword-page">
    <section class="main">
      <BaseTitle title="忘記密碼" class="base-title" />
    </section>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
// import BaseButton from "@/components/common/BaseButton";
export default {
  components: {
    BaseTitle
    // BaseButton
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
</style>
