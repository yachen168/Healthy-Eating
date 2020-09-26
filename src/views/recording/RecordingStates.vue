<template>
  <div>
    <main>
      <BaseTitle title="今天 2020/09/26"></BaseTitle>
      <b-row class="meals" no-gutters>
        <!-- ==== 飲水量、早、中、點心、晚餐、宵夜 紀錄狀態 ==== -->
        <b-col cols="6" class="card-wrapper" v-for="item in items" :key="item">
          <RecordingCard :hasHeaderIcon="true" borderStyle="light-green"
            ><span>{{ item }}</span></RecordingCard
          >
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import RecordingCard from "@/components/common/RecordingCard";
export default {
  components: {
    BaseTitle,
    RecordingCard
  },
  data() {
    return {
      items: ["飲水量", "早餐", "午餐", "午茶點心", "晚餐", "宵夜"]
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  width: fit-content;
  margin: 0 auto;
  padding: 0 33px;
  .page-title {
    margin-bottom: 23px;
  }
}
.meals {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -5px;
  .card-wrapper {
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .recording-card {
    width: 100%;
    span {
      color: #a8a8a8;
      font-size: 13px;
      margin-top: 2px;
    }
  }
}
</style>
