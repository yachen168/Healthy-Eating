<template>
  <div class="settingWeight-page">
    <section class="main">
      <BaseTitle title="請問您目前的體重？" />
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <!-- 正則要修改 -->
        <ValidationProvider
          :rules="{ required: true, regex: /^[1-9]{1}\d{0,2}(\.\d)?$/ }"
          v-slot="{ errors }"
        >
          <div class="input-container">
            <b-form-input
              id="weight"
              class="form-input weight"
              type="number"
              min="0"
              placeholder="xx.x"
              :value="register.weight"
              @input="register.weight = parseFloat($event)"
            />
            <div class="icon">公斤/kg</div>
          </div>
          <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
        <BaseButton
          title="下一步"
          class="nextStep-button"
          buttonStyle="primary"
          :disabledState="invalid"
          @click="confirmWeight"
        />
      </ValidationObserver>
    </section>
    <footer>
      <div class="state"></div>
      <div class="state"></div>
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
      register: {
        remember_token: localStorage.getItem("token"),
        user_id: `${this.$store.getters.userProfile.id}`,
        weight: ""
      }
    };
  },
  methods: {
    async confirmWeight() {
      const response = await this.$store.dispatch(
        "setUserWeight",
        this.register
      );
      this.$router.push({ name: "SettingPlan" });
    }
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
  margin-bottom: 80px;
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
  padding: 17px 0;
  margin-top: 312px;
  .state {
    width: 70px;
    height: 8px;
    border-radius: 4px;
  }
  .state:first-child {
    background: #407d60;
  }
  .state:last-child {
    margin-left: 10px;
    background: #9cc2b0;
  }
}
</style>
