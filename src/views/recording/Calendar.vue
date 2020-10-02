<template>
  <div class="calendar-page">
    <main>
      <div class="calendar-wrapper">
        <Calendar
          :highlighted="highlighted"
          :selectedDate="selectedDate"
          @update:date="printSelectedDate"
        ></Calendar>
      </div>
    </main>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Calendar from "@/components/recording/Calendar";
export default {
  components: {
    Calendar
  },
  data() {
    return {
      highlighted: {
        dates: [
          new Date(2020, 9, 23),
          new Date(2020, 9, 26),
          new Date(2020, 9, 27),
          new Date(2020, 9, 30)
        ]
      },
      selectedDate: ""
    };
  },
  methods: {
    // 成功接收 selected date
    printSelectedDate(date) {
      // day.js 測試
      console.log(dayjs(date).format("YYYY/MM/DD"));
    }
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
