<template>
  <div class="resetPassword-page">
    <section class="main">
      <BaseTitle title="修改密碼" class="base-title" />
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <label for="login-password" class="label-title">請輸入原密碼</label>
        <div class="input-area">
          <ValidationProvider
            rules="required|minmax:6,12|alpha_num"
            v-slot="{ errors }"
          >
            <b-form-input
              id="login-password"
              placeholder="**********"
              :type="originalPassword.type"
              :state="errors[0] ? false : null"
              :value="loginData.password"
              @input="loginData = { ...loginData, password: $event }"
              class="form-input"
            />
            <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
              {{ errors[0] }}
            </p>
          </ValidationProvider>
          <button @click="showOriginPassword" class="show-password">
            <EyeCloseIcon v-show="originalPassword.isSlash" />
            <EyeOpenIcon v-show="!originalPassword.isSlash" />
          </button>
        </div>

        <ValidationProvider
          vid="firstPassword"
          name="firstPassword"
          rules="required|minmax:6,12|alpha_num"
          mode="lazy"
          v-slot="{ errors }"
        >
          <label for="register-password" class="label-title"
            >請設定新密碼</label
          >
          <div class="input-area">
            <b-form-input
              id="register-password"
              placeholder="6個以上英數字，不可使用特殊符號"
              :type="newPassword.type"
              :state="errors[0] ? false : null"
              :value="firstPassword"
              @input="firstPassword = $event"
              class="form-input"
            ></b-form-input>
            <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
              {{ errors[0] }}
            </p>
            <button @click="showNewPassword" class="show-password">
              <EyeCloseIcon v-show="newPassword.isSlash" />
              <EyeOpenIcon v-show="!newPassword.isSlash" />
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
            >請再輸入一次新密碼</label
          >
          <div class="input-area">
            <b-form-input
              id="check-password"
              placeholder="**********"
              type="password"
              :state="errors[0] ? false : null"
              :value="register.password"
              @input="register.password = $event"
              class="form-input"
            ></b-form-input>
            <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
              {{ errors[0] }}
            </p>
          </div>
        </ValidationProvider>
        <BaseButton
          title="修改完成"
          :disabledState="invalid"
          class="editCompleted-button"
          buttonStyle="primary"
          @click="confirmModifyPassword"
        />
      </ValidationObserver>
    </section>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import EyeCloseIcon from "@/assets/images/ic_eye_close.svg?inline";
import EyeOpenIcon from "@/assets/images/ic_eye_open.svg?inline";
export default {
  components: {
    BaseTitle,
    BaseButton,
    EyeCloseIcon,
    EyeOpenIcon
  },
  data() {
    return {
      loginData: {},
      register: {
        remember_token: localStorage.getItem("token"),
        password: ""
      },
      originalPassword: {
        isSlash: true,
        type: "password"
      },
      newPassword: {
        isSlash: true,
        type: "password"
      },
      firstPassword: ""
    };
  },
  methods: {
    showOriginPassword() {
      this.originalPassword.type === "password"
        ? (this.originalPassword.type = "text")
        : (this.originalPassword.type = "password");
      this.originalPassword.isSlash = !this.originalPassword.isSlash;
    },
    showNewPassword() {
      this.newPassword.type === "password"
        ? (this.newPassword.type = "text")
        : (this.newPassword.type = "password");
      this.newPassword.isSlash = !this.newPassword.isSlash;
    },
    async confirmModifyPassword() {
      const response = await this.$store.dispatch(
        "modifyPassword",
        this.register
      );
    }
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
.editCompleted-button {
  margin-top: 22px;
}
.font-error {
  color: #e36e6e;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
}
</style>
