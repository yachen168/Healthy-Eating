<template>
  <div>
    <main>
      <Title :title="$route.params.dietType + '的營養攝取記錄'" />
      <form @submit.prevent>
        <RecordingTable
          :items="userDiet"
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
            @click="$router.push({ name: 'RecordingStates' })"
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
      dataOfConversionTable: {},
      comfirmButtonState: true,
      // ===== Api 資料格式=====
      userDiet: [
        {
          kind: "doctor",
          fruits: 0,
          vegetables: 0,
          grains: 0,
          nuts: 0,
          proteins: 0,
          dairy: 0,
          created_at: "2020-09-14 00:36:32"
        }
      ]
    };
  },
  methods: {
    updateQuantity(data, num) {
      let total = data.item[data.field.key];
      // 數量只能介於 0~10
      if (total === 0 && num < 0) return;
      if (total === 10 && num > 0) return;
      data.item[data.field.key] += num;
      this.checkComfirmButtonState();
    },
    checkComfirmButtonState() {
      const obj = this.userDiet[0];
      obj.fruits ||
      obj.vegetables ||
      obj.grains ||
      obj.nuts ||
      obj.proteins ||
      obj.dairy
        ? (this.comfirmButtonState = false)
        : (this.comfirmButtonState = true);
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
