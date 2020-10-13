<template>
  <div>
    <main>
      <BaseTitle title="請設定您一天的營養規劃" />
      <!-- 查詢中 -->
      <RecordingTable
        :items="plan"
        :canBeModify="true"
        :fields="fields"
        @update:quantity="updateQuantity"
        @showModal="dataOfConversionTable = $event"
      />
      <BaseButton
        title="設定完成"
        buttonStyle="primary"
        :disabledState="isConfirmButtonPass"
      ></BaseButton>
    </main>
    <footer>
      <div class="state"></div>
      <div class="state"></div>
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
    BaseButton,
    RecordingTable
  },
  data() {
    return {
      isConfirmButtonPass: true,
      fields: [
        { key: "grains", label: "全穀雜糧類" },
        { key: "proteins", label: "豆魚蛋肉類" },
        { key: "dairy", label: "奶品類" },
        { key: "vegetables", label: "蔬菜類" },
        { key: "fruits", label: "水果類" },
        { key: "nuts", label: "油脂及堅果種子類" },
        { key: "water", label: "水" }
      ],
      // ===== 測試資料 =====
      plan: [
        {
          fruits: 0,
          vegetables: 0,
          grains: 0,
          nuts: 0,
          proteins: 0,
          dairy: 0,
          water: 0
        }
      ]
    };
  },
  methods: {
    updateQuantity(e) {
      const key = e.data.field.key;

      this.plan[0][key] += e.addAndSubtractRange;
      this.checkConfirmButtonPass(e.data.item);
    },
    checkConfirmButtonPass(items) {
      this.isConfirmButtonPass = !Object.values(items).some(item => item !== 0);
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 32px;
  .base-title {
    margin-top: 31px;
    margin-bottom: 23px;
  }
  .BaseButton {
    margin-top: 14px;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0;
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

::v-deep
  .table.b-table.b-table-stacked
  > tbody
  > tr
  > [data-label]:last-of-type {
  &::before {
    width: 40%;
  }
  > div {
    width: 60%;
  }
}
</style>
