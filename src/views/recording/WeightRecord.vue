<template>
  <div class="weight-record">
    <main>
      <BaseTitle title="體重紀錄"></BaseTitle>
      <FormCard
        unit="kg"
        :quantity="userWeight"
        @minus:quantity="userWeight -= 0.1"
        @add:quantity="userWeight += 0.1"
        ><WaterRecordIcon slot="image" />
      </FormCard>
      <div class="button-wrapper">
        <BaseButton
          title="取消"
          buttonStyle="outline-default"
          @click="$router.push({ name: 'RecordingStates' })"
        ></BaseButton>
        <BaseButton
          title="確認"
          buttonStyle="primary"
          :disabledState="userWeight === 0"
          @click="confirmUpdateWeight"
        ></BaseButton>
      </div>
    </main>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import FormCard from "@/components/recording/FormCard";
import WaterRecordIcon from "@/assets/images/ic_weight_record.svg?inline";

export default {
  components: {
    BaseTitle,
    BaseButton,
    FormCard,
    WaterRecordIcon
  },
  data() {
    return {
      userWeight: this.$store.getters.weightOfSpecificDate
    };
  },
  methods: {
    async confirmUpdateWeight() {
      const weightId = this.$store.getters.weightIdOfSpecificDate;

      /* 已有紀錄則更新該筆歷史紀錄，無歷史紀錄則直接新增 */
      if (weightId) {
        await this.$store.dispatch("updateUserWeight", {
          weightId: weightId,
          data: {
            _method: "put",
            weight: +this.userWeight.toFixed(1)
          }
        });
      } else {
        await this.$store.dispatch("setUserWeight", {
          user_id: this.$store.getters.userProfile.id,
          remember_token: localStorage.getItem("token"),
          weight: +this.userWeight.toFixed(1)
        });
      }
      this.$router.push({ name: "RecordingStates" });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
  margin: 0 auto;
  padding: 30px 32px 10px;
  .page-title {
    margin-bottom: 100px;
  }
}
.form-card {
  .target {
    font-size: 13px;
    color: #407d60;
  }
}
.button-wrapper {
  display: flex;
  justify-content: center;
  .BaseButton {
    flex: 1 0 0;
  }
  .BaseButton + .BaseButton {
    margin-left: 7px;
  }
}
</style>
