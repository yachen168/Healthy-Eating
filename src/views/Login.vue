<template>
  <div class="login-page">
    <Navbar> </Navbar>
    <BaseTitle title="登入"></BaseTitle>
    <BaseButton buttonText="登入" buttonClass="disabled"></BaseButton>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";

export default {
  components: {
    Navbar,
    BaseTitle,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
::v-deep .ant-form-item-label {
  padding: 0;
  line-height: 1.5;
  label {
    font-size: 16px;
    font-weight: 500;
    color: #4f7b62;
  }
}

::v-deep .ant-input {
  border-color: #4f7b62;
}
</style>
