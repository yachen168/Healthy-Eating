<template>
  <div>
    <Datepicker
      :inline="true"
      :language="language"
      :format="DatePickerFormat"
      :highlighted="highlighted"
      :value="selectedDate"
      maximum-view="day"
      calendar-button-icon="fa fa-calendar"
      calendar-class="calendarStyle"
      @input="$emit('update:date', $event)"
    >
    </Datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  props: {
    highlighted: {
      type: Object,
      required: true
    },
    selectedDate: {
      type: String,
      defualt: ""
    }
  },
  data() {
    return {
      date: "",
      DatePickerFormat: "yyyy-MM-dd",
      language: {
        language: "Chinese",
        days: ["日", "一", "二", "三", "四", "五", "六"],
        ymd: true,
        yearSuffix: " /",
        months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        monthsAbbr: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .calendarStyle {
  width: 100%;
  margin: 0 auto;
  border: none;
  color: #262d33;
  header {
    height: 50px;
    margin-bottom: 15px;
    background-color: #e5e5e5;
    .day__month_btn {
      font-size: 24px;
      font-weight: 700;
      color: #383838;
    }
  }
  header ~ div {
    padding: 10px 0;
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0 0 3px #fff;
  }
  .cell {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 11vw;
    font-size: 14px;
    color: #383838;
    max-height: 62px;
  }
  .cell.today {
    position: relative;
    color: #fff;
    background-image: radial-gradient(
      circle at 50% 50%,
      #407d60 14px,
      transparent 15px
    );
    background-repeat: no-repeat;
  }
  .cell.day-header {
    height: 9vw;
    font-size: 13px;
    color: #6e7781;
  }
  .cell.highlighted {
    position: relative;
    background-color: transparent;
    border: none;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #9cc2b0;
    }
  }
}

::v-deep .vdp-datepicker__calendar {
  background-color: transparent;
  & header {
    padding: 0 10px;
  }
  & header .next,
  .prev {
    &::after {
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: none;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      transform: translate(0, 0);
    }
  }
  & header .next::after {
    background-image: url("~@/assets/images/ic_next.svg");
  }
  & header .prev::after {
    background-image: url("~@/assets/images/ic_prev.svg");
  }
  & .cell:not(.blank):not(.disabled).day:hover {
    border: 1px solid #fff;
  }
  & .cell.selected:hover {
    background-color: #fff;
  }
  & .cell.selected {
    background-color: #fff;
  }
}
</style>
