<template>
  <div class="weight-record">
    <main>
      <BaseTitle title="體重紀錄"></BaseTitle>
      <FormCard
        unit="kg"
        :quantity="+$store.getters.userProfile.weight"
        @minus:quantity="
          $store.commit('userProfile', {
            ...$store.getters.userProfile,
            weight: +$store.getters.userProfile.weight - 0.1
          })
        "
        @add:quantity="
          $store.commit('userProfile', {
            ...$store.getters.userProfile,
            weight: +$store.getters.userProfile.weight + 0.1
          })
        "
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
          :disabledState="+$store.getters.userProfile.weight === 0"
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
  methods: {
    confirmUpdateWeight() {
      this.$store.dispatch("postUserWeight", {
        user_id: this.$store.getters.userProfile.id,
        remember_token: localStorage.getItem("token"),
        weight: this.$store.getters.userProfile.weight
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
