<template>
  <div class="register-page">
    <section class="main">
      <BaseTitle title="註冊會員" class="base-title"></BaseTitle>
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <ValidationProvider
          rules="required|email"
          v-slot="{ errors }"
          mode="lazy"
        >
          <label for="register-email" class="label-title"
            >帳號 (電子信箱)</label
          >
          <b-form-input
            id="register-email"
            placeholder="healthy1234@healthy.com"
            type="email"
            :state="errors[0] ? false : null"
            :value="register.email"
            @input="register = { ...register, email: $event }"
            class="form-input"
          ></b-form-input>
          <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
            {{ errors[0] }}
          </p>
        </ValidationProvider>

        <ValidationProvider
          vid="firstPassword"
          name="firstPassword"
          rules="required|minmax:6,12|alpha_num"
          mode="lazy"
          v-slot="{ errors }"
        >
          <label for="register-password" class="label-title">密碼</label>
          <div class="input-area">
            <b-form-input
              id="register-password"
              placeholder="6個以上英數字，不可使用特殊符號"
              :type="type"
              :state="errors[0] ? false : null"
              :value="firstPassword"
              @input="firstPassword = $event"
              class="form-input"
            ></b-form-input>
            <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
              {{ errors[0] }}
            </p>
            <button @click="showPassword" class="show-password">
              <b-icon v-show="isSlash" icon="eye-slash-fill"></b-icon>
              <b-icon v-show="!isSlash" icon="eye-fill"></b-icon>
            </button>
          </div>
        </ValidationProvider>

        <ValidationProvider
          vid="password"
          name="password"
          rules="required|confirmedBy:@firstPassword"
          v-slot="{ errors }"
        >
          <label for="check-password" class="label-title"
            >請再輸入一次密碼</label
          >
          <div class="input-area">
            <b-form-input
              id="check-password"
              placeholder="**********"
              :type="type"
              :state="errors[0] ? false : null"
              :value="register.password"
              @input="register = { ...register, password: $event }"
              class="form-input"
            ></b-form-input>
            <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
              {{ errors[0] }}
            </p>
          </div>
        </ValidationProvider>

        <ValidationProvider
          rules="required|nameMinMax:1,10"
          v-slot="{ errors }"
        >
          <label for="nick-name" class="label-title">用戶暱稱</label>
          <div class="input-area">
            <b-form-input
              id="nick-name"
              placeholder="限定十個字以內，例：健康先生"
              type="text"
              :state="errors[0] ? false : null"
              :value="register.name"
              @input="register = { ...register, name: $event }"
              class="form-input"
            ></b-form-input>
            <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
              {{ errors[0] }}
            </p>
          </div>
        </ValidationProvider>

        <BaseButton
          title="註冊"
          :disabledState="invalid"
          class="register-button"
          buttonStyle="primary"
          @click="test"
        ></BaseButton>
      </ValidationObserver>

      <p class="member-application" @click="$router.push({ name: 'Login' })">
        <a>已有帳號？從此登入</a>
      </p>
    </section>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
export default {
  data() {
    return {
      register: {},
      isSlash: true,
      type: "password",
      firstPassword: ""
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
    BaseButton,
    BaseTitle
  }
};
</script>

<style lang="scss" scoped>
.register-page {
  position: relative;
}
.main {
  padding: 0 32px;
}
.register-button {
  margin-top: 20px;
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
  margin-top: 5px;
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
::v-deep .b-icon.bi {
  vertical-align: middle;
}
</style>
