<template>
  <div class="weight-record">
    <main>
      <BaseTitle title="體重紀錄"></BaseTitle>
      <FormCard
        unit="kg"
        :quantity="userWeight"
        :canBeModified="canBeModified"
        @minus:quantity="userWeight -= 0.1"
        @add:quantity="userWeight += 0.1"
        ><WaterRecordIcon slot="image" />
      </FormCard>
      <div class="button-wrapper" v-if="canBeModified">
        <BaseButton
          title="取消"
          buttonStyle="outline-default"
          @click="
            $router.push({
              name: 'RecordingStates',
              query: { date: $route.query.date }
            })
          "
        ></BaseButton>
        <BaseButton
          title="確認"
          buttonStyle="primary"
          :disabledState="userWeight === 0"
          @click="confirmUpdateWeight"
        ></BaseButton>
      </div>
      <div class="button-wrapper" v-else>
        <BaseButton
          title="回首頁"
          buttonStyle="primary"
          @click="
            $router.push({
              name: 'RecordingStates',
              query: { date: $route.query.date }
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
import WaterRecordIcon from "@/assets/images/ic_weight_record.svg?inline";
import utilities from "@/utilities/utilities";

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
      const isWeightOfSpecificDateRecorded = this.$store.getters
        .isWeightOfSpecificDateRecorded;

      /* 該日已紀錄則更新該筆紀錄，無紀錄則直接新增 */
      if (isWeightOfSpecificDateRecorded) {
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
  },
  computed: {
    canBeModified() {
      return !utilities.isSearchedDateExpired(this.$route.query.date);
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
