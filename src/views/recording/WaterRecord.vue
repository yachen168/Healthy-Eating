<template>
  <div class="water-record">
    <main>
      <BaseTitle title="飲水紀錄量"></BaseTitle>
      <FormCard
        unit="公升"
        :quantity="$store.getters.sumWaterIntakeOneDay"
        :canBeModified="canBeModified"
        @minus:quantity="$store.commit('updateSumWaterIntakeOneDay', -0.25)"
        @add:quantity="$store.commit('updateSumWaterIntakeOneDay', 0.25)"
        ><WaterRecordIcon slot="image" />
        <div slot="footer" class="target">
          每日目標：{{ $store.getters.userProfile.diet_standard.water }}公升
        </div></FormCard
      >
      <div class="button-wrapper" v-if="canBeModified">
        <BaseButton
          title="取消"
          buttonStyle="outline-default"
          @click="
            $router.push({
              name: 'RecordingStates',
              params: { date: $route.params.date }
            })
          "
        ></BaseButton>
        <BaseButton
          title="確認"
          buttonStyle="primary"
          :disabledState="$store.getters.sumWaterIntakeOneDay === 0"
          @click="updateSumWaterIntake"
        ></BaseButton>
      </div>
      <div class="button-wrapper" v-else>
        <BaseButton
          title="回首頁"
          buttonStyle="primary"
          @click="
            $router.push({
              name: 'RecordingStates',
              params: { date: $route.params.date }
            })
          "
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
import utilities from "@/utilities/utilities";

export default {
  components: {
    BaseTitle,
    BaseButton,
    FormCard,
    WaterRecordIcon
  },
  methods: {
    updateSumWaterIntake() {
      if (this.$store.getters.sumWaterIntake.length) {
        this.$store.dispatch("updateWaterIntake", {
          water_id: this.$store.getters.idOfWaterIntake,
          data: {
            _method: "PUT",
            water: this.$store.getters.sumWaterIntakeOneDay
          }
        });
      } else {
        this.$store.dispatch("addNewWaterIntake", {
          remember_token: localStorage.getItem("token"),
          user_id: `${this.$store.getters.userProfile.id}`,
          water: this.$store.getters.sumWaterIntakeOneDay
        });
      }
      this.$router.push({ name: "RecordingStates" });
    }
  },
  computed: {
    canBeModified() {
      return !utilities.isSearchedDateExpired(this.$route.params.date);
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
    flex: 1 0 0;
  }
  .BaseButton + .BaseButton {
    margin-left: 7px;
  }
}
</style>
