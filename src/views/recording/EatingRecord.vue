<template>
  <div>
    <Title title="早餐的營養攝取記錄"></Title>
    <main>
      <form action="">
        <RecordingTable
          :fields="fields"
          :items="items"
          @update:quantity="updateQuantity"
        ></RecordingTable>
        <div class="form-footer">
          <div class="button-wrapper">
            <CommonButton title="取消"></CommonButton>
          </div>
          <div class="button-wrapper">
            <CommonButton title="確認" :disabledState="true"></CommonButton>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import Title from "@/components/common/BaseTitle";
import RecordingTable from "@/components/common/RecordingTable";
import CommonButton from "@/components/common/commonButton";
export default {
  components: {
    Title,
    RecordingTable,
    CommonButton
  },
  data() {
    return {
      fields: [
        { key: "grains", label: "全穀雜糧類" },
        { key: "proteins", label: "豆魚蛋肉類" },
        { key: "dairy", label: "奶品類" },
        { key: "vegetables", label: "蔬菜類" },
        { key: "fruits", label: "水果類" },
        { key: "nuts", label: "油脂及堅果種子類" }
      ],
      items: [
        {
          kind: "doctor",
          fruits: 0,
          vegetables: 0,
          grains: 0,
          nuts: 0,
          proteins: 0,
          dairy: 0,
          created_at: "2020-09-14 00:36:32"
        }
      ]
    };
  },
  methods: {
    updateQuantity(data, num) {
      let total = data.item[data.field.key];
      // 數量只能介於 0~10
      if (total === 0 && num < 0) return;
      if (total === 10 && num > 0) return;
      data.item[data.field.key] += num;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 23px;
}
main {
  padding: 0 32px;
  .form-footer {
    display: flex;
    justify-content: space-between;
    margin: 11px -7px 0;
    .button-wrapper {
      min-width: 143px;
      padding: 0 7px;
      flex: 1 0 0;
    }
  }
}
</style>
