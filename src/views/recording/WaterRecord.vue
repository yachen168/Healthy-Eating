<template>
  <div class="water-record">
    <main>
      <BaseTitle title="飲水紀錄量"></BaseTitle>
      <FormCard
        unit="公升"
        :quantity="sumWaterIntakeOneDay"
        @minus:quantity="sumWaterIntakeOneDay -= 0.25"
        @add:quantity="sumWaterIntakeOneDay += 0.25"
        ><WaterRecordIcon slot="image" />
        <div slot="footer" class="target">每日目標：2公升</div></FormCard
      >
      <div class="button-wrapper">
        <BaseButton
          title="取消"
          buttonStyle="outline-default"
          @click="$router.push({ name: 'RecordingStates' })"
        ></BaseButton>
        <BaseButton
          title="確認"
          buttonStyle="primary"
          :disabledState="
            sumWaterIntakeOneDay === $store.getters.sumWaterIntakeOneDay
          "
          @click="updateSumWaterIntake"
        ></BaseButton>
      </div>
    </main>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import FormCard from "@/components/recording/FormCard";
import WaterRecordIcon from "@/assets/images/ic_water_record.svg?inline";

export default {
  components: {
    BaseTitle,
    BaseButton,
    FormCard,
    WaterRecordIcon
  },
  data() {
    return {
      sumWaterIntakeOneDay: this.$store.getters.sumWaterIntakeOneDay
    };
  },
  methods: {
    updateSumWaterIntake() {
      this.$store.dispatch("updateSumWaterIntake", {
        remember_token: localStorage.getItem("token"),
        user_id: `${this.$store.getters.userProfile.id}`,
        water:
          this.sumWaterIntakeOneDay - this.$store.getters.sumWaterIntakeOneDay
      });
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
    width: 143px;
    margin: 0 7px;
  }
}
</style>
