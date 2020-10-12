<template>
  <div class="settingWeight-page">
    <section class="main">
      <BaseTitle title="請問您目前的體重？" class="base-title" />
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <ValidationProvider
          rules="required|email"
          mode="lazy"
          v-slot="{ errors }"
        >
          <div class="input-container">
            <b-form-input
              id="register-email"
              placeholder="xx.x"
              type="email"
              :state="errors[0] ? false : null"
              :value="register.email"
              @input="register = { ...register, email: $event }"
              class="form-input weight"
            ></b-form-input>
            <div class="icon">公斤/Kg</div>
          </div>
        </ValidationProvider>
        <BaseButton
          title="下一步"
          :disabledState="invalid"
          class="nextStep-button"
          buttonStyle="primary"
        />
      </ValidationObserver>
    </section>
    <footer>
      <div class="state-now"></div>
      <div class="state-next"></div>
    </footer>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
export default {
  components: {
    BaseTitle,
    BaseButton
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
.settingWeight-page {
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
.font-error {
  color: #e36e6e;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
}
.weight {
  text-align: center;
}
.input-container {
  position: relative;
}
.icon {
  position: absolute;
  top: 6px;
  right: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: #407d60;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 312px;
  > div {
    width: 70px;
    height: 8px;
    border-radius: 4px;
    margin: 0 10px;
  }
}
.state-now {
  background: #407d60;
}
.state-next {
  background: #9cc2b0;
}
</style>
