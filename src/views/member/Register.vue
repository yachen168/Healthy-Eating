<template>
  <div class="register-page">
    <section class="main">
      <BaseTitle title="註冊會員" class="base-title"></BaseTitle>
      <b-alert
        v-model="showDismissibleAlert"
        dismissible
        fade
        v-if="registrationError"
      >
        <b-icon icon="exclamation-circle" class="exclamation-mark"></b-icon>
        <span class="info-error">{{ registrationError }}</span>
      </b-alert>
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
              <EyeCloseIcon v-show="isSlash"></EyeCloseIcon>
              <EyeOpenIcon v-show="!isSlash"></EyeOpenIcon>
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
              type="password"
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
          @click="createAccount"
        ></BaseButton>
      </ValidationObserver>

      <p class="member-application">
        <a @click="$router.push({ name: 'Login' })">已有帳號？從此登入</a>
      </p>
    </section>
  </div>
</template>
<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import EyeCloseIcon from "@/assets/images/ic_eye_close.svg?inline";
import EyeOpenIcon from "@/assets/images/ic_eye_open.svg?inline";

export default {
  data() {
    return {
      register: {},
      isSlash: true,
      type: "password",
      firstPassword: "",
      registrationError: "",
      showDismissibleAlert: ""
    };
  },
  methods: {
    showPassword() {
      this.type === "password"
        ? (this.type = "text")
        : (this.type = "password");
      this.isSlash = !this.isSlash;
    },
    async createAccount() {
      const registrationError = await this.$store.dispatch(
        "postRegister",
        this.register
      );
      if (registrationError) {
        this.registrationError = registrationError;
      }
    }
  },
  components: {
    BaseButton,
    BaseTitle,
    EyeCloseIcon,
    EyeOpenIcon
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
::v-deep .alert {
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 32px;
  left: 32px;
  padding: 0;
  margin-bottom: 0;
  & svg {
    stroke: #e97979;
    stroke-width: 0.5px;
  }
}

::v-deep .alert-dismissible {
  color: black;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #e97979;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 11px 16px;
  & .exclamation-mark {
    color: #e97979;
    font-size: 1rem;
    line-height: 19px;
    margin-bottom: 0;
    margin-right: 8px;
  }
  & .info-error {
    line-height: 19px;
  }
  & .close {
    position: static;
    font-size: 26px;
    font-weight: 50;
    line-height: 19px;
    padding: 0;
  }
}

::v-deep .is-invalid {
  background-image: none;
}
::v-deep .b-icon.bi {
  vertical-align: middle;
}
</style>
