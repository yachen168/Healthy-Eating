<template>
  <main>
    <div class="calendar-wrapper">
      <Calendar
        :highlighted="highlighted"
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
    async toRecordingStatePage($event) {
      const searchedDate = dayjs($event).format("YYYY-MM-DD");

      await this.$store.dispatch("fetchDietaryRecording", {
        user_id: this.$store.getters.userProfile.id,
        kind: 0,
        start_date: searchedDate,
        end_date: searchedDate
      });

      this.$router.push({
        name: "RecordingStates",
        params: { date: searchedDate }
      });
    }
  },
  computed: {
    highlighted() {
      const dates_diet = this.$store.getters.datesHaveBeenRecorded_diet;
      const dates_water = this.$store.getters.datesHaveBeenRecorded_water;
      const dates_weight = this.$store.getters.datesHaveBeenRecorded_weight;
      const all_dates = dates_diet.concat(dates_water).concat(dates_weight);
      return { dates: all_dates };
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
