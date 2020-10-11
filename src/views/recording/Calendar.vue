<template>
  <main>
    <div class="calendar-wrapper">
      <Calendar
        :highlighted="$store.getters.datesHaveBeenRecorded"
        @input="toRecordingStatePage($event)"
      ></Calendar>
    </div>
  </main>
</template>

<script>
import dayjs from "dayjs";
import Calendar from "@/components/recording/Calendar";
export default {
  components: {
    Calendar
  },
  methods: {
    toRecordingStatePage($event) {
      const date = dayjs($event).format("YYYY-MM-DD");
      this.$router.push({
        name: "RecordingStates",
        query: { date: date }
      });
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
