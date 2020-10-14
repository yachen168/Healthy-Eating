<template>
  <div class="resetPassword-page">
    <section class="main">
      <BaseTitle title="設定新密碼" class="base-title" />
      <ValidationObserver ref="form" v-slot="{ invalid }">
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
              :type="type"
              :state="errors[0] ? false : null"
              :value="$store.getters.infoOfForgetPassword.password"
              @input="
                $store.commit('updateInfoOfForgetPassword', {
                  ...$store.getters.infoOfForgetPassword,
                  password: $event
                })
              "
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
        <BaseButton
          title="修改完成"
          :disabledState="invalid"
          class="editCompleted-button"
          buttonStyle="primary"
          @click="confirmEdit"
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
    async confirmEdit() {
      const response = await this.$store.dispatch(
        "resetPassword",
        this.$store.getters.infoOfForgetPassword
      );
      if (response.status !== 400) {
        this.$router.push({ name: "PasswordSuccess" });
      }
    }
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
