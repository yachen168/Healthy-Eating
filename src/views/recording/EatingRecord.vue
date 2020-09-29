<template>
  <div>
    <main>
      <Title title="早餐的營養攝取記錄"></Title>
      <form action="">
        <RecordingTable
          :fields="fields"
          :items="items"
          @update:quantity="updateQuantity"
        ></RecordingTable>
        <div class="button-wrapper">
          <BaseButton
            title="取消"
            :disabledState="true"
            buttonStyle="outline-default"
          ></BaseButton>
          <BaseButton title="確認" :disabledState="false"></BaseButton>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import Title from "@/components/common/BaseTitle";
import RecordingTable from "@/components/recording/RecordingTable";
import BaseButton from "@/components/common/BaseButton";
export default {
  components: {
    Title,
    RecordingTable,
    BaseButton
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
      // ===== Api 資料格式=====
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
main {
  padding: 30px 32px 10px;
  .base-title {
    margin-bottom: 23px;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 11px;
    .BaseButton {
      flex: 1 0 0;
    }
    .BaseButton + .BaseButton {
      margin-left: 14px;
    }
  }
}
</style>
