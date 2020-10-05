<template>
  <div class="weight-record">
    <main>
      <BaseTitle title="體重紀錄"></BaseTitle>
      <FormCard
        unit="kg"
        :quantity="weight.toFixed(1)"
        @minus:quantity="weight -= 0.1"
        @add:quantity="weight += 0.1"
        ><WaterRecordIcon slot="image" />
      </FormCard>
      <div class="button-wrapper">
        <BaseButton title="取消" buttonStyle="outline-default"></BaseButton>
        <BaseButton
          title="確認"
          :disabledState="false"
          buttonStyle="primary"
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
      weight: 45
    };
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
