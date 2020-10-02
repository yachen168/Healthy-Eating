<template>
  <div>
    <main>
      <BaseTitle title="今天 2020/09/26"></BaseTitle>
      <b-row class="meals" no-gutters>
        <!-- ==== 飲水量、早、中、點心、晚餐、宵夜 紀錄狀態 ==== -->
        <b-col
          cols="6"
          class="card-wrapper"
          v-for="(meal, index) in meals"
          :key="meal.type"
        >
          <RecordingCard
            :hasHeaderIcon="true"
            :hasBodyIcon="true"
            :class="{ recorded: mealsRecordingStates[index].detail }"
          >
            <img
              slot="card-body"
              :src="
                mealsRecordingStates[index].detail
                  ? meal.imgUrl_filled
                  : meal.imgUrl_empty
              "
              :alt="meals.type"
            />
            <span slot="card-footer">{{ meal.type }}</span></RecordingCard
          >
        </b-col>
      </b-row>
      <b-row class="weight">
        <!-- ==== 體重紀錄狀態 ==== -->
        <b-col cols="12" class="card-wrapper">
          <RecordingCard :class="{ recorded: true }">
            <p slot="card-body" class="title">
              {{ "45 kg" }}<PenIcon class="icon-pen" />
            </p>
            <span slot="card-footer" class="description">今天體重 </span>
          </RecordingCard>
        </b-col>
      </b-row>
      <hr class="divid" />
      <b-row class="sum-nutrition" no-gutters>
        <h2>今天營養總攝取量</h2>
        <b-col cols="4" v-for="nutrition in nutritions" :key="nutrition.type">
          <RecordingCard :hasBodyIcon="true">
            <img
              slot="card-body"
              :src="nutrition.imgUrl"
              :alt="nutritions.type"
            />
            <span slot="card-footer" class="description"
              >{{ sumNutritionOfDay[0][nutrition.type] }}/{{
                targetNutritionOfDay[nutrition.type]
              }}</span
            ></RecordingCard
          >
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import RecordingCard from "@/components/recording/RecordingCard";
import PenIcon from "@/assets/images/ic_pen.svg?inline";
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
          type: "飲水量",
          imgUrl_empty: require("@/assets/images/ic_water.svg"),
          imgUrl_filled: require("@/assets/images/ic_water_selected.svg")
        },
        {
          type: "早餐",
          imgUrl_empty: require("@/assets/images/ic_morning.svg"),
          imgUrl_filled: require("@/assets/images/ic_morning_selected.svg")
        },
        {
          type: "午餐",
          imgUrl_empty: require("@/assets/images/ic_lunch.svg"),
          imgUrl_filled: require("@/assets/images/ic_lunch_selected.svg")
        },
        {
          type: "午茶點心",
          imgUrl_empty: require("@/assets/images/ic_afternoon.svg"),
          imgUrl_filled: require("@/assets/images/ic_afternoon_selected.svg")
        },
        {
          type: "晚餐",
          imgUrl_empty: require("@/assets/images/ic_dinner.svg"),
          imgUrl_filled: require("@/assets/images/ic_dinner_selected.svg")
        },
        {
          type: "宵夜",
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
      ],
      // ====== api 每餐紀錄狀態資料格式 ======
      mealsRecordingStates: [
        {
          diet_type: "water", // 水格式待轉
          detail: null
        },
        {
          diet_type: "breakfast",
          detail: null
        },
        {
          diet_type: "lunch",
          detail: {
            id: 3, //diet_id
            updated_at: "2020-09-13 00:39:50",
            user_id: 5,
            fruits: 3,
            vegetables: 3,
            grains: 5,
            nuts: 5,
            proteins: 6,
            dairy: null
          }
        },
        {
          diet_type: "snack",
          detail: null // 未紀錄
        },
        {
          diet_type: "dinner",
          detail: null
        },
        {
          diet_type: "supper",
          detail: {
            id: 3, //diet_id
            updated_at: "2020-09-13 00:39:50",
            user_id: 5,
            fruits: 2,
            vegetables: 2.1,
            grains: 55,
            nuts: 5,
            proteins: 6,
            dairy: null
          }
        }
      ],
      // ===== api 當日攝取總量資料格式 =====
      sumNutritionOfDay: [
        {
          id: 9,
          updated_at: "2020-09-28 01:00:50",
          user_id: 15,
          kind: "daily",
          diet_type: "launch",
          fruits: 2,
          vegetables: 3,
          grains: 6,
          nuts: 1,
          proteins: 5,
          dairy: 4
        }
      ],
      // ===== api 目標攝取資料格式 =====
      targetNutritionOfDay: {
        kind: "personal",
        fruits: 4,
        vegetables: 5,
        grains: 5,
        nuts: 5,
        proteins: 5,
        dairy: 5
      }
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  width: fit-content;
  margin: 0 auto 32px;
  padding: 31px 32px 20px;
  .base-title {
    margin-bottom: 20px;
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
