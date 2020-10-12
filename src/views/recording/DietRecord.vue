<template>
  <div>
    <main>
      <Title :title="`${diets[$route.params.dietType].name}的營養攝取記錄`" />
      <form @submit.prevent>
        <RecordingTable
          :fields="fields"
          :items="$store.getters.historyOfAMealRecording"
          @update:quantity="updateQuantity"
          @showModal="dataOfConversionTable = $event"
        />
        <div class="button-wrapper">
          <BaseButton
            title="取消"
            buttonStyle="outline-default"
            :disabledState="false"
            @click="$router.push({ name: 'RecordingStates' })"
          />
          <BaseButton
            title="確認"
            buttonStyle="primary"
            :disabledState="comfirmButtonState"
            @click="confirmUpdate"
          />
        </div>
      </form>
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
import RecordingTable from "@/components/recording/RecordingTable";
import BaseButton from "@/components/common/BaseButton";
import ConversionTable from "@/components/recording/ConversionTable";
import nutritionalInformation from "@/NutritionalConversion.js"; // 六大食物資料

export default {
  components: {
    Title,
    RecordingTable,
    BaseButton,
    ConversionTable
  },
  data() {
    return {
      pageTitle: "",
      dataOfConversionTable: {},
      comfirmButtonState: true,
      diets: {
        breakfast: {
          name: "早餐",
          symbol: 1
        },
        lunch: {
          name: "午餐",
          symbol: 2
        },
        snack: {
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
    updateQuantity(data, num) {
      let total = data.item[data.field.key];
      if (total === 0 && num < 0) return;
      if (total === 10 && num > 0) return;
      data.item[data.field.key] += num;
      this.checkComfirmButtonState();
    },
    checkComfirmButtonState() {
      const obj = this.$store.getters.historyOfAMealRecording[0];
      obj.fruits ||
      obj.vegetables ||
      obj.grains ||
      obj.nuts ||
      obj.proteins ||
      obj.dairy
        ? (this.comfirmButtonState = false)
        : (this.comfirmButtonState = true);
    },
    async confirmUpdate() {
      const diet_type = this.diets[this.$route.params.dietType].symbol;
      const historyOfAMealRecording = this.$store.getters;
      const diet_id = this.$store.getters.historyOfAMealRecordingID;

      // 先前有紀錄則編輯該筆歷史資料，無紀錄過則直接新增
      if (diet_id) {
        await this.$store.dispatch("updateDiet", {
          diet_id: diet_id,
          data: {
            ...this.$store.getters.historyOfAMealRecording[0],
            _method: "put",
            diet_type: diet_type
          }
        });
      } else {
        await this.$store.dispatch("addNewDiet", {
          ...this.$store.getters.historyOfAMealRecording[0],
          diet_type: diet_type
        });
      }
      this.$router.push({ name: "RecordingStates" });
    }
  },
  computed: {
    nutritionalInformation() {
      return this.dataOfConversionTable.key
        ? nutritionalInformation[this.dataOfConversionTable.key].items
        : "";
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
