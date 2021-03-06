<template>
  <div>
    <main>
      <Title :title="`${diets[$route.params.dietType].name}的營養攝取記錄`" />
      <form @submit.prevent>
        <RecordingTable
          :items="[$store.getters.historyOfAMealRecording]"
          :canBeModified="canBeModified"
          :fields="fields"
          :min="0"
          :max="10"
          @update:quantity="updateQuantity"
          @showModal="dataOfConversionTable = $event"
        />
      </form>
      <div class="button-wrapper" v-if="canBeModified">
        <BaseButton
          title="取消"
          buttonStyle="outline-default"
          :disabledState="false"
          @click="
            $router.push({
              name: 'RecordingStates',
              params: { date: $route.params.date }
            })
          "
        />
        <BaseButton
          title="確認"
          buttonStyle="primary"
          :disabledState="isConfirmButtonPass"
          @click="confirmUpdate"
        />
      </div>
      <div class="button-wrapper" v-else>
        <BaseButton
          title="回首頁"
          buttonStyle="primary"
          @click="
            $router.push({
              name: 'RecordingStates',
              params: { date: $route.params.date }
            })
          "
        />
      </div>
    </main>
    <b-modal id="modal-scrollable" scrollable hide-footer>
      <div slot="modal-title">
        {{ dataOfConversionTable.label }} 1 份<br />換算表
      </div>
      <ConversionTable :items="nutritionalInformation" />
    </b-modal>
  </div>
</template>

<script>
import Title from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import RecordingTable from "@/components/recording/RecordingTable";
import ConversionTable from "@/components/recording/ConversionTable";
import nutritionalInformation from "@/NutritionalConversion.js";
import utilities from "@/utilities/utilities";
import dayjs from "dayjs";

export default {
  components: {
    Title,
    RecordingTable,
    ConversionTable,
    BaseButton
  },
  data() {
    return {
      pageTitle: "",
      isConfirmButtonPass: true,
      dataOfConversionTable: {},
      diets: {
        breakfast: {
          name: "早餐",
          symbol: 1
        },
        lunch: {
          name: "午餐",
          symbol: 2
        },
        dessert: {
          name: "午茶點心",
          symbol: 3
        },
        dinner: {
          name: "晚餐",
          symbol: 4
        },
        supper: {
          name: "宵夜",
          symbol: 5
        }
      },
      fields: [
        { key: "grains", label: "全穀雜糧類" },
        { key: "proteins", label: "豆魚蛋肉類" },
        { key: "dairy", label: "奶品類" },
        { key: "vegetables", label: "蔬菜類" },
        { key: "fruits", label: "水果類" },
        { key: "nuts", label: "油脂及堅果種子類" }
      ]
    };
  },
  methods: {
    updateQuantity(e) {
      const key = e.data.field.key;

      this.$store.commit("updateHistoryOfAMealRecording", {
        ...this.$store.getters.historyOfAMealRecording,
        [key]:
          this.$store.getters.historyOfAMealRecording[key] +
          e.addAndSubtractRange
      });

      this.checkConfirmButtonPass(e.data.item);
    },
    checkConfirmButtonPass(items) {
      this.isConfirmButtonPass = Object.values(
        this.$store.getters.historyOfAMealRecording
      ).every(item => item === 0);
    },
    async confirmUpdate() {
      const diet_type = this.diets[this.$route.params.dietType].symbol;
      const diet_id = this.$store.getters.historyOfAMealRecordingID;
      const user_id = this.$store.getters.userProfile.id;

      // 先前有紀錄則編輯該筆歷史資料，無紀錄過則直接新增
      if (diet_id) {
        await this.$store.dispatch("updateDiet", {
          diet_id: diet_id,
          data: {
            ...this.$store.getters.historyOfAMealRecording,
            _method: "put",
            diet_type: diet_type
          }
        });
      } else {
        await this.$store.dispatch("addNewDiet", {
          ...this.$store.getters.historyOfAMealRecording,
          diet_type: diet_type,
          kind: 0,
          user_id: user_id
        });
      }
      this.$router.push({
        name: "RecordingStates",
        params: { date: this.$route.params.date }
      });
    }
  },
  computed: {
    nutritionalInformation() {
      return this.dataOfConversionTable.key
        ? nutritionalInformation[this.dataOfConversionTable.key].items
        : "";
    },
    canBeModified() {
      return !utilities.isSearchedDateExpired(this.$route.params.date);
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 30px 32px 10px;
  .base-title {
    margin-bottom: 23px;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 11px;
    .BaseButton {
      flex: 1 0 0;
    }
    .BaseButton + .BaseButton {
      margin-left: 14px;
    }
  }
}

::v-deep .modal-dialog {
  position: absolute;
  width: 82%;
  max-width: 473px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 514px;
  .modal-header {
    border-bottom: none;
  }
  .modal-title {
    font-size: 24px;
    color: #407d60;
    font-weight: 700;
  }
  .modal-body {
    padding: 0 10px;
  }
  .b-table-sticky-header,
  .table-responsive {
    margin-bottom: 0;
  }
  .modal-header .close {
    padding: 0;
    margin: 4px 0 0;
  }
}
</style>
