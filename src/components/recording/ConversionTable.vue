<template>
  <div class="conversion-table">
    <b-table responsive :items="items" :fields="fields">
      <template v-slot:head()="scope">
        <div class="text-nowrap">{{ scope.label }}</div>
      </template>
      <template v-slot:cell(quantity)="data">
        <div class="text-nowrap">
          {{ data.value ? data.value : "-" }}
        </div>
      </template>
      <template v-slot:cell(weight)="data">
        <div class="text-nowrap">
          {{ data.value ? data.value + " 克" : "-" }}
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "ConversionTable",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      fields: [
        { key: "name", label: "名稱" },
        { key: "quantity", label: "份量" },
        { key: "weight", label: "重量" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .b-table-sticky-header {
  max-height: 100%;
}

::v-deep table th {
  border-top: none;
}

::v-deep .table {
  td {
    border-top: none;
  }
  tr:not(:first-child) {
    background-color: #fff;
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
  }
}
</style>
