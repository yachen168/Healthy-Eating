<template>
  <div>
    <main>
      <BaseTitle title="今天 2020/09/26"></BaseTitle>
      <b-row class="meals" no-gutters>
        <!-- ==== 飲水量、早、中、點心、晚餐、宵夜 紀錄狀態 ==== -->
        <b-col
          cols="6"
          class="card-wrapper"
          v-for="(item, index) in items"
          :key="item"
        >
          <RecordingCard
            :hasHeaderIcon="true"
            :hasBodyIcon="true"
            :borderStyle="
              mealsRecordingStates[index].detail ? 'dark-green' : 'light-green'
            "
            ><span>{{ item }}</span></RecordingCard
          >
        </b-col>
      </b-row>
      <b-row class="water">
        <!-- ==== 體重紀錄狀態 ==== -->
        <b-col cols="12" class="card-wrapper">
          <RecordingCard borderStyle="light-green"
            ><div>
              <p class="weight">{{ "45 kg" }}</p>
              <span class="description">今天體重</span>
            </div></RecordingCard
          >
        </b-col>
      </b-row>
      <hr class="divid" />
      <b-row class="sum-nutrition" no-gutters>
        <h2>
          今天營養總攝取量
        </h2>
        <b-col cols="4" v-for="nutrition in nutritions" :key="nutrition">
          <RecordingCard :hasBodyIcon="true" size="sm"
            ><span class="description"
              >{{ sumNutritionOfDay[0][nutrition] }}/{{
                targetNutritionOfDay[nutrition]
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
export default {
  components: {
    BaseTitle,
    RecordingCard
  },
  data() {
    return {
      items: ["飲水量", "早餐", "午餐", "午茶點心", "晚餐", "宵夜"],
      nutritions: [
        "grains",
        "proteins",
        "dairy",
        "vegetables",
        "fruits",
        "nuts"
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
  padding: 0 33px;
  .page-title {
    margin-bottom: 23px;
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
  .recording-card.dark-green span {
    color: #407d60;
  }
}

.water {
  position: relative;
  text-align: center;
  .weight {
    font-size: 24px;
    color: #383838;
    font-weight: 700;
  }
  .description {
    font-size: 13px;
    line-height: 28px;
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
  padding: 15px 30px;
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
