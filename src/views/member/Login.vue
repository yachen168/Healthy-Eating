<template>
  <div class="login-page">
    <section class="main">
      <BaseTitle title="登入" class="base-title"></BaseTitle>
      <b-alert v-model="showDismissibleAlert" dismissible fade>
        <b-icon icon="exclamation-circle" class="exclamation-mark"></b-icon>
        <span class="info-error">帳號或密碼錯誤</span>
      </b-alert>
      <ValidationObserver v-slot="{ invalid }">
        <label for="login-email" class="label-title">帳號(電子信箱)</label>
        <ValidationProvider
          rules="required|email"
          v-slot="{ errors }"
          mode="lazy"
        >
          <b-form-input
            id="login-email"
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

        <label for="login-password" class="label-title">密碼</label>
        <div class="input-area">
          <ValidationProvider
            rules="required|minmax:6,12|alpha_num"
            v-slot="{ errors }"
          >
            <b-form-input
              id="login-password"
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
          :disabledState="invalid"
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
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
export default {
  data() {
    return {
      login: {},
      isSlash: true,
      type: "password",
      showDismissibleAlert: true
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
.login-page {
  position: relative;
}
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

::v-deep .alert {
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 32px;
  left: 32px;
  padding: 0;
  margin-bottom: 0;
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

::v-deep .b-icon.bi {
  vertical-align: middle;
}
</style>
