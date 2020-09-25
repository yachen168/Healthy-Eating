<template>
  <div>
    <b-table stacked small :fields="fields" :items="items" responsive="sm">
      <template v-slot:cell()="data">
        <div class="record recording-col">
          <b-icon
            @click="$emit('update:quantity', data, -0.5)"
            icon="patch-minus"
          />
          <span class="unit">{{ data.value }}</span>
          <b-icon
            @click="$emit('update:quantity', data, 0.5)"
            icon="file-plus"
          />
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .table td {
  border-top: 1px dashed #9cc2b0;
  padding: 20px;
}
::v-deep .table.b-table.b-table-stacked > tbody > tr > :first-child {
  border-top: none;
}

::v-deep .table.b-table.b-table-stacked > tbody > tr {
  padding: 10px;
}
::v-deep .table.b-table.b-table-stacked > tbody > tr > [data-label]::before {
  text-align: left;
  padding-left: 30px;
  background-size: 25px;
  background-image: radial-gradient(
    circle at 50% 50%,
    #407d60 10px,
    transparent 11px
  );
  background-repeat: no-repeat;
}
::v-deep .table.b-table.b-table-stacked > tbody > tr > [data-label]::before {
  width: 50%;
}

::v-deep .table.b-table.b-table-stacked > tbody > tr > [data-label] > div {
  width: 50%;
}
.record {
  user-select: none;
  text-align: right;
  svg {
    cursor: pointer;
  }
  .total {
    min-width: 32px;
    margin: 0 4px;
    font-size: 13px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    background-color: #f5f5f5;
    border-radius: 2px;
  }
  .unit {
    display: inline-block;
    text-align: center;
    margin: 0 10px;
    width: 30px;
  }
}
</style>
