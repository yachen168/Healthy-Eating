<template>
  <div class="login-page">
    <Navbar></Navbar>
    <section class="main">
      <label :for="test"
        >Type <code>{{ type }}</code
        >:</label
      >
      <b-form-input :id="test" :type="type"></b-form-input>
      <commcoButton title="登入" :disabledState="state"></commcoButton>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import commcoButton from "@/components/common/commcoButton";
export default {
  data() {
    return {
      state: true
    };
  },
  methods: {},
  components: {
    Navbar,
    commcoButton
  }
};
</script>

<style lang="scss" scoped>
::v-deep .main {
  padding: 0 32px;
}
// ::v-deep .ant-form-item-label {
//   padding: 0;
//   line-height: 1.5;
//   label {
//     font-size: 16px;
//     font-weight: 500;
//     color: #4f7b62;
//   }
// }

// ::v-deep .ant-input {
//   border-color: #4f7b62;
// }
</style>
