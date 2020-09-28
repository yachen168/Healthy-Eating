<template>
  <div class="calendar-page">
    <main>
      <div class="calendar-wrapper">
        <Calendar :highlighted="highlighted"></Calendar>
      </div>
    </main>
  </div>
</template>

<script>
import Calendar from "@/components/recording/Calendar";
export default {
  components: {
    Calendar
  },
  data() {
    return {
      highlighted: {
        dates: [
          new Date(2020, 8, 23),
          new Date(2020, 8, 26),
          new Date(2020, 8, 27),
          new Date(2020, 8, 30)
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  padding: 30px 20px 0;
}
.calendar-wrapper {
  max-width: 576px;
}
</style>
