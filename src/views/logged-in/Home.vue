<template>
  <div>
    <Navbar></Navbar>
    <main>
      <section class="meals">
        <RecordingRectangle title="飲水量"></RecordingRectangle>
        <RecordingRectangle title="早餐"></RecordingRectangle>
        <RecordingRectangle title="午餐"></RecordingRectangle>
        <RecordingRectangle title="午茶點心"></RecordingRectangle>
        <RecordingRectangle title="晚餐"></RecordingRectangle>
        <RecordingRectangle title="宵夜"></RecordingRectangle>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import RecordingRectangle from "@/components/common/RecordingRectangle";
export default {
  components: {
    RecordingRectangle,
    Navbar
  },
  data() {}
};
</script>

<style lang="scss" scoped>
.meals {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
</style>
