<template>
  <div>
    <main>
      <BaseTitle :title="pageTitle">
        <h2 class="sub-title" v-if="!canBeModified">
          僅供瀏覽，無法修改非 2 日內記錄
        </h2></BaseTitle
      >
      <!-- ==== 飲水量、早、中、點心、晚餐、宵夜 紀錄狀態 ==== -->
      <b-row class="meals" no-gutters>
        <b-col
          cols="6"
          class="card-wrapper"
          v-for="meal in meals"
          :key="meal.type"
          @click="toDietRecordingPage(meal.type)"
        >
          <RecordingCard
            :hasHeaderIcon="canBeModified"
            :hasBodyIcon="true"
            :hasBorder="true"
            :class="{
              recorded: $store.getters.dietaryRecordingState[meal.type]
            }"
          >
            <img
              slot="card-body"
              :src="
                $store.getters.dietaryRecordingState[meal.type]
                  ? meal.imgUrl_filled
                  : meal.imgUrl_empty
              "
              :alt="meals.name"
            />
            <span slot="card-footer">{{ meal.name }}</span></RecordingCard
          >
        </b-col>
      </b-row>
      <!-- ====== 體重紀錄狀態 ====== -->
      <b-row class="weight">
        <b-col
          cols="12"
          class="card-wrapper"
          @click="weightCardClickEventHandler"
        >
          <RecordingCard
            :hasBorder="true"
            :class="{
              recorded: $store.getters.isWeightOfSpecificDateRecorded,
              disabled: !canBeModified
            }"
          >
            <p slot="card-body" class="title">
              {{ $store.getters.weightOfSpecificDate.weight }}kg<PenIcon
                class="icon-pen"
                v-if="canBeModified"
              />
            </p>
            <span slot="card-footer" class="description">{{
              sectionTitle_weight
            }}</span>
          </RecordingCard>
        </b-col>
      </b-row>
      <hr class="divid" />
      <!-- ====== 營養總攝取量 ====== -->
      <b-row class="sum-nutrition" no-gutters>
        <h2>{{ sectionTitle_nutrition }}營養總攝取量</h2>
        <b-col cols="4" v-for="nutrition in nutritions" :key="nutrition.type">
          <RecordingCard :hasBodyIcon="true">
            <img
              slot="card-body"
              :src="nutrition.imgUrl"
              :alt="nutritions.type"
            />
            <span slot="card-footer" class="description"
              >{{
                $store.getters.sumDietaryIntake
                  ? $store.getters.sumDietaryIntake[nutrition.type]
                  : 0
              }}/{{ $store.getters.dietaryStandard[nutrition.type] }}</span
            ></RecordingCard
          >
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import dayjs from "dayjs";
import BaseTitle from "@/components/common/BaseTitle";
import RecordingCard from "@/components/recording/RecordingCard";
import PenIcon from "@/assets/images/ic_pen.svg?inline";
import utilities from "@/utilities/utilities";

export default {
  components: {
    BaseTitle,
    RecordingCard,
    PenIcon
  },
  data() {
    return {
      meals: [
        {
          type: "water",
          name: "飲水量",
          imgUrl_empty: require("@/assets/images/ic_water.svg"),
          imgUrl_filled: require("@/assets/images/ic_water_selected.svg")
        },
        {
          type: "breakfast",
          name: "早餐",
          imgUrl_empty: require("@/assets/images/ic_morning.svg"),
          imgUrl_filled: require("@/assets/images/ic_morning_selected.svg")
        },
        {
          type: "lunch",
          name: "午餐",
          imgUrl_empty: require("@/assets/images/ic_lunch.svg"),
          imgUrl_filled: require("@/assets/images/ic_lunch_selected.svg")
        },
        {
          type: "dessert",
          name: "午茶點心",
          imgUrl_empty: require("@/assets/images/ic_afternoon.svg"),
          imgUrl_filled: require("@/assets/images/ic_afternoon_selected.svg")
        },
        {
          type: "dinner",
          name: "晚餐",
          imgUrl_empty: require("@/assets/images/ic_dinner.svg"),
          imgUrl_filled: require("@/assets/images/ic_dinner_selected.svg")
        },
        {
          type: "supper",
          name: "宵夜",
          imgUrl_empty: require("@/assets/images/ic_night.svg"),
          imgUrl_filled: require("@/assets/images/ic_night_selected.svg")
        }
      ],
      nutritions: [
        {
          type: "grains",
          imgUrl: require("@/assets/images/ic_malt.svg")
        },
        {
          type: "proteins",
          imgUrl: require("@/assets/images/ic_meat.svg")
        },
        { type: "dairy", imgUrl: require("@/assets/images/ic_milk.svg") },
        {
          type: "vegetables",
          imgUrl: require("@/assets/images/ic_veg.svg")
        },
        {
          type: "fruits",
          imgUrl: require("@/assets/images/ic_fruit.svg")
        },
        { type: "nuts", imgUrl: require("@/assets/images/ic_oil.svg") }
      ]
    };
  },
  methods: {
    toDietRecordingPage(type) {
      if (type !== "water") {
        this.$router.push({
          name: "DietRecord",
          params: { dietType: type },
          query: { date: this.$route.query.date }
        });
      } else {
        this.$router.push({
          name: "WaterRecord",
          query: { date: this.$route.query.date }
        });
      }
    },
    weightCardClickEventHandler() {
      if (this.canBeModified) {
        this.$router.push({
          name: "WeightRecord",
          query: { date: this.$route.query.date }
        });
      }
    }
  },
  computed: {
    pageTitle() {
      return this.$route.query.date
        ? dayjs(this.$route.query.date).format("YYYY/MM/DD")
        : `今天 ${dayjs().format("YYYY/MM/DD")}`;
    },
    sectionTitle_weight() {
      const today = dayjs().format("YYYY-MM-DD");
      const searchedDate = this.$route.query.date || today;
      return searchedDate === today
        ? "今天的體重"
        : `${dayjs(searchedDate).format("YYYY/MM/DD")} 的體重`;
    },
    sectionTitle_nutrition() {
      const today = dayjs().format("YYYY-MM-DD");
      const searchedDate = this.$route.query.date || today;
      return searchedDate === today
        ? "今天"
        : `${dayjs(searchedDate).format("YYYY/MM/DD")}`;
    },
    canBeModified() {
      return !utilities.isSearchedDateExpired(this.$route.query.date);
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  width: fit-content;
  margin: 0 auto 32px;
  padding: 31px 32px 20px;
  .base-title {
    margin-bottom: 23px;
  }
  .sub-title {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -17px;
    margin: 0 auto;
    color: #407d60;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
  }
}
.meals {
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -5px;
  .card-wrapper {
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .recording-card {
    span {
      color: #a8a8a8;
      font-size: 13px;
      margin-top: 2px;
    }
  }
  .recording-card.recorded {
    span {
      color: #407d60;
    }
  }
}

.weight {
  position: relative;
  text-align: center;
  .title {
    position: relative;
    font-size: 24px;
    color: #383838;
    font-weight: 700;
    .icon-pen {
      position: absolute;
      right: -50px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .description {
    position: relative;
    font-size: 13px;
    line-height: 18px;
    color: #407d60;
  }
}

.divid {
  height: 1px;
  background: linear-gradient(
      to right,
      #9cc2b0 12.5%,
      transparent 12.5% 25%,
      #9cc2b0 25% 37.5%,
      transparent 37.5% 50%,
      #9cc2b0 50% 62.5%,
      transparent 62.5% 75%,
      #9cc2b0 75% 87.5%,
      transparent 87.5% 100%
    )
    repeat-x top;
  background-size: 45px 1px;
  border: none;
}

.sum-nutrition {
  padding: 15px 30px 20px;
  background: #fff;
  border-radius: 6px;
  h2 {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 13px;
  }
  .description {
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
