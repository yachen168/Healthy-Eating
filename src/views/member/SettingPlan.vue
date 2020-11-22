<template>
  <div>
    <main>
      <BaseTitle title="請設定您一天的營養規劃" />
      <RecordingTable
        :items="plan"
        :canBeModified="true"
        :fields="fields"
        :min="0"
        :max="10"
        @update:quantity="updateQuantity"
        @showModal="dataOfConversionTable = $event"
      />
      <BaseButton
        title="設定完成"
        buttonStyle="primary"
        :disabledState="isConfirmButtonPass"
        @click="isSettingSuccessModalShow = true"
      ></BaseButton>
    </main>
    <footer>
      <div class="state"></div>
      <div class="state"></div>
    </footer>
    <SettingPlanSuccessModal
      v-if="isSettingSuccessModalShow"
      @closeSettingSuccessModal="isSettingSuccessModalShow = false"
      @confirmSettingPlan="confirmSettingPlan"
    />
    <b-modal id="modal-scrollable" scrollable hide-footer>
      <div slot="modal-title">
        {{ dataOfConversionTable.label }} 1 份<br />換算表
      </div>
      <ConversionTable :items="nutritionalInformation" />
    </b-modal>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import RecordingTable from "@/components/recording/RecordingTable";
import ConversionTable from "@/components/recording/ConversionTable";
import SettingPlanSuccessModal from "@/components/recording/SettingPlanSuccessModal";
import nutritionalInformation from "@/NutritionalConversion.js";

export default {
  components: {
    BaseTitle,
    BaseButton,
    RecordingTable,
    ConversionTable,
    SettingPlanSuccessModal
  },
  data() {
    return {
      dataOfConversionTable: {},
      isSettingSuccessModalShow: false,
      isConfirmButtonPass: true,
      fields: [
        { key: "grains", label: "全穀雜糧類" },
        { key: "proteins", label: "豆魚蛋肉類" },
        { key: "dairy", label: "奶品類" },
        { key: "vegetables", label: "蔬菜類" },
        { key: "fruits", label: "水果類" },
        { key: "nuts", label: "油脂及堅果種子類" },
        { key: "water", label: "水" }
      ],
      plan: [
        {
          user_id: this.$store.getters.userProfile.id,
          kind: 1,
          diet_type: 0,
          fruits: 0,
          vegetables: 0,
          grains: 0,
          nuts: 0,
          proteins: 0,
          dairy: 0,
          water: 0
        }
      ]
    };
  },
  methods: {
    updateQuantity(e) {
      const key = e.data.field.key;

      this.plan[0][key] += e.addAndSubtractRange;
      this.checkConfirmButtonPass(e.data.item);
    },
    checkConfirmButtonPass(items) {
      const keys = [
        "dairy",
        "fruits",
        "grains",
        "nuts",
        "proteins",
        "vegetables",
        "water"
      ];
      this.isConfirmButtonPass = keys.every(key => this.plan[0][key] === 0);
    },
    async confirmSettingPlan() {
      await this.$store.dispatch("addNewDiet", this.plan[0]);
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
  padding: 0 32px;
  .base-title {
    margin-top: 31px;
    margin-bottom: 23px;
  }
  .BaseButton {
    margin-top: 14px;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0;
  .state {
    width: 70px;
    height: 8px;
    border-radius: 4px;
  }
  .state:first-child {
    background: #9cc2b0;
  }
  .state:last-child {
    margin-left: 10px;
    background: #407d60;
  }
}

::v-deep
  .table.b-table.b-table-stacked
  > tbody
  > tr
  > [data-label]:last-of-type {
  &::before {
    width: 40%;
  }
  > div {
    width: 60%;
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

<style></style>
