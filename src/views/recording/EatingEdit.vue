<template>
  <div>
    <Navbar></Navbar>
    <Title title="早餐的營養攝取記錄"></Title>
    <form action="">
      <RecordingRow
        v-for="(recording, index) in recordings"
        :key="recording.type"
        :recording="recording"
        @minus:quantity="minus(index)"
        @add:quantity="add(index)"
      ></RecordingRow>
      <RecordingRow
        :recording="water"
        @minus:quantity="minus(index)"
        @add:quantity="add(index)"
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
      // fake data
      recordings: [
        { type: "全穀雜糧類", quantity: 0, unit: "碗" },
        { type: "豆魚蛋肉類", quantity: 0, unit: "份" },
        { type: "奶品類", quantity: 0, unit: "杯" },
        { type: "蔬菜類", quantity: 0, unit: "份" },
        { type: "水果類", quantity: 0, unit: "份" },
        { type: "油脂及堅果種子類", quantity: 0, unit: "份" }
      ],
      water: { type: "飲水量", quantity: 0, unit: "公升" }
    };
  },
  methods: {
    minus(index) {
      this.recordings[index].quantity -= 0.5;
      if (this.recordings[index].quantity < 0) {
        this.recordings[index].quantity = 0;
      }
    },
    add(index) {
      this.recordings[index].quantity += 0.5;
      if (this.recordings[index].quantity > 10) {
        this.recordings[index].quantity = 10.0;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
