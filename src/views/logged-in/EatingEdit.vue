<template>
  <div>
    <Navbar></Navbar>
    <Title title="早餐的營養攝取記錄"></Title>
    <form action="">
      <RecordingRow
        :fields="fields"
        :items="items"
        @update:quantity="updateQuantity"
      ></RecordingRow>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Title from "@/components/common/BaseTitle";
import RecordingRow from "@/components/common/RecordingRow";

export default {
  components: {
    Navbar,
    Title,
    RecordingRow
  },
  data() {
    return {
      fields: [
        { key: "grains", label: "全穀雜糧類" },
        { key: "proteins", label: "豆魚蛋肉類" },
        { key: "dairy", label: "奶品類" },
        { key: "vegetables", label: "蔬菜類" },
        { key: "fruits", label: "水果類" },
        { key: "nuts", label: "油脂及堅果類" }
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
      console.log(123);
      let total = data.item[data.field.key];
      // 數量只能介於 0~10
      if (total === 0 && num < 0) return;
      if (total === 10 && num > 0) return;
      data.item[data.field.key] += num;
    }
  }
};
</script>

<style lang="scss" scoped></style>
