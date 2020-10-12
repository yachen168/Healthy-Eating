<template>
  <div class="setDaliyPlan-page">
    <section class="main">
      <BaseTitle title="請設定您一天的營養規劃" class="base-title" />
      <!-- 查詢中 -->
      <RecordingTable
        :items="$store.getters.historyOfAMealRecording"
        @update:quantity="updateQuantity"
        @showModal="dataOfConversionTable = $event"
      />
    </section>
    <footer>
      <div class="state-before"></div>
      <div class="state-now"></div>
    </footer>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import RecordingTable from "@/components/recording/RecordingTable";
export default {
  components: {
    BaseTitle,
    RecordingTable
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.setDaliyPlan-page {
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
  // margin-top: 312px;
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
.state-before {
  background: #9cc2b0;
}
</style>
