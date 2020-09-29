<template>
  <div class="login-page">
    <!-- <Navbar></Navbar> -->
    <section class="main">
      <BaseTitle title="登入" class="base-title"></BaseTitle>
      <ValidationObserver v-slot="{ valid }">
        <label for="email" class="label-title">帳號(電子信箱)</label>
        <ValidationProvider
          rules="required|email"
          v-slot="{ errors }"
          mode="lazy"
        >
          <b-form-input
            id="email"
            placeholder="請輸入會員電子信箱"
            type="email"
            :state="errors[0] ? false : null"
            :value="login.email"
            @input="login = { ...login, email: $event }"
            class="form-input"
          ></b-form-input>
          <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
            {{ errors[0] }}
          </p>
        </ValidationProvider>

        <label for="password" class="label-title">密碼</label>
        <div class="input-area">
          <ValidationProvider
            rules="required|minmax:6,12|alpha_num"
            v-slot="{ errors }"
          >
            <b-form-input
              id="password"
              placeholder="**********"
              :type="type"
              :state="errors[0] ? false : null"
              :value="login.password"
              @input="login = { ...login, password: $event }"
              class="form-input"
            ></b-form-input>
          </ValidationProvider>
          <button @click="showPassword" class="show-password">
            <b-icon v-show="isSlash" icon="eye-slash-fill"></b-icon>
            <b-icon v-show="!isSlash" icon="eye-fill"></b-icon>
          </button>
        </div>
        <BaseButton
          title="登入"
          :disabledState="valid"
          class="login-button"
          buttonStyle="primary"
          @click="test"
        ></BaseButton>
      </ValidationObserver>
      <p class="member-application" @click="$router.push({ name: 'Register' })">
        <a>第一次使用？註冊會員</a>
      </p>
      <p class="member-application">
        <a>忘記密碼</a>
      </p>
    </section>
  </div>
</template>

<script>
// import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
// import BaseInput from "@/components/common/BaseInput";
// import PasswordInput from "@/components/common/PasswordInput";
export default {
  data() {
    return {
      login: {},
      isSlash: true,
      type: "password"
    };
  },
  methods: {
    showPassword() {
      this.type === "password"
        ? (this.type = "text")
        : (this.type = "password");
      this.isSlash = !this.isSlash;
    },
    test() {
      console.log("test");
    }
  },
  components: {
    // Navbar,
    BaseButton,
    // BaseInput,
    BaseTitle
    // PasswordInput
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

.font-error {
  color: #e36e6e;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
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
    cursor: pointer;
    &:hover {
      color: #407d60;
    }
  }
}
::v-deep .is-invalid {
  background-image: none;
}
</style>
