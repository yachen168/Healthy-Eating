<template>
  <div>
    <b-table stacked small :fields="fields" :items="items" responsive="sm">
      <template v-slot:cell()="data">
        <div class="recording">
          <b-icon
            @click="$emit('update:quantity', data, -0.5)"
            icon="patch-minus"
          />
          <span class="quantity">{{
            data.value ? data.value.toFixed(1) : data.value
          }}</span>
          <b-icon
            @click="$emit('update:quantity', data, 0.5)"
            icon="file-plus"
          />
          <!-- 奶品類的單位：杯，水的單位：公升，其餘的單位：份 -->
          <span class="unit">{{
            data.field.key === "dairy"
              ? "杯"
              : data.field.key === "water"
              ? "公升"
              : "份"
          }}</span>
        </div>
        <span class="info"
          ><b-icon icon="info-circle" aria-hidden="true"></b-icon>份量說明</span
        >
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
.table {
  background-color: #fff;
  border-radius: 6px;
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
  color: #383838;
}

::v-deep .table.b-table.b-table-stacked > tbody > tr {
  padding: 0 10px;
  > :first-child {
    background: none;
  }
  > [data-label]::before {
    width: 60%;
    text-align: left;
    padding: 0 0 25px 35px;
    background-size: 30px;
    background-image: radial-gradient(
      circle at 15px 20px,
      #c4c4c4 15px,
      transparent 11px
    );
    background-repeat: no-repeat;
  }
  > [data-label] > div {
    width: 40%;
    height: 30px;
    margin-top: 8px;
    padding: 0;
  }
}

.recording {
  user-select: none;
  text-align: right;
  color: #383838;
  font-weight: 700;
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
  .quantity {
    display: inline-block;
    text-align: center;
    margin: 0 4px;
    min-width: 32px;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    background-color: #f5f5f5;
  }
  .unit {
    font-size: 14px;
    margin-left: 10px;
  }
}

.info {
  color: #407d60;
  position: absolute;
  bottom: 15px;
  left: 35px;
  font-size: 14px;
  cursor: pointer;
  svg {
    margin-right: 3px;
  }
}
</style>
