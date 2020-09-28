<template>
  <div>
    <b-table stacked small :fields="fields" :items="items" responsive="sm">
      <!-- ===== 性別欄的顯示方式 ======= -->
      <template v-slot:cell(gender)="data">
        <span v-if="data.value === 'female'">女</span>
        <span v-if="data.value === 'male'">男</span>
        <span v-if="data.value === 'others'">其他</span>
        <span v-else class="empty">未選擇</span>
      </template>

      <!-- ===== 轉換生日欄的資料格式 ======= -->
      <template v-slot:cell(birthday)="data">
        <span v-if="data.value">{{ data.value.split("-").join("/") }}</span>
        <span v-else class="empty">年/月/日</span>
      </template>

      <!-- ===== 身高欄的單位顏色、間距 ======= -->
      <template v-slot:cell(height)="data">
        <span>{{ data.value }}</span>
        <span v-if="data.value" class="unit unit-height">公分/cm</span>
        <span v-else class="empty">未填寫</span>
      </template>

      <!-- ===== 體重欄的單位顏色、間距 ======= -->
      <template v-slot:cell(weight)="data">
        <span>{{ data.value }}</span>
        <span class="unit unit-weight">公斤/kg</span>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      fields: [
        { key: "gender", label: "性別" },
        { key: "birthday", label: "生日" },
        { key: "height", label: "身高" },
        { key: "weight", label: "目前體重" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.table {
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}

.unit {
  color: #407d60;
  &-height {
    margin-left: 16px;
  }
  &-weight {
    margin-left: 20px;
  }
}

.empty {
  font-size: 14px;
  font-weight: 700;
  color: #a8a8a8;
}

::v-deep .table td {
  position: relative;
  border-top: none;
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
  padding: 16px 0 13px;
}

::v-deep .table.b-table.b-table-stacked > tbody > tr {
  padding: 0 10px;
  > :first-child {
    background: none;
  }
}

::v-deep .table.b-table.b-table-stacked > tbody > tr > [data-label]::before {
  text-align: left;
  color: #407d60;
  font-weight: 700;
}

::v-deep .table.b-table.b-table-stacked > tbody > tr > [data-label] > div {
  text-align: right;
  color: #383838;
  font-size: 14px;
  font-weight: 700;
}
</style>
